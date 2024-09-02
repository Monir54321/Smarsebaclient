import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../firebase/firebase.config";
import useManageOrderData from "../utils/getManageOrder";
import useUserData from "../utils/getUserData";
import ServerCopyResult from "./ServerCopyResult";

const ServerCopy = () => {
  const [user] = useAuthState(auth);
  const { data } = useManageOrderData();
  const { data: userData } = useUserData(user?.email);
  const statusData = data?.find((item) => item.title === "সার্ভার কপি");

  console.log("user data from api", userData);

  console.log("statusData", statusData);

  const [nidData, setNidData] = useState(null);
  const [nidAddressData, setNidAddressData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tasmim, setTasmim] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nidNumber = e?.target?.NIDNumber?.value;
    const dateOfBirth = e?.target?.dateOfBirth?.value;

    // setLoading(true);

    fetch("http://localhost:5000/priceList/668f76383906559fe7ff631c")
      .then((res) => res.json())
      .then((pData) => {
        const price = parseFloat(pData?.data?.serverCopy);
        console.log("server copy price",price)
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
      console.log("fetch data of nid", data);

      const result = await fetch(
        `http://localhost:5000/api/nid2?nid=${nidNumber}&dob=${dateOfBirth}`,
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
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (nidData) {
    return (
      <ServerCopyResult nidData={nidData} nidAddressData={nidAddressData} />
    ); //nidData={nidData}
  }

  return (
    <div className="w-full p-10 min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h1 className="text-1xl md:text-3xl text-center">Server Copy</h1>
        <h1 className="md:text-xl text-center mt-5">
          আপনার একাউন্ট থেকে 5 টাকা কাটা হবে।
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

export default ServerCopy;
