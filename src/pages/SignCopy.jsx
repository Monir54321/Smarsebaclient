/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";
import { MdDelete, MdDownload } from "react-icons/md";
import useManageOrderData from "../utils/getManageOrder";

const SignCopy = () => {
  const { data } = useManageOrderData();
  const statusData = data?.find((item) => item.title === "সাইন কপি");
  const [user, loading] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState(null);
  const [reFetch, setReFetch] = useState(false);

  if (loading) {
    return <Loading />;
  }

  useEffect(() => {
    if (user?.email) {
      fetch(`https://smarsebaserver.onrender.com/signCopy/user/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "Success") {
            setReFetch(false);
            setMyOrders(data?.data);
            console.log(data);
          } else {
            toast.error("Failed to fetch orders");
          }
        })
        .catch((error) => {
          toast.error("Error fetching orders");
          console.error("Error fetching orders:", error);
        });
    }
  }, [user, reFetch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = "সাইন কপি";
    const selectedType = e.target.selectType.value;
    const number = e.target.nidVoterForm.value;
    const nameDob = e.target.NAMEDOB.value;

    if (!selectedType || !number || !nameDob) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const info = {
      selectedType,
      number,
      nameDob,
      title,
      email: user.email,
    };

    console.log(info);

    fetch("https://smarsebaserver.onrender.com/priceList/668f76383906559fe7ff631c")
      .then((res) => res.json())
      .then((pData) => {
        const price = pData?.data?.callListOrder;
        if (price) {
          fetch(`https://smarsebaserver.onrender.com/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
              if (data?.data?.amount >= price) {
                // Post data to database
                fetch("https://smarsebaserver.onrender.com/signCopy/", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(info),
                })
                  .then((res) => res.json())
                  .then((rData) => {
                    if (rData.status === "Success") {
                      setReFetch(true);
                      toast.success(rData.message);
                      e.target.reset(); // Reset the form
                    } else {
                      toast.error(rData.message);
                    }
                  })
                  .catch((error) => {
                    toast.error("Failed to submit order.");
                    console.error("Error submitting order:", error);
                  });
              } else {
                toast.error("Please recharge to proceed with this order.");
              }
            })
            .catch((error) => {
              toast.error("Error fetching user data");
              console.error("Error fetching user data:", error);
            });
        } else {
          toast.error("Price information not found.");
        }
      })
      .catch((error) => {
        toast.error("Error fetching price data");
        console.error("Error fetching price data:", error);
      });
  };

  const handleDeleteOrder = (orderId) => {
    console.log("Deleting order with ID:", orderId);
    fetch(`https://smarsebaserver.onrender.com/signCopy/${orderId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "Success") {
          setReFetch(true);
          toast.success("Order deleted successfully.");
        } else {
          toast.error("Failed to delete order.");
        }
      })
      .catch((error) => {
        toast.error("Error deleting order");
        console.error("Error deleting order:", error);
      });
  };

  return (
    <div className="w-full p-10 min-h-screen ">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h1 className="text-1xl md:text-3xl text-center">
          সাইন কপি অর্ডার করুন।
        </h1>
        <h1 className="md:text-xl text-center mt-5 ">
          সাইন কপির জন্য 100 টাকা কাটা হবে।
        </h1>

        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Select Type:</span>
          </div>
          <select name="selectType" className="select select-bordered ">
            <option value="nid">NID no</option>
            <option value="form">Form no</option>
            <option value="birthCertificate">Birth Certificate no</option>
            <option value="voter">Voter no</option>
          </select>
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">আইডি/ভোটার/ফর্ম নাম্বার*</span>
          </div>
          <input
            type="text"
            placeholder="আইডি/ভোটার/ফর্ম নাম্বারঃ"
            name="nidVoterForm"
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">NAME/DOB</span>
          </div>
          <input
            type="text"
            placeholder="NAME/DOB"
            name="NAMEDOB"
            className="input input-bordered w-full"
            required
          />
        </label>

        <button
          className="btn w-full mt-4 btn-primary text-white"
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

      <div className="mt-10">
        {myOrders && (
          <div className="overflow-x-auto">
            <table className="table table-xs table-pin-rows table-pin-cols">
              <thead>
                <tr>
                  <td>SERVICE</td>
                  <td>NO</td>
                  <td>STATUS</td>
                  <td>CANCELLATION REASON</td>
                  <td>DATE</td>
                  <td>ACTION</td>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {myOrders.map((data) => (
                  <tr key={data._id}>
                    <td className="text-[15px]">{data?.title}</td>
                    <td className="text-[15px]">{data?.number}</td>
                    <td className="text-[15px]">{data?.status}</td>
                    <td className="text-[15px]">REASON</td>
                    <td className="text-[15px]">
                      {data?.createdAt?.split("T")[0]}
                    </td>
                    <td className="text-[15px] flex flex-row w-full">
                      {data?.status === "Processing" ||
                      data?.status === "Pending" ? (
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

                      {data?.status === "Success" && (
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
      </div>
    </div>
  );
};

export default SignCopy;
