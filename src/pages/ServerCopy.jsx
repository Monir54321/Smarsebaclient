import { useState } from "react";
import ServerCopyResult from "./ServerCopyResult";

const ServerCopy = () => {
  const [nidData, setNidData] = useState(null);
  const [nidAddressData, setNidAddressData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nidNumber = e?.target?.NIDNumber?.value;
    const dateOfBirth = e?.target?.dateOfBirth?.value;

    console.log("nid dob", nidNumber, dateOfBirth);

    setLoading(true);

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

  if (nidAddressData) {
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
          disabled={loading}
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
