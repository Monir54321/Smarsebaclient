import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import Loading from "../components/Loading";
import { MdDelete, MdDownload } from "react-icons/md";
import toast from "react-hot-toast";

const NIDOrder = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState(null);
  const [reFetch, setReFetch] = useState(false);

  if (loading) {
    return <Loading />;
  }

  useEffect(() => {
    fetch(`https://smarsebaserver.onrender.com/orderNIds/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "Success") {
          setReFetch(false);
          setMyOrders(data?.data);
          console.log(data);
        }
      });
  }, [user, reFetch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = "এনআইডি কার্ড অর্ডার";
    const selectType = e.target.selectType.value;
    const nidVoterForm = e.target.nidVoterForm.value;
    const description = e.target.description.value;

    const info = {
      title,
      selectType,
      number: nidVoterForm,
      description,
      email: user.email,
    };
    console.log(info);

    fetch(`https://smarsebaserver.onrender.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.amount >= 200) {
          // post data to database
          // post data to database
          fetch("https://smarsebaserver.onrender.com/orderNIds/", {
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
                console.log(data);
                setReFetch(true);
              } else {
                toast.error(data.message);
                console.log(data);
              }
            });
        } else {
          toast.error("Please recharge to proceed this order");
        }
      });
  };
  return (
    <div className="w-full p-10 min-h-screen ">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h1 className="text-1xl md:text-3xl text-center">
          এনআইডি কার্ড অর্ডার করুন।
        </h1>
        <h1 className=" md:text-xl text-center mt-5 ">
          এনআইডি কার্ডের জন্য 200 টাকা কাটা হবে।
        </h1>

        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Select Type:</span>
          </div>
          <select name="selectType" className="select select-bordered ">
            <option name="nid" defaultChecked={true}>
              NID no
            </option>
            <option name="form">form no</option>
            <option name="birthCertificate">Birth Certificate no</option>
            <option name="voter">Voter no</option>
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
          />
        </label>
        <label className="form-control w-full  mt-3">
          <div className="label">
            <span className="label-text">
              সাইন কপি সম্পর্কে বিস্তারিত লিখুনঃ(যদি কিছু বলার থাকে)
            </span>
          </div>
          <textarea
            type="text"
            placeholder="Description"
            name="description"
            className="input input-bordered w-full h-24"
          />
        </label>

        <button className="btn w-full  mt-4 btn-primary text-white">
          Submit
        </button>
      </form>

      <div className="mt-10">
        {myOrders && (
          <div className="overflow-x-auto">
            <table className="table table-xs table-pin-rows table-pin-cols">
              <thead>
                <tr>
                  <td>SERVICE</td>
                  <td>STATUS</td>
                  <td>CANCELLATION REASON</td>
                  <td>DATE</td>
                  <td>DOWNLOAD</td>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {myOrders?.map((data) => (
                  <tr key={data._id}>
                    <td className="text-[15px]">{data?.number}</td>
                    <td className="text-[15px]">{data?.status}</td>
                    <td className="text-[15px]">REASON</td>
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
      </div>
    </div>
  );
};

export default NIDOrder;
