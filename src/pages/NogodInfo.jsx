import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';
import Loading from '../components/Loading';
import toast from 'react-hot-toast';
import { MdDelete, MdDownload } from 'react-icons/md';

const NogodInfo = () => {

    const [user, loading, error] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState(null)
    const [reFetch, setReFetch] = useState(false);

    if (loading) {
        return <Loading />
    }

    useEffect(() => {
        fetch(`https://smart-seba-server.onrender.com/nogodInfoOrders/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data?.status == "Success") {
                    setReFetch(false)
                    setMyOrders(data?.data)
                    console.log(data);
                }
            })
    }, [user, reFetch])

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = "নগদ ইনফো";
        const nogodNumber = e.target.number.value;
        const description = e.target.description.value;

        const info = {
            nogodNumber,
            description,
            email: user.email,
            title
        }

        fetch("https://smart-seba-server.onrender.com/priceList/668f76383906559fe7ff631c")
            .then(res => res.json())
            .then(pData => {
                const price = pData?.data?.nogodInfoOrder;

                if (price) {
                    fetch(`https://smart-seba-server.onrender.com/users/${user.email}`)
                        .then(res => res.json())
                        .then(data => {
                            if (data?.data?.amount >= price) {
                                // post data to database
                                fetch("https://smart-seba-server.onrender.com/nogodInfoOrders/", {
                                    method: "POST",
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(info)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        if (data.status == "Success") {
                                            setReFetch(true)
                                            toast.success(data.message);
                                            console.log(data);
                                        } else {
                                            toast.error(data.message);
                                            console.log(data);
                                        }
                                    })
                            } else {
                                toast.error("Please recharge to proceed this order");
                            }
                        })
                }
            })




    }
    return (
        <div className='w-full p-10 min-h-screen '>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <h1 className='text-1xl md:text-3xl text-center'>নগদ ইনফো অর্ডার করুন</h1>
                <h1 className=' md:text-xl text-center mt-5 '>নগদ ইনফোর জন্য 700 টাকা কাটা হবে।</h1>

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Nogod Number</span>
                    </div>
                    <input type="number" placeholder="number" name='number' className="input input-bordered w-full" />

                </label>

                <label className="form-control w-full  mt-3">
                    <div className="label">
                        <span className="label-text">নগদ ইনফো সম্পর্কে বিস্তারিত লিখুনঃ(যদি কিছু বলার থাকে)</span>
                    </div>
                    <textarea type="text" placeholder="Description" name='description' className="input input-bordered w-full h-24" />

                </label>

                <button className='btn w-full  mt-4 btn-primary text-white'>Submit</button>
            </form>

            <div className='mt-10'>
                {
                    myOrders && <div className="overflow-x-auto">
                        <table className="table table-xs table-pin-rows table-pin-cols">
                            <thead>
                                <tr>
                                    <td>SERVICE</td>
                                    <td>STATUS</td>
                                    <td>DATE</td>
                                    <td>DOWNLOAD</td>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myOrders?.map(data => <tr key={data._id}>

                                        <td className='text-[15px]'>{data?.title}</td>
                                        <td className='text-[15px]'>{data?.status}</td>
                                        <td className='text-[15px]'>{data?.createdAt?.split("T")[0]}</td>
                                        <td className='text-[15px] flex flex-row w-full'>
                                            {
                                                data?.status == "Processing" || "Pending" ? <button onClick={() => alert("You can't delete until successfully delivering this service")}>
                                                    <MdDelete className='w-5 h-5 font-semibold text-blue-600' width={16} height={16} />
                                                </button> : <button onClick={() => handleDeleteOrder(data?._id)}>
                                                    <MdDelete className='w-5 h-5 font-semibold text-blue-600' width={16} height={16} />
                                                </button>
                                            }

                                            {
                                                data?.title == "boi" ? ""
                                                    : <button>
                                                        <MdDownload className='w-5 h-5 font-semibold text-blue-600 ml-5' width={16} height={16} />
                                                    </button>
                                            }
                                        </td>
                                    </tr>)
                                }

                            </tbody>

                        </table>
                    </div>
                }
            </div>

        </div>
    );
};

export default NogodInfo;