import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import SyncLoader from "react-spinners/SyncLoader";
import auth from "../firebase/firebase.config";
import getBanglaDate from "../utils/bangladate";
import checkAndConvertPostalCode from "../utils/convertIntoBanglaDigit";
import validateInfo from "../utils/infoValidation";
import { uploadFile } from "../utils/uploadFileFromFrontend";
import NationalIDCard from "./NationalIDCard";

const ServerCopyToNID = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [signatureImg, setSignatureImg] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);

  const today = getBanglaDate();

  const [info, setInfo] = useState({
    title: "এনআইডি কার্ড",
    signatureImg: "",
    nidImg: "",
    nameBangla: "",
    nameEnglish: "",
    idNumber: "",
    pinNumber: "",
    fatherNameBangla: "",
    motherName: "",
    birthLocation: "",
    dateOfBirth: "",
    bloodGroup: null,
    location: "",
    email: user.email,
    applyDate: today,
  });

  const handleFileChange = async (event, fieldName) => {
    setImageLoading(true);
    const { files } = event.target;
    if (files?.length) {
      const file = files[0];
      const uploadFileResponse = await uploadFile(file, fieldName);
      if (uploadFileResponse?.success) {
        setSignatureImg(uploadFileResponse.imageUrl);
        setImageLoading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nidNumber = e.target.nidNumber.value;
    const dateOfBirth = e.target.dateOfBirth.value;

    setLoading(true);

    fetch("http://localhost:5000/priceList/668f76383906559fe7ff631c")
      .then((res) => res.json())
      .then((pData) => {
        const price = parseFloat(pData?.data?.autoNid);
        console.log("auto nid card price: ", price);
        if (price) {
          fetch(`http://localhost:5000/users/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
              if (parseFloat(data?.data?.amount) >= price) {
                fetch("http://localhost:5000/serverCopys/", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    title: "সার্ভার কপি",
                    nidNumber: nidNumber,
                    dateOfBirth: dateOfBirth,
                    email: user?.email,
                  }),
                })
                  .then((res) => res.json())
                  .then((sData) => {
                    console.log("sData", sData);
                    if (sData.status == "Success") {
                      // setReFetch(true);
                      toast.success(sData.message);
                      e.target.reset();
                      console.log(sData);
                    } else {
                      toast.error(sData.message);
                      console.log(sData);
                    }
                  });
              }
            });
        }
      });

    try {
      const response = await fetch(
        `http://localhost:5000/api/nid?nid=${nidNumber}&dob=${dateOfBirth}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      const data = await response.json();

      setInfo((preState) => ({
        ...preState,
        signatureImg: signatureImg,
        nidImg: data?.photo,
        nameBangla: data?.nameBangla,
        nameEnglish: data?.nameEnglish,
        idNumber: data?.nationalId,
        pinNumber: data?.pin,
        fatherNameBangla: data?.fatherName,
        motherName: data?.motherName,
        birthLocation: data?.presentDistrict,
        dateOfBirth: data?.dateOfBirth,
        bloodGroup: data?.bloodGroup,
        location: `${
          data?.presentHomeOrHoldingNo
            ? `বাসা/হোল্ডিং:${data?.presentHomeOrHoldingNo}`
            : ""
        }, গ্রাম/রাস্তা: ${data?.presentAdditionalVillageOrRoad},${
          data?.presentMouzaOrMoholla && `${data?.presentMouzaOrMoholla}, `
        } ডাকঘর: ${data?.presentPostOffice} - ${checkAndConvertPostalCode(
          data?.presentPostalCode
        )}, ${data?.presentUpozila},${
          data?.presentCityCorporationOrMunicipality
            ? `${data?.presentCityCorporationOrMunicipality + ","}`
            : ""
        } ${data?.presentDistrict}`,
      }));

      setIsRedirect(true);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <SyncLoader color="#123abc" loading={true} />
      </div>
    );
  }

  if (isRedirect && !loading && validateInfo(info)) {
    return <NationalIDCard info={info} />;
  }

  return (
    <div className="w-full p-10 min-h-screen ">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h1 className="text-1xl md:text-3xl text-center">Auto NID Make</h1>
        <h1 className=" md:text-xl text-center mt-5 ">
          আপনার একাউন্ট থেকে 10 টাকা কাটা হবে।
        </h1>

        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">NID Number (10/17 DIGIT)</span>
          </div>
          <input
            type="text"
            placeholder="NID Number"
            name="nidNumber"
            id="nidNumber"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">DATE OF BIRTH (YYYY-MM-DD)</span>
          </div>
          <input
            type="text"
            placeholder="DATE OF BIRTH (YYYY-MM-DD)"
            name="dateOfBirth"
            id="dateOfBirth"
            className="input input-bordered w-full"
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">SIGNATURE</span>
          </div>

          {imageLoading ? (
            <div className="text-center">
              <h1>Image Uploading ...</h1>
              <SyncLoader color="#123abc" loading={true} />
            </div>
          ) : (
            <div>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "signature")}
                name="signature"
                className="file-input file-input-bordered w-full"
              />
              <div
                className={`w-14 h-12 ml-4 border-2 border-gray-300 rounded ${
                  signatureImg ? "" : "bg-white"
                }`}
              >
                {signatureImg ? (
                  <img
                    src={signatureImg}
                    alt="NID Preview"
                    className="object-cover w-full h-full rounded"
                  />
                ) : (
                  <span className="text-gray-400 text-sm"></span>
                )}
              </div>
            </div>
          )}
        </label>

        <button className="btn w-full  mt-4 btn-primary text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ServerCopyToNID;
