import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import writeImage from "../assets/Mack.png";
import Loading from "../components/Loading";
import auth from "../firebase/firebase.config";
import getBanglaDate from "../utils/bangladate";
import useManageOrderData from "../utils/getManageOrder";
import { uploadFile } from "../utils/uploadFileFromFrontend";
import NationalIDCard from "./NationalIDCard";

const NIDMake = () => {
  const { data } = useManageOrderData();
  const [isRedirect, setIsRedirect] = useState(false);
  const statusData = data?.find((item) => item.title === "এনআইডি কার্ড");
  const [user, loading] = useAuthState(auth);
  const [imageLoading, setImageLoading] = useState(false);
  const [signature, setSignature] = useState(null);
  const [nidImage, setNidImage] = useState(null);
  const [signCopy, setSignCopy] = useState(null);
  const [myOrders, setMyOrders] = useState(null);

  const [error, setError] = useState("");

  const [responseData, setResponseData] = useState(null);

  const [imageUrls, setImageUrls] = useState({
    nidImg: "", // Fixed the closing backtick
    signatureImg: "", // Added the closing backtick
  });

  const today = getBanglaDate();

  const [info, setInfo] = useState({
    title: "এনআইডি কার্ড",
    signature: imageUrls.signatureImg,
    nidImage: imageUrls.nidImg,
    nameBangla: "",
    nameEnglish: "",
    idNumber: "",
    pinNumber: "",
    fatherNameBangla: "",
    motherName: "",
    birthLocation: "",
    dateOfBirth: "",
    applyDate: "",
    bloodGroup: "",
    location: "",
    email: user.email,
    applyDate: today,
  });

  useEffect(() => {
    fetch(`http://localhost:5000/nidMakes/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data?.data);
      });
  }, [user]);

  useEffect(() => {
    if (responseData) {
      setImageUrls({
        nidImg: responseData.photo || "",
        signatureImg: responseData.sign || "",
      });
      setInfo({
        nameBangla: responseData?.nameBen,
        birthLocation: responseData?.birth_place,
        dateOfBirth: responseData?.birth,
        bloodGroup: responseData?.blood,
        location: responseData?.address,
        nameEnglish: responseData?.nameEng,
        fatherNameBangla: responseData?.father,
        motherName: responseData?.mother,
        idNumber: responseData?.national_id,
        pinNumber: responseData?.pin,
      });
    }
  }, [responseData]);

  const handleFileChange = async (event, fieldName) => {
    setImageLoading(true);
    const { files } = event.target;
    if (files?.length) {
      const file = files[0];
      const uploadFileResponse = await uploadFile(file, fieldName);
      if (uploadFileResponse?.success) {
        setImageLoading(false);
        setImageUrls((prevState) => ({
          ...prevState,
          [uploadFileResponse.fieldName]: uploadFileResponse.imageUrl,
        }));
      }
    }
  };

  const handleSignCopyUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) {
      setError("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf_file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload-pdf",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResponseData(response.data);
    } catch (error) {
      setError("Error uploading file.");
      console.error("Error uploading file:", error);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsRedirect(false);
  //   const title = "এনআইডি কার্ড";
  //   const nameBangla = e.target.nameBangla.value;
  //   const nameEnglish = e.target.nameEnglish.value;
  //   const idNumber = e.target.idNumber.value;
  //   const pinNumber = e.target.pinNumber.value;
  //   const fatherNameBangla = e.target.fatherNameBangla.value;
  //   // const husbandWifeName = e.target.husbandWifeName.value;
  //   const motherName = e.target.motherName.value;
  //   const birthLocation = e.target.birthLocation.value;
  //   const dateOfBirth = e.target.dateOfBirth.value;
  //   const applyDate = e.target.applyDate.value;
  //   const bloodGroup = e.target.bloodGroup.value;
  //   const location = e.target.location.value;

  //   const info = {
  //     title,
  //     signature: imageUrls.signatureImg,
  //     nidImage: imageUrls.nidImg,
  //     nameBangla,
  //     nameEnglish,
  //     idNumber,
  //     pinNumber,
  //     fatherNameBangla,
  //     // husbandWifeName,
  //     motherName,
  //     birthLocation,
  //     dateOfBirth,
  //     applyDate,
  //     bloodGroup,
  //     location,
  //     email: user.email,
  //   };

  //   fetch(`http://localhost:5000/users/${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data?.data?.amount >= 5) {
  //         fetch("http://localhost:5000/nidMakes/", {
  //           method: "POST",
  //           headers: {
  //             Accept: "application/json",
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(info),
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             if (data.status == "Success") {
  //               toast.success(data.message);
  //               e.target.reset();
  //               console.log(data);
  //             } else {
  //               toast.error(data.message);
  //               console.log(data);
  //             }
  //           });
  //         setInfo(info);
  //         setIsRedirect(true);
  //       } else {
  //         toast.error(data.message);
  //         console.log(data);
  //       }
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRedirect(false);

    const form = e.target;

    const formData = {
      nameBangla: form.nameBangla.value,
      nameEnglish: form.nameEnglish.value,
      idNumber: form.idNumber.value,
      pinNumber: form.pinNumber.value,
      fatherNameBangla: form.fatherNameBangla.value,
      motherName: form.motherName.value,
      birthLocation: form.birthLocation.value,
      dateOfBirth: form.dateOfBirth.value,
      bloodGroup: form.bloodGroup.value,
      location: form.location.value,
    };

    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.amount >= 5) {
          fetch("http://localhost:5000/nidMakes/", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(info),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "Success") {
                toast.success(data.message);
                e.target.reset();
                console.log(data);
              } else {
                toast.error(data.message);
                console.log(data);
              }
            });
            
          setInfo((prevState) => ({
            ...prevState,
            formData,
          }));

          setIsRedirect(true);
        } else {
          toast.error(data.message);
          console.log(data);
        }
      });
  };

  if (loading) {
    return <Loading />;
  }

  console.log("info", info);

  if (isRedirect && info) {
    return <NationalIDCard info={info} />;
  }

  return (
    <div className="w-full p-10 min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="border-gray-800 border-2 border-dotted rounded-md my-5  md:w-[300px]  ">
          <label className="cursor-pointer ">
            <img
              className="w-20 h-20 md:w-28 md:h-28 mx-auto"
              width={15}
              height={15}
              src={writeImage}
              alt="Sign Copy"
            />
            <input
              className="hidden"
              accept="application/pdf"
              onChange={(e) => handleSignCopyUpload(e)}
              type="file"
              name="nidImage"
              id="nidImage"
            ></input>
            <div className="label ">
              <span className="label-text text-sm text-center block w-full pb-2 px-1">
                সাইন কপি আপলোড করুন
              </span>
            </div>
          </label>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 w-full">
          <label className="">
            <div className="label">
              <span className="label-text">NID Image</span>
            </div>
            <div className=" flex items-center">
              <input
                accept="image/*"
                className="file-input file-input-bordered w-full "
                onChange={(e) => handleFileChange(e, "nidImg")}
                type="file"
                name="nidImage"
                id="nidImage"
              />
              <div
                className={`w-14 h-12 ml-4 border-2 border-gray-300 rounded ${
                  imageUrls.nidImg ? "" : "bg-white"
                }`}
              >
                {imageUrls.nidImg ? (
                  <img
                    src={responseData?.photo || imageUrls.nidImg}
                    alt="NID Preview"
                    className="object-cover w-full h-full rounded"
                  />
                ) : (
                  <span className="text-gray-400 text-sm"></span>
                )}
              </div>
            </div>
          </label>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 w-full">
          <label className="">
            <div className="label">
              <span className="label-text ">Signature</span>
            </div>

            <div className="flex items-center">
              <input
                accept="image/*"
                className="file-input file-input-bordered w-full"
                onChange={(e) => handleFileChange(e, "signatureImg")}
                type="file"
                name="nidImage"
                id="nidImage"
              />
              <div
                className={`w-14 h-12 ml-4 border-2 border-gray-300 rounded ${
                  imageUrls.signatureImg ? "" : "bg-white"
                }`}
              >
                {imageUrls.signatureImg ? (
                  <img
                    src={imageUrls.signatureImg}
                    alt="signature Preview"
                    className="object-cover w-full h-full rounded"
                  />
                ) : (
                  <span className="text-gray-400 text-sm"></span>
                )}
              </div>
            </div>
          </label>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 w-full">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">নামঃ (বাংলা)</span>
            </div>
            <input
              type="text"
              placeholder="নামঃ (বাংলা)"
              name="nameBangla"
              defaultValue={responseData?.nameBen}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">নামঃ (ইংরেজী)</span>
            </div>
            <input
              type="text"
              placeholder="নামঃ (ইংরেজী)"
              name="nameEnglish"
              className="input input-bordered w-full"
              defaultValue={responseData?.nameEng}
            />
          </label>
        </div>

        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 w-full">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">আইডি নাম্বার</span>
            </div>
            <input
              type="text"
              placeholder="আইডি নাম্বারঃ"
              name="idNumber"
              className="input input-bordered w-full"
              defaultValue={responseData?.national_id}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">পিন নাম্বার</span>
            </div>
            <input
              type="text"
              placeholder="পিন নাম্বারঃ"
              name="pinNumber"
              className="input input-bordered w-full"
              defaultValue={responseData?.pin}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">পিতার নাম</span>
            </div>
            <input
              type="text"
              placeholder="পিতার নাম"
              name="fatherNameBangla"
              className="input input-bordered w-full"
              defaultValue={responseData?.father}
            />
          </label>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 w-full">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">মাতার নাম</span>
            </div>
            <input
              type="text"
              placeholder="মাতার নাম"
              name="motherName"
              className="input input-bordered w-full"
              defaultValue={responseData?.mother}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">জন্ম স্থান:</span>
            </div>
            <input
              type="text"
              placeholder="জন্ম স্থান"
              name="birthLocation"
              className="input input-bordered w-full"
              defaultValue={responseData?.birth_place}
            />
          </label>
        </div>

        <div className="grid  gap-3 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 w-full">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">জন্ম তারিখ</span>
            </div>
            <input
              type="text"
              placeholder="জন্ম তারিখঃ:"
              name="dateOfBirth"
              className="input input-bordered w-full"
              defaultValue={responseData?.birth}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">প্রধানের তারিখঃ</span>
            </div>
            <input
              type="text"
              placeholder=""
              readOnly
              defaultValue={today}
              name="applyDate"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">রক্তের গ্রপ</span>
          </div>
          <input
            type="text"
            placeholder="রক্তের গ্রপঃ"
            name="bloodGroup"
            className="input input-bordered w-full"
            defaultValue={responseData?.blood}
          />
        </label>

        <label className="form-control w-full mt-3">
          <div className="label">
            <span className="label-text">ঠিকানাঃ</span>
          </div>
          <textarea
            type="text"
            placeholder="ঠিকানা: বাসা/হোল্ডিং: (Holding), গ্রাম/রাস্তা: (গ্রাম, মৌজা), ডাকঘর: (Post Office - Postal Code), উপজেলা, সিটি কর্পোরেশন/পৌরসভা, জেলা"
            name="location"
            className="input input-bordered w-full h-24"
            defaultValue={responseData?.address}
          />
          <div className="label">
            <span className="label-text">
              Full Address: ঠিকানা: বাসা/হোল্ডিং: (Holding), গ্রাম/রাস্তা:
              (গ্রাম, মৌজা), ডাকঘর: (Post Office - Postal Code), উপজেলা, সিটি
              কর্পোরেশন/পৌরসভা, জেলা
            </span>
          </div>
        </label>
        <button
          className="btn w-full mt-4 btn-primary text-white flex justify-center items-center"
          disabled={loading || statusData?.status === "inactive"}
        >
          {loading ? (
            <>
              <span className="loading loading-spinner text-white bg-primary"></span>
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default NIDMake;
