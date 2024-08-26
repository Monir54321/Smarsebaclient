import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const PriceList = () => {
  const [title, setTitle] = useState("");
  const [priceListData, setPriceListData] = useState({});
  const [selectedPrice, setSelectedPrice] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/priceList/668f76383906559fe7ff631c")
      .then((response) => response.json())
      .then((data) => {
        setPriceListData(data?.data);
      });
  }, []);

  useEffect(() => {
    setSelectedPrice(priceListData[title]);
  }, [title, priceListData]);

  const handleUpdatePrice = (e) => {
    e.preventDefault();
    const nidAmount = e?.target?.nidAmount?.value;
    fetch("http://localhost:5000/priceList/668f76383906559fe7ff631c", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, nidAmount }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "Success") {
          toast.success(data?.message);
        }
      });
  };

  return (
    <div className="p-4">
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Select One</span>
        </div>
        <select
          onChange={(e) => setTitle(e.target.value)}
          className="select select-bordered "
          name="priceTile"
          id="priceTile"
        >
          {Object.keys(priceListData)
            .filter(
              (key) =>
                !["_id", "__v", "createdAt", "updatedAt", "title"].includes(key)
            ) // Exclude specific keys
            .map((key) => (
              <option key={key} value={key}>
                {key} {/* Display the key as the option label */}
              </option>
            ))}
        </select>
      </label>

      <form
        onSubmit={handleUpdatePrice}
        className="flex flex-col max-full mt-6 gap-2"
      >
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">এনআইডি কার্ড Price</span>
          </div>
          <input
            type="number"
            required
            placeholder="amount"
            name="nidAmount"
            className="input input-bordered w-full"
            defaultValue={selectedPrice}
          />
        </label>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PriceList;
