import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ClipLoader } from "react-spinners";
import auth from "../firebase/firebase.config";
import useManageOrderData from "../utils/getManageOrder";
import useUserData from "../utils/getUserData";
import ServerCopyResult from "./ServerCopyResult";

const ServerCopy = () => {
  const [user] = useAuthState(auth);
  const { data } = useManageOrderData();
  const { data: userData } = useUserData(user?.email);
  const statusData = data?.find((item) => item.title === "সার্ভার কপি");

  const [nidData, setNidData] = useState(null);
  const [nidAddressData, setNidAddressData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch("https://smarsebaserver.onrender.com/priceList/668f76383906559fe7ff631c")
      .then((response) => response.json())
      .then((pData) => {
        setPrice(parseFloat(pData?.data?.serverCopy));
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const nidNumber = e?.target?.NIDNumber?.value;
    const dateOfBirth = e?.target?.dateOfBirth?.value;

    

    try {
      const response = await fetch(
        `https://smarsebaserver.onrender.com/api/nid?nid=${nidNumber}&dob=${dateOfBirth}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      console.log("fetch data of nid", data);
      const result = await fetch(
        `https://smarsebaserver.onrender.com/api/nid2?nid=${nidNumber}&dob=${dateOfBirth}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      const nidAddressData = await result.json();
      setNidData(data);
      setNidAddressData(nidAddressData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!loading && nidData) {
    return (
      <ServerCopyResult nidData={nidData} nidAddressData={nidAddressData} />
    ); //nidData={nidData}
  }

  return (
    <div className="w-full p-10 min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        {loading && (
          <div className="flex flex-col justify-center items-center w-full h-full gap-1">
            <p className="text-base font-semibold">Please Waiting...</p>
            <ClipLoader />
          </div>
        )}
        <h1 className="text-1xl md:text-3xl text-center">Server Copy</h1>
        <h1 className="md:text-xl text-center mt-5">
          আপনার একাউন্ট থেকে {price} টাকা কাটা হবে।
        </h1>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">NID Number (10/17 DIGIT)</span>
          </div>
          <input
            type="text"
            placeholder="NID Number"
            name="NIDNumber"
            className="input input-bordered w-full"
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">DATE OF BIRTH (YYYY-MM-DD)</span>
          </div>
          <input
            type="text"
            placeholder="DATE OF BIRTH (YYYY-MM-DD)"
            name="dateOfBirth"
            className="input input-bordered w-full"
          />
        </label>

        <button
          className="btn w-full mt-4 btn-primary text-white flex justify-center items-center"
          disabled={loading || statusData?.status === "inactive"}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ServerCopy;
