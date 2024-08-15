import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import writeImage from "../assets/Mack.png";
import Loading from "../components/Loading";
import auth from "../firebase/firebase.config";
import getBanglaDate from "../utils/bangladate";
import { uploadFile } from "../utils/uploadFileFromFrontend";
import NationalIDCard from "./NationalIDCard";

const NIDMake = () => {
  const [user, loading] = useAuthState(auth);
  const [imageLoading, setImageLoading] = useState(false);
  const [signature, setSignature] = useState(null);
  const [nidImage, setNidImage] = useState(null);
  const [signCopy, setSignCopy] = useState(null);
  const [myOrders, setMyOrders] = useState(null);
  const [info, setInfo] = useState(null);
  const [imageUrls, setImageUrls] = useState({
    nidImg: "",
    signatureImg: "",
  });

  console.log("imageUrls", imageUrls);

  const today = getBanglaDate();

  useEffect(() => {
    window.onload =
      "https://barcode.tec-it.com/barcode.ashx?data=Your+nid+data&code=PDF417&download=true ";
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/nidMakes/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data?.data);
        console.log(data);
      });
  }, [user]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = "এনআইডি কার্ড";
    const nameBangla = e.target.nameBangla.value;
    const nameEnglish = e.target.nameEnglish.value;
    const idNumber = e.target.idNumber.value;
    const pinNumber = e.target.pinNumber.value;
    const fatherNameBangla = e.target.fatherNameBangla.value;
    // const husbandWifeName = e.target.husbandWifeName.value;
    const motherName = e.target.motherName.value;
    const birthLocation = e.target.birthLocation.value;
    const dateOfBirth = e.target.dateOfBirth.value;
    const applyDate = e.target.applyDate.value;
    const bloodGroup = e.target.bloodGroup.value;
    const location = e.target.location.value;

    const info = {
      title,
      signature: imageUrls.signatureImg,
      nidImage: imageUrls.nidImg,
      nameBangla,
      nameEnglish,
      idNumber,
      pinNumber,
      fatherNameBangla,
      // husbandWifeName,
      motherName,
      birthLocation,
      dateOfBirth,
      applyDate,
      bloodGroup,
      location,
      email: user.email,
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
              if (data.status == "Success") {
                toast.success(data.message);
                e.target.reset();
                console.log(data);
              } else {
                toast.error(data.message);
                console.log(data);
              }
            });
          setInfo(info);
        } else {
          toast.error(data.message);
          console.log(data);
        }
      });
  };

  if (loading) {
    return <Loading />;
  }

  if (info) {
    return <NationalIDCard info={info} />;
  }

  return (
    <div className="w-full p-10 min-h-screen">
      <div>
        <a href="https://barcode.tec-it.com/barcode.ashx?data=Your+nid+data&code=PDF417&download=true ">
          barcode
        </a>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="border-gray-800 border-2 border-dotted rounded-md mb-3  md:w-[300px]  ">
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
              onChange={(e) =>
                setSignCopy(URL.createObjectURL(e.target.files[0]))
              }
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

        <div className="grid grid-cols-1  w-full">
          <label className="w-full">
            <div className="label">
              <span className="label-text">NID Image</span>
            </div>
            <div className="w-full flex items-center">
              <input
                accept="image/*"
                className="file-input file-input-bordered w-full md:w-3/4"
                onChange={(e) => handleFileChange(e, "nidImg")}
                type="file"
                name="nidImage"
                id="nidImage"
              />
              <div
                className={`w-12 h-12 ml-4 border-2 border-gray-300 flex items-center justify-center rounded ${
                  imageUrls.nidImg ? "" : "bg-white"
                }`}
              >
                {imageUrls.nidImg ? (
                  <img
                    src={imageUrls.nidImg}
                    alt="NID Preview"
                    className="object-cover w-full h-full rounded"
                  />
                ) : (
                  <span className="text-gray-400 text-sm"></span>
                )}
              </div>
            </div>
          </label>

          <label className="w-full">
            <div className="label">
              <span className="label-text ">Signature</span>
            </div>
            {/* <div className="w-full">
              <input
                accept="image/*"
                className="file-input file-input-bordered w-full"
                // onChange={(e) =>
                //   setSignature(URL.createObjectURL(e.target.files[0]))
                // }

                onChange={(e) => handleFileChange(e, "signatureImg")}
                type="file"
                name="signature"
                id="signature"
              />
            </div> */}
            <div className="w-full flex items-center">
              <input
                accept="image/*"
                className="file-input file-input-bordered w-full md:w-3/4"
                onChange={(e) => handleFileChange(e, "signatureImg")}
                type="file"
                name="nidImage"
                id="nidImage"
              />
              <div
                className={`w-12 h-12 ml-4 border-2 border-gray-300 flex items-center justify-center rounded ${
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

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 w-full">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">নামঃ (বাংলা)</span>
            </div>
            <input
              type="text"
              placeholder="নামঃ (বাংলা)"
              name="nameBangla"
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
            />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 w-full">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">আইডি নাম্বার</span>
            </div>
            <input
              type="text"
              placeholder="আইডি নাম্বারঃ"
              name="idNumber"
              className="input input-bordered w-full"
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
            />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 w-full">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">পিতার নাম</span>
            </div>
            <input
              type="text"
              placeholder="পিতার নাম"
              name="fatherNameBangla"
              className="input input-bordered w-full"
            />
          </label>

          {/* <label className="form-control w-full">
            <div className="label">
              <span className="label-text">স্বামী অথবা স্ত্রী নাম</span>
            </div>
            <input
              type="text"
              placeholder="স্বামী অথবা স্ত্রী নাম"
              name="husbandWifeName"
              className="input input-bordered w-full"
            />
          </label> */}
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 w-full">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">মাতার নাম</span>
            </div>
            <input
              type="text"
              placeholder="মাতার নাম"
              name="motherName"
              className="input input-bordered w-full"
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
            />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 w-full">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">জন্ম তারিখ</span>
            </div>
            <input
              type="text"
              placeholder="জন্ম তারিখঃ:"
              name="dateOfBirth"
              className="input input-bordered w-full"
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
          />
          <div className="label">
            <span className="label-text">
              Full Address: ঠিকানা: বাসা/হোল্ডিং: (Holding), গ্রাম/রাস্তা:
              (গ্রাম, মৌজা), ডাকঘর: (Post Office - Postal Code), উপজেলা, সিটি
              কর্পোরেশন/পৌরসভা, জেলা
            </span>
          </div>
        </label>

        <button className="btn w-full mt-4 btn-primary text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NIDMake;
