import axios from "axios";
import React, { useState } from "react";
import useManageOrderData from "../utils/getManageOrder";

const ManageOrderButton = () => {
  const { data, loading, error } = useManageOrderData();

  const [selectedId, setSelectedId] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  console.log("data", data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedId && selectedStatus) {
      try {
        const updateResponse = await axios.patch(
          `http://localhost:5000/manage-order-button/${selectedId}`,
          { status: selectedStatus }
        );
        console.log("Update successful:", updateResponse.data);
      } catch (error) {
        console.error("Update failed:", error.message);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="w-full p-10 min-h-screen">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <h1 className="text-1xl md:text-3xl text-center">
            Manage Order Button
          </h1>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Select Title:</span>
            </div>
            <select
              name="selectTitle"
              className="select select-bordered"
              onChange={(e) => setSelectedId(e.target.value)}
            >
              <option value="" disabled>
                Select Title
              </option>
              {data.map((item) => (
                <option key={item._id} value={item?._id}>
                  {item?.title}
                </option>
              ))}
            </select>
          </label>

          <label className="form-control w-full mt-4">
            <div className="label">
              <span className="label-text">Select Status:</span>
            </div>
            <select
              name="selectStatus"
              className="select select-bordered"
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </label>

          <button
            className="btn w-full mt-4 btn-primary text-white"
            type="submit"
            // disabled={!selectedTitle || !selectedStatus} // Disable if either is not selected
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageOrderButton;
