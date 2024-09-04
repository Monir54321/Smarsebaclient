import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdDelete, MdDownload } from "react-icons/md";
import auth from "../firebase/firebase.config";
import Loading from "../components/Loading";

const FileList = () => {
  const [user, loading, error] = useAuthState(auth);
  const [bikashInfosData, setBikashInfosData] = useState(null);
  const [nogodInfoOrders, setNogodInfoOrders] = useState(null);
  const [orderNIds, setOrderNIds] = useState(null);
  const [bikashPinResets, setBikashPinResets] = useState(null);
  const [callListOrders, setCallListOrders] = useState(null);
  const [birthCertificateFixs, setBirthCertificateFixs] = useState(null);
  const [biometricOrders, setBiometricOrders] = useState(null);
  const [onlineBirthCertificates, setOnlineBirthCertificates] = useState(null);
  const [saftyTikas, setSaftyTikas] = useState(null);
  const [serverCopys, setServerCopys] = useState(null);
  const [nidMakes, setNidMakes] = useState(null);

  // single user er sob data filter kore ante hobe
  // akta array te sob data add korte hobe
  // map kore show korte hobe

  useEffect(() => {
    // bikash info
    fetch(`https://smarsebaserver.onrender.com/bikashInfoOrders/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBikashInfosData(data);
        console.log(data?.data);
      });

    // nogod info
    fetch(`https://smarsebaserver.onrender.com/nogodInfoOrders/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setNogodInfoOrders(data);
        console.log(data?.data);
      });

    // order NIds
    fetch(`https://smarsebaserver.onrender.com/orderNIds/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderNIds(data);
        console.log(data?.data);
      });

    // bikashPinReset
    fetch(`https://smarsebaserver.onrender.com/bikashPinResets/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBikashPinResets(data);
        console.log(data?.data);
      });

    // callListOrders
    fetch(`https://smarsebaserver.onrender.com/callListOrders/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCallListOrders(data);
        console.log(data?.data);
      });

    // birthCertificateFixs
    fetch(`https://smarsebaserver.onrender.com/birthCertificateFixs/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBirthCertificateFixs(data);
        console.log(data?.data);
      });

    // biometricOrders
    fetch(`https://smarsebaserver.onrender.com/biometricOrders/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBiometricOrders(data);
        console.log(data?.data);
      });

    // onlineBirthCertificates
    fetch(`https://smarsebaserver.onrender.com/onlineBirthCertificates/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOnlineBirthCertificates(data);
        console.log(data?.data);
      });

    // saftyTikas
    fetch(`https://smarsebaserver.onrender.com/saftyTikas/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSaftyTikas(data);
        console.log(data?.data);
      });

    // serverCopys
    fetch(`https://smarsebaserver.onrender.com/serverCopys/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setServerCopys(data);
        console.log(data?.data);
      });

    // nidMakes
    fetch(`https://smarsebaserver.onrender.com/nidMakes/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setNidMakes(data);
        console.log(data?.data);
      });
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  const handleDeleteOrder = (id) => {
    // Processing obostay order delete kora jabe na

    const agreed = confirm("Do you really want to delete this?");

    if (agreed) {
    }
  };

  return (
    <div>
      <p className="text-center text-xl md:text-2xl mt-5">File List</p>

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
            {bikashInfosData?.data?.map((data) => (
              <tr key={data._id}>
                <td className="text-[15px]">{data.title}</td>
                <td className="text-[15px]">{data.status}</td>
                <td className="text-[15px]">REASON</td>
                <td className="text-[15px]">
                  {data?.createdAt?.split("T")[0]}
                </td>
                <td className="text-[15px] flex flex-row w-full">
                  {data?.status == "Success" && (
                    <div>
                      <button onClick={() => handleDeleteOrder(data?._id)}>
                        <MdDelete
                          className="w-5 h-5 font-semibold text-blue-600"
                          width={16}
                          height={16}
                        />
                      </button>
                    </div>
                  )}

                  {data?.status == "Success" && (
                    <label className="form-control w-full  ">
                      <textarea
                        type="text"
                        defaultValue={data?.pdf}
                        className="input ml-3 input-bordered w-full h-10"
                      />
                    </label>
                  )}
                </td>
              </tr>
            ))}
            {nogodInfoOrders?.data?.map((data) => (
              <tr key={data._id}>
                <td className="text-[15px]">{data.title}</td>
                <td className="text-[15px]">{data.status}</td>
                <td className="text-[15px]">
                  {data?.createdAt?.split("T")[0]}
                </td>
                <td className="text-[15px] flex flex-row w-full">
                  {data?.status == "Success" && (
                    <div>
                      <button onClick={() => handleDeleteOrder(data?._id)}>
                        <MdDelete
                          className="w-5 h-5 font-semibold text-blue-600"
                          width={16}
                          height={16}
                        />
                      </button>
                    </div>
                  )}

                  {data?.status == "Success" && (
                    <label className="form-control w-full  ">
                      <textarea
                        type="text"
                        defaultValue={data?.pdf}
                        className="input ml-3 input-bordered w-full h-10"
                      />
                    </label>
                  )}
                </td>
              </tr>
            ))}
            {orderNIds?.data?.map((data) => (
              <tr key={data._id}>
                <td className="text-[15px]">{data.title}</td>
                <td className="text-[15px]">{data.status}</td>
                <td className="text-[15px]">
                  {data?.createdAt?.split("T")[0]}
                </td>
                <td className="text-[15px] flex flex-row w-full">
                  {data?.status == "Success" && (
                    <div>
                      <button onClick={() => handleDeleteOrder(data?._id)}>
                        <MdDelete
                          className="w-5 h-5 font-semibold text-blue-600"
                          width={16}
                          height={16}
                        />
                      </button>
                    </div>
                  )}

                  {
                    <button>
                      <MdDownload
                        className="w-5 h-5 font-semibold text-blue-600 ml-5"
                        width={16}
                        height={16}
                      />
                    </button>
                  }
                </td>
              </tr>
            ))}
            {callListOrders?.data?.map((data) => (
              <tr key={data._id}>
                <td className="text-[15px]">{data.title}</td>
                <td className="text-[15px]">{data.status}</td>
                <td className="text-[15px]">
                  {data?.createdAt?.split("T")[0]}
                </td>
                <td className="text-[15px] flex flex-row w-full">
                  {data?.status == "Success" && (
                    <div>
                      <button onClick={() => handleDeleteOrder(data?._id)}>
                        <MdDelete
                          className="w-5 h-5 font-semibold text-blue-600"
                          width={16}
                          height={16}
                        />
                      </button>
                    </div>
                  )}

                  {
                    <button>
                      <MdDownload
                        className="w-5 h-5 font-semibold text-blue-600 ml-5"
                        width={16}
                        height={16}
                      />
                    </button>
                  }
                </td>
              </tr>
            ))}
            {bikashPinResets?.data?.map((data) => (
              <tr key={data._id}>
                <td className="text-[15px]">{data.title}</td>
                <td className="text-[15px]">{data.status}</td>
                <td className="text-[15px]">
                  {data?.createdAt?.split("T")[0]}
                </td>
                <td className="text-[15px] flex flex-row w-full">
                  {data?.status == "Success" && (
                    <div>
                      <button onClick={() => handleDeleteOrder(data?._id)}>
                        <MdDelete
                          className="w-5 h-5 font-semibold text-blue-600"
                          width={16}
                          height={16}
                        />
                      </button>
                    </div>
                  )}

                  {
                    <button>
                      <MdDownload
                        className="w-5 h-5 font-semibold text-blue-600 ml-5"
                        width={16}
                        height={16}
                      />
                    </button>
                  }
                </td>
              </tr>
            ))}
            {birthCertificateFixs?.data?.map((data) => (
              <tr key={data._id}>
                <td className="text-[15px]">{data.title}</td>
                <td className="text-[15px]">{data.status}</td>
                <td className="text-[15px]">
                  {data?.createdAt?.split("T")[0]}
                </td>
                <td className="text-[15px] flex flex-row w-full">
                  {data?.status == "Success" && (
                    <div>
                      <button onClick={() => handleDeleteOrder(data?._id)}>
                        <MdDelete
                          className="w-5 h-5 font-semibold text-blue-600"
                          width={16}
                          height={16}
                        />
                      </button>
                    </div>
                  )}

                  {
                    <button>
                      <MdDownload
                        className="w-5 h-5 font-semibold text-blue-600 ml-5"
                        width={16}
                        height={16}
                      />
                    </button>
                  }
                </td>
              </tr>
            ))}
            {biometricOrders?.data?.map((data) => (
              <tr key={data._id}>
                <td className="text-[15px]">{data.title}</td>
                <td className="text-[15px]">{data.status}</td>
                <td className="text-[15px]">
                  {data?.createdAt?.split("T")[0]}
                </td>
                <td className="text-[15px] flex flex-row w-full">
                  {data?.status == "Success" && (
                    <div>
                      <button onClick={() => handleDeleteOrder(data?._id)}>
                        <MdDelete
                          className="w-5 h-5 font-semibold text-blue-600"
                          width={16}
                          height={16}
                        />
                      </button>
                    </div>
                  )}

                  {data?.status == "Success" && (
                    <label className="form-control w-full  ">
                      <textarea
                        type="text"
                        defaultValue={data?.pdf}
                        className="input ml-3 input-bordered w-full h-10"
                      />
                    </label>
                  )}
                </td>
              </tr>
            ))}
            {onlineBirthCertificates?.data?.map((data) => (
              <tr key={data._id}>
                <td className="text-[15px]">{data.title}</td>
                <td className="text-[15px]">{data.status}</td>
                <td className="text-[15px]">
                  {data?.createdAt?.split("T")[0]}
                </td>
                <td className="text-[15px] flex flex-row w-full">
                  {data?.status == "Success" && (
                    <div>
                      <button onClick={() => handleDeleteOrder(data?._id)}>
                        <MdDelete
                          className="w-5 h-5 font-semibold text-blue-600"
                          width={16}
                          height={16}
                        />
                      </button>
                    </div>
                  )}

                  {
                    <button>
                      <MdDownload
                        className="w-5 h-5 font-semibold text-blue-600 ml-5"
                        width={16}
                        height={16}
                      />
                    </button>
                  }
                </td>
              </tr>
            ))}
            {saftyTikas?.data?.map((data) => (
              <tr key={data._id}>
                <td className="text-[15px]">{data.title}</td>
                <td className="text-[15px]">{data.status}</td>
                <td className="text-[15px]">
                  {data?.createdAt?.split("T")[0]}
                </td>
                <td className="text-[15px] flex flex-row w-full">
                  {data?.status == "Success" && (
                    <div>
                      <button onClick={() => handleDeleteOrder(data?._id)}>
                        <MdDelete
                          className="w-5 h-5 font-semibold text-blue-600"
                          width={16}
                          height={16}
                        />
                      </button>
                    </div>
                  )}

                  {
                    <button>
                      <MdDownload
                        className="w-5 h-5 font-semibold text-blue-600 ml-5"
                        width={16}
                        height={16}
                      />
                    </button>
                  }
                </td>
              </tr>
            ))}
            {serverCopys?.data?.map((data) => (
              <tr key={data._id}>
                <td className="text-[15px]">{data.title}</td>
                <td className="text-[15px]">{data.status}</td>
                <td className="text-[15px]">
                  {data?.createdAt?.split("T")[0]}
                </td>
                <td className="text-[15px] flex flex-row w-full">
                  {data?.status == "Success" && (
                    <div>
                      <button onClick={() => handleDeleteOrder(data?._id)}>
                        <MdDelete
                          className="w-5 h-5 font-semibold text-blue-600"
                          width={16}
                          height={16}
                        />
                      </button>
                    </div>
                  )}

                  {
                    <button>
                      <MdDownload
                        className="w-5 h-5 font-semibold text-blue-600 ml-5"
                        width={16}
                        height={16}
                      />
                    </button>
                  }
                </td>
              </tr>
            ))}
            {nidMakes?.data?.map((data) => (
              <tr key={data._id}>
                <td className="text-[15px]">{data.title}</td>
                <td className="text-[15px]">{data.status}</td>
                <td className="text-[15px]">
                  {data?.createdAt?.split("T")[0]}
                </td>
                <td className="text-[15px] flex flex-row w-full">
                  {data?.status == "Success" && (
                    <div>
                      <button onClick={() => handleDeleteOrder(data?._id)}>
                        <MdDelete
                          className="w-5 h-5 font-semibold text-blue-600"
                          width={16}
                          height={16}
                        />
                      </button>
                    </div>
                  )}

                  {
                    <button>
                      <MdDownload
                        className="w-5 h-5 font-semibold text-blue-600 ml-5"
                        width={16}
                        height={16}
                      />
                    </button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileList;
