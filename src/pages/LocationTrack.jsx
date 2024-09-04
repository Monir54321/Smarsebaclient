import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import Loading from "../components/Loading";
import toast from "react-hot-toast";
import { MdDelete, MdDownload } from "react-icons/md";
import useManageOrderData from "../utils/getManageOrder";

const LocationTrack = () => {
  const { data } = useManageOrderData();
  const statusData = data?.find((item) => item.title === "লোকেশন ট্র্যাক");
  const [user, loading, error] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState(null);
  const [reFetch, setReFetch] = useState(false);
  const [bioPrice, setBioPrice] = useState(null);

  if (loading) {
    return <Loading />;
  }

  //   useEffect(() => {
  //     fetch("https://smarsebaserver.onrender.com/priceList/668f76383906559fe7ff631c")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setBioPrice(data?.data);
  //         console.log(data.data);
  //       });
  //   }, []);

  //   useEffect(() => {
  //     fetch(`https://smarsebaserver.onrender.com/biometricOrders/user/${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.status == "Success") {
  //           setReFetch(false);
  //           setMyOrders(data?.data);
  //           console.log(data);
  //         }
  //       });
  //   }, [user, reFetch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = "লোকেশন ট্র্যাক";

    const locationTrackNumber = e.target.phoneNumber.value;
    const description = e.target.description.value;

    const info = {
      locationTrackNumber,
      description,
      email: user.email,
      title,
    };
    console.log(info);

    // fetch(`https://smarsebaserver.onrender.com/users/${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data?.data?.amount >= 99) {
    //       // post data to database
    //       // post data to database
    //       fetch("https://smarsebaserver.onrender.com/biometricOrders/", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(info),
    //       })
    //         .then((res) => res.json())
    //         .then((data) => {
    //           if (data.status == "Success") {
    //             setReFetch(true);
    //             toast.success(data.message);
    //             console.log(data);
    //           } else {
    //             toast.error(data.message);
    //             console.log(data);
    //           }
    //         });
    //     } else {
    //       toast.error("Please recharge to proceed this order");
    //     }
    //   });
  };
  return (
    <div className="w-full p-10 min-h-screen ">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h1 className="text-1xl md:text-3xl text-center">
          লোকেশন ট্র্যাক করুন
        </h1>
        <h1 className=" md:text-xl text-center mt-5 ">
          লোকেশন ট্র্যাক এর জন্য 500 টাকা কাটা হবে ।
        </h1>

        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Phone number</span>
          </div>
          <input
            type="number"
            placeholder="Phone number"
            name="phoneNumber"
            className="input input-bordered w-full"
          />
        </label>

        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Description</span>
          </div>

          <textarea
            className="textarea textarea-bordered"
            placeholder="Description"
            name="description"
          ></textarea>
          {/* <input
            type="text"
            placeholder="Description"
            name="description"
            className="input input-bordered w-full h-20"
          /> */}
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

      {/* <div className="mt-10">
        {myOrders && (
          <div className="overflow-x-auto">
            <table className="table table-xs table-pin-rows table-pin-cols">
              <thead>
                <tr>
                  <td>SERVICE</td>
                  <td>NO</td>
                  <td>STATUS</td>
                  <td>DATE</td>
                  <td>DOWNLOAD</td>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {myOrders?.map((data) => (
                  <tr key={data._id}>
                    <td className="text-[15px]">{data?.title}</td>
                    <td className="text-[15px]">{data?.biometricNumber}</td>
                    <td className="text-[15px]">{data?.status}</td>
                    <td className="text-[15px]">
                      {data?.createdAt?.split("T")[0]}
                    </td>
                    <td className="text-[15px] flex flex-row w-full">
                      {data?.status == "Processing" || "Pending" ? (
                        <button
                          onClick={() =>
                            alert(
                              "You can't delete until successfully delivering this service"
                            )
                          }
                        >
                          <MdDelete
                            className="w-5 h-5 font-semibold text-blue-600"
                            width={16}
                            height={16}
                          />
                        </button>
                      ) : (
                        <button onClick={() => handleDeleteOrder(data?._id)}>
                          <MdDelete
                            className="w-5 h-5 font-semibold text-blue-600"
                            width={16}
                            height={16}
                          />
                        </button>
                      )}

                      {data?.title == "boi" ? (
                        ""
                      ) : (
                        <button>
                          <MdDownload
                            className="w-5 h-5 font-semibold text-blue-600 ml-5"
                            width={16}
                            height={16}
                          />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default LocationTrack;
