/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Swal from "sweetalert2";
import ViewOrder from "../../pages/ViewOrder";

const OrderServices = ({ prop }) => {
  const [pendingOrders, setPendingOrders] = useState(null);
  const [processingOrders, setProcessingOrders] = useState(null);
  const [successOrders, setSuccessOrders] = useState(null);
  const [refetch, setRefetch] = useState(false);


  useEffect(() => {
    setPendingOrders(null);
    setProcessingOrders(null);
    setSuccessOrders(null);

    if (prop) {
      fetch(`http://localhost:5000/${prop}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.status == "Success") {
            setRefetch(false);
            const pendingOrdersData = data?.data?.filter(
              (res) => res.status == "Pending"
            );
            const processingOrdersData = data?.data?.filter(
              (res) => res.status == "Processing"
            );
            const successOrdersData = data?.data?.filter(
              (res) => res.status == "Success"
            );
            setPendingOrders(pendingOrdersData);
            setProcessingOrders(processingOrdersData);
            setSuccessOrders(successOrdersData);
            console.log({ pendingOrdersData });
            console.log({ processingOrdersData });
            console.log({ successOrdersData });
            //console.log(data);
          }
        });
    }
  }, [prop, refetch]);

  const handleAcceptOrder = (id) => {
    const agreed = confirm("Do you want to accept this order?");
    // confirm admin is sure to accept the order

    if (agreed) {
      fetch(`http://localhost:5000/${prop}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "Processing" }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status == "Success") {
            setRefetch(true);
            toast.success("Successfully accepted order");
            console.log(data);
          }
        });
    } else {
      toast.error("Order is not accepted");
    }
  };

  const handleCancelOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Submit a reason for cancellation",
          input: "text",
          inputAttributes: {
            autocapitalize: "off",
          },
          showCancelButton: true,
          confirmButtonText: "Submit",
          cancelButtonText: "Cancel",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          showLoaderOnConfirm: true,
          preConfirm: (reason) => {
            if (!reason) {
              Swal.showValidationMessage("You need to write something!");
            }
            return reason;
          },
        }).then((inputResult) => {
          if (inputResult.isConfirmed) {
            const cancellationReason = inputResult.value;
            console.log("Cancellation reason:", cancellationReason);

            fetch(`http://localhost:5000/${prop}/${id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                status: "Cancelled",
                reason: cancellationReason,
              }),
            })
              .then((res) => {
                if (!res.ok) {
                  throw new Error("Network response was not ok");
                }
                return res.json();
              })
              .then((data) => {
                if (data.status === "Success") {
                  setRefetch(true);
                  toast.success("Successfully canceled the order");
                  console.log("Server response:", data);
                } else {
                  toast.error("Failed to cancel the order");
                  console.error("Error:", data);
                }
              })
              .catch((error) => {
                toast.error("An error occurred while canceling the order");
                console.error("Error:", error);
              });
          }
        });
      } else {
        toast.error("Order is not canceled");
      }
    });
  };

  const handleDeleteOrder = (id) => {
    const agreed = confirm("Do you want to delete this order?");

    if (agreed) {
      fetch(`http://localhost:5000/${prop}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status == "Success") {
            setRefetch(true);
            toast.success("Successfully deleted the order");
            console.log(data);
          }
        });
    } else {
      toast.error("Order is not deleted");
    }
  };

  const handleOrderSuccess = (e, title, id) => {
    e.preventDefault();

    const message = e?.target?.message?.value;

    console.log({ message }, { title }, { id });

    if (title == "বায়োমেট্রিক") {
      fetch(`http://localhost:5000/biometricOrders/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pdf: message, status: "Success" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("after success response",data)
          if (data.status == "Success") {
            setRefetch(true);
            toast.success("Successfully uploaded the order");
            console.log(data);
          }
        });
    } else if (title == "বিকাশ ইনফো") {
      fetch(`http://localhost:5000/bikashInfoOrders/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pdf: data, status: "Success" }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status == "Success") {
            setRefetch(true);
            toast.success("Successfully uploaded the order");
            console.log(data);
          }
        });
    } else if (title == "নগদ ইনফো") {
      fetch(`http://localhost:5000/nogodInfoOrders/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pdf: data, status: "Success" }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status == "Success") {
            setRefetch(true);
            toast.success("Successfully uploaded the order");
            console.log(data);
          }
        });
    }
  };

  const [files, setFiles] = useState(null);

  const handleSubmitFile = (e) => {
    e.preventDefault();
    const title = e?.target?.title?.value;
    const id = e?.target?.id?.value;

    const formData = new FormData();
    formData.append("file", files);

    console.log(title);
    if (title == "কল লিস্ট" && files) {
      fetch(`http://localhost:5000/callListOrders/${id}`, {
        method: "PATCH",

        body: JSON.stringify({ pdf: formData, status: "Success" }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status == "Success") {
            setRefetch(true);
            console.log(data);
          }
        });
    }

    console.log(files);
  };

  const [viewUrl, setViewUrl] = useState("");

  const handleViewData = (dataLink) => {
    document.getElementById("my_modal_5").showModal();
    console.log(dataLink);
    setViewUrl(dataLink);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 justify-items-center">
      <div className="flex flex-col gap-3 items-center">
        <h3 className="text-xl md:text-2xl text-center my-5">Pending Orders</h3>
        {pendingOrders ? (
          pendingOrders.map((pData) => (
            <div
              className="card bg-white text-gray-800 shadow-md w-80"
              key={pData._id}
            >
              <div className="card-body items-center text-center">
                <p>{pData.email}</p>
                <p>{pData._id}</p>

                <button
                  onClick={() => handleViewData(`${prop}/${pData._id}`)}
                  className="btn bg-white text-blue-700 font-bold"
                >
                  View
                </button>

                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleAcceptOrder(pData._id)}
                    className="btn bg-white text-green-700 font-bold"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleCancelOrder(pData._id)}
                    className="btn bg-white text-red-700 font-bold"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3>No Pending Orders available</h3>
        )}
      </div>
      <div className="flex flex-col gap-3 items-center">
        <h3 className="text-xl md:text-2xl text-center my-5">
          Processing Orders
        </h3>
        {processingOrders ? (
          processingOrders.map((pData) => (
            <div
              className="card bg-white text-gray-800 shadow-md w-80"
              key={pData._id}
            >
              <div className="card-body items-center text-center">
                <p>{pData.email}</p>
                <p>{pData._id}</p>
                <button
                  onClick={() => handleViewData(`${prop}/${pData._id}`)}
                  className="btn bg-white text-blue-700 font-bold"
                >
                  View
                </button>

                <form onSubmit={(e) => handleOrderSuccess(e, pData.title, pData._id)}>
                  <label className="form-control w-full ">
                    <div className="label">
                      <span className="label-text">{pData.title}</span>
                    </div>

                    {pData?.title ==
                    ("বায়োমেট্রিক" || "বিকাশ ইনফো" || "নগদ ইনফো") ? (
                      <input
                        type="text"
                        placeholder="Enter your message"
                        name="message"
                        className="file-input input-bordered w-full"
                      />
                    ) : (
                      <input
                        type="file"
                        onChange={(e) => setFiles(e.target.files[0])}
                        placeholder="file"
                        name="file"
                        accept="application/pdf"
                        className="file-input input-bordered w-full"
                      />
                    )}
                  </label>

                  <button className="btn w-full  mt-4 btn-primary text-white">
                    Submit
                  </button>
                </form>

                <div className="card-actions w-full">
                  <button
                    onClick={() => handleCancelOrder(pData._id)}
                    className="btn w-full border-2 border-red-600 bg-white text-red-700 font-bold"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3>No Processing Orders available</h3>
        )}
      </div>
      <div className="flex flex-col gap-3 items-center">
        <h3 className="text-xl md:text-2xl text-center my-5">
          Completed Orders
        </h3>
        {successOrders ? (
          successOrders.map((sData) => (
            <div
              className="card bg-white text-gray-800 shadow-md w-80"
              key={sData._id}
            >
              <div className="card-body items-center text-center">
                <p>{sData.email}</p>
                <p>{sData._id}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleDeleteOrder(sData._id)}
                    className="btn bg-white text-red-700 font-bold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3>No Completed Orders available</h3>
        )}
      </div>

      <ViewOrder viewUrl={viewUrl} />
    </div>
  );
};

export default OrderServices;
