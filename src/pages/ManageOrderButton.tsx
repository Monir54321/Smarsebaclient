import React from "react";

const ManageOrderButton = () => {
  return (
    <div>
      <div className="w-full p-10 min-h-screen ">
        <form className="flex flex-col items-center">
          <h1 className="text-1xl md:text-3xl text-center">
            Manage Order Button
          </h1>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Select Type:</span>
            </div>
            <select name="selectType" className="select select-bordered ">
              <option>Order A</option>
              <option>Order B</option>
              <option>Order C</option>
              <option>Order D</option>
            </select>
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Select Type:</span>
            </div>
            <select name="selectType" className="select select-bordered ">
              <option>Order A</option>
              <option>Order B</option>
              <option>Order C</option>
              <option>Order D</option>
            </select>
          </label>

          <button className="btn w-full  mt-4 btn-primary text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageOrderButton;
