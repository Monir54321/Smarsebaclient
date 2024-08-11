import { useState } from "react";
import toast from "react-hot-toast";

const PriceList = () => {
  const [status, setStatus] = useState("এনআইডি কার্ড");
  const [bioStatus, setBioStatus] = useState("");

  console.log(status);
  console.log(bioStatus);

  const handleUpdatePrice = (e) => {
    e.preventDefault();
    const nidOrder = e?.target?.nidAmount?.value;
    const nidMake = e?.target?.nidMakeAmount?.value;
    const bikashInfo = e?.target?.bkashInfoAmount?.value;
    const bikashPinReset = e?.target?.bkashPinResetAmount?.value;
    const callListOrder = e?.target?.callListSimAmount?.value;
    const birthCertificateFix = e?.target?.birthCertificateFixAmount?.value;
    const nogodInfoOrder = e?.target?.nogodInfoAmount?.value;
    const onlineBirthCertificate = e?.target?.birthCertificateFixAmount?.value;
    const saftyTika = e?.target?.saftyTikaAmount?.value;
    const serverCopy = e?.target?.serverCopyAmount?.value;
    const biomatericAmount = e.target.biomatericAmount?.value;

    //   "": "40",
    //   "": "45",
    //   "biometricOrder": "65",
    //   "": "53",
    //   "": "45",
    //   "": "56",
    //   "": "53",
    if (bioStatus == "banglalink" && biomatericAmount) {
      fetch(
        `
          http://localhost:5000
        /priceList/668f76383906559fe7ff631c`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ banglalinkBiometricOrder: biomatericAmount }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.status == "Success") {
            toast.success(data?.message);
          }
        });
    } else if (bioStatus == "grameen" && biomatericAmount) {
      fetch(
        `
          http://localhost:5000
        /priceList/668f76383906559fe7ff631c`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ grameenBiometricOrder: biomatericAmount }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.status == "Success") {
            toast.success(data?.message);
          }
        });
    } else if (bioStatus == "robi" && biomatericAmount) {
      fetch(
        `
          http://localhost:5000
        /priceList/668f76383906559fe7ff631c`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ robiBiometricOrder: biomatericAmount }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.status == "Success") {
            toast.success(data?.message);
          }
        });
    } else if (bioStatus == "airtel" && biomatericAmount) {
      fetch(
        `
          http://localhost:5000
        /priceList/668f76383906559fe7ff631c`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ airtelBiometricOrder: biomatericAmount }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.status == "Success") {
            toast.success(data?.message);
          }
        });
    } else if (bioStatus == "teletalk" && biomatericAmount) {
      fetch(
        `
          http://localhost:5000
        /priceList/668f76383906559fe7ff631c`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ teletalkBiometricOrder: biomatericAmount }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.status == "Success") {
            toast.success(data?.message);
          }
        });
    } else if (nidOrder) {
      fetch(
        `
          http://localhost:5000
        /priceList/668f76383906559fe7ff631c`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nidOrder }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.status == "Success") {
            toast.success(data?.message);
          }
        });
    } else if (nidMake) {
      fetch(
        `
          http://localhost:5000
        /priceList/668f76383906559fe7ff631c`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nidMake }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.status == "Success") {
            toast.success(data?.message);
          }
        });
    } else if (bikashInfo) {
      fetch(
        `
          http://localhost:5000
        /priceList/668f76383906559fe7ff631c`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ bikashInfo }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.status == "Success") {
            toast.success(data?.message);
          }
        });
    } else if (bikashPinReset) {
      fetch(
        `
          http://localhost:5000
        /priceList/668f76383906559fe7ff631c`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ bikashInfo }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.status == "Success") {
            toast.success(data?.message);
          }
        });
    } else if (callListOrder) {
      fetch(
        `
          http://localhost:5000
        /priceList/668f76383906559fe7ff631c`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ bikashInfo }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.status == "Success") {
            toast.success(data?.message);
          }
        });
    } else if (birthCertificateFix) {
      fetch(
        `
          http://localhost:5000
        /priceList/668f76383906559fe7ff631c`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ bikashInfo }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.status == "Success") {
            toast.success(data?.message);
          }
        });
    } else if (nogodInfoOrder) {
      fetch(
        `
          http://localhost:5000
        /priceList/668f76383906559fe7ff631c`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nogodInfoOrder }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.status == "Success") {
            toast.success(data?.message);
          }
        });
    } else if (onlineBirthCertificate) {
      fetch(
        `
          http://localhost:5000
        /priceList/668f76383906559fe7ff631c`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ onlineBirthCertificate }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.status == "Success") {
            toast.success(data?.message);
          }
        });
    } else if (saftyTika) {
      fetch(
        `
          http://localhost:5000
        /priceList/668f76383906559fe7ff631c`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ saftyTika }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.status == "Success") {
            toast.success(data?.message);
          }
        });
    } else if (serverCopy) {
      fetch(
        `
          http://localhost:5000
        /priceList/668f76383906559fe7ff631c`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ serverCopy }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.status == "Success") {
            toast.success(data?.message);
          }
        });
    }
  };

  return (
    <div className="p-4">
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Select One</span>
        </div>
        <select
          onChangeCapture={(e) => setStatus(e.target.value)}
          className="select select-bordered "
        >
          {/* <option name="signCopy">সাইন কপি</option> */}
          <option name="nidCard" defaultValue={true}>
            এনআইডি কার্ড
          </option>
          <option name="nidMake">এনআইডি মেক</option>
          {/* <option name="servercopytonidmake">সার্ভার কপি to এনআইডি মেক</option> */}
          <option name="biometric">বায়োমেট্রিক</option>
          {/* <option name="servercopy">সার্ভার কপি</option> */}
          <option name="calllistsim">কল লিস্ট অল সিম</option>
          <option name="saftytika">সুরক্ষা টিকা</option>
          {/* <option name="birthcertificateonline">জন্ম নিবন্ধন (Online)</option> */}
          <option name="birthcertificateFix">নিবন্ধন নাম কারেকশন</option>
          <option name="bikashinfo">বিকাশ ইনফো</option>
          <option name="nogodinfo">নগদ ইনফো</option>
          <option name="bikashpinreset">বিকাশ পিন রিসেট</option>
          {/* <option name="nameaddress">নাম ঠিকনা (হারানো আইডি)</option> */}
        </select>
      </label>

      {status == "এনআইডি কার্ড" && (
        <form
          onSubmit={handleUpdatePrice}
          className="flex flex-col max-full mt-6 gap-2"
        >
          <label className="form-control w- ">
            <div className="label">
              <span className="label-text">এনআইডি কার্ড Price</span>
            </div>
            <input
              type="number"
              required
              placeholder="amount"
              name="nidAmount"
              className="input input-bordered w-full"
            />
          </label>
          <button className="btn btn-primary ">Submit</button>
        </form>
      )}
      {status == "এনআইডি মেক" && (
        <form
          onSubmit={handleUpdatePrice}
          className="flex flex-col max-full mt-6 gap-2"
        >
          <label className="form-control w- ">
            <div className="label">
              <span className="label-text">এনআইডি মেক Price</span>
            </div>
            <input
              type="number"
              required
              placeholder="amount"
              name="nidMakeAmount"
              className="input input-bordered w-full"
            />
          </label>
          <button className="btn btn-primary ">Submit</button>
        </form>
      )}

      {status == "কল লিস্ট অল সিম" && (
        <form
          onSubmit={handleUpdatePrice}
          className="flex flex-col max-full mt-6 gap-2"
        >
          <label className="form-control w- ">
            <div className="label">
              <span className="label-text">কল লিস্ট অল সিম Price</span>
            </div>
            <input
              type="number"
              required
              placeholder="amount"
              name="callListSimAmount"
              className="input input-bordered w-full"
            />
          </label>
          <button className="btn btn-primary ">Submit</button>
        </form>
      )}
      {status == "সুরক্ষা টিকা" && (
        <form
          onSubmit={handleUpdatePrice}
          className="flex flex-col max-full mt-6 gap-2"
        >
          <label className="form-control w- ">
            <div className="label">
              <span className="label-text">সুরক্ষা টিকা Price</span>
            </div>
            <input
              type="number"
              required
              placeholder="amount"
              name="saftyTikaAmount"
              className="input input-bordered w-full"
            />
          </label>
          <button className="btn btn-primary ">Submit</button>
        </form>
      )}
      {status == "নিবন্ধন নাম কারেকশন" && (
        <form
          onSubmit={handleUpdatePrice}
          className="flex flex-col max-full mt-6 gap-2"
        >
          <label className="form-control w- ">
            <div className="label">
              <span className="label-text">নিবন্ধন নাম কারেকশন Price</span>
            </div>
            <input
              type="number"
              required
              placeholder="amount"
              name="birthCertificateFixAmount"
              className="input input-bordered w-full"
            />
          </label>
          <button className="btn btn-primary ">Submit</button>
        </form>
      )}
      {status == "বিকাশ ইনফো" && (
        <form
          onSubmit={handleUpdatePrice}
          className="flex flex-col max-full mt-6 gap-2"
        >
          <label className="form-control w- ">
            <div className="label">
              <span className="label-text">বিকাশ ইনফো Price</span>
            </div>
            <input
              type="number"
              required
              placeholder="amount"
              name="bkashInfoAmount"
              className="input input-bordered w-full"
            />
          </label>
          <button className="btn btn-primary ">Submit</button>
        </form>
      )}
      {status == "নগদ ইনফো" && (
        <form
          onSubmit={handleUpdatePrice}
          className="flex flex-col max-full mt-6 gap-2"
        >
          <label className="form-control w- ">
            <div className="label">
              <span className="label-text">নগদ ইনফো Price</span>
            </div>
            <input
              type="number"
              required
              placeholder="amount"
              name="nogodInfoAmount"
              className="input input-bordered w-full"
            />
          </label>
          <button className="btn btn-primary ">Submit</button>
        </form>
      )}
      {status == "বিকাশ পিন রিসেট" && (
        <form
          onSubmit={handleUpdatePrice}
          className="flex flex-col max-full mt-6 gap-2"
        >
          <label className="form-control w- ">
            <div className="label">
              <span className="label-text">বিকাশ পিন রিসেট Price</span>
            </div>
            <input
              type="number"
              required
              placeholder="amount"
              name="bkashPinResetAmount"
              className="input input-bordered w-full"
            />
          </label>
          <button className="btn btn-primary ">Submit</button>
        </form>
      )}
      {status == "বায়োমেট্রিক" && (
        <form
          onSubmit={handleUpdatePrice}
          className="flex flex-col max-full mt-6 gap-2"
        >
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Select Type:</span>
            </div>
            <select
              onChangeCapture={(e) => setBioStatus(e.target.value)}
              name="selectType"
              className="select select-bordered "
            >
              <option name="banglalink" defaultValue={true}>
                Banglalink Biometric
              </option>
              <option name="grameen">Grameen Biometric</option>
              <option name="robi">Robi Biometric</option>
              <option name="airtel">Airtel Biometric</option>
              <option name="teletalk">Teletalk biometric</option>
            </select>
          </label>
          <label className="form-control w- ">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="number"
              required
              placeholder="amount"
              name="biomatericAmount"
              className="input input-bordered w-full"
            />
          </label>
          <button className="btn btn-primary ">Submit</button>
        </form>
      )}
    </div>
  );
};

export default PriceList;
