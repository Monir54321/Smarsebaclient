import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../components/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';

const Recharge = () => {
  const [amount, setAmount] = useState(0);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading />
  }


  const handleRecharge = async (e) => {

    try {


      if (amount > 0) {
        console.log("inside if", amount);
        const res = await fetch("https://smart-seba-server.onrender.com/api/bkash/create", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ amount, email: "onlineserviceguru01@gmail.com" })
        });

        const result = await res.json();
        console.log(result);
        if (result?.data) {
          window.location = result?.data?.bkashURL || result?.data?.data.bkashURL;
        } else {
          toast.error("Something went wrong");
        }
      }

      // console.log(result?.data?.data.bkashURL);
      // console.log(result?.data?.data);




    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className='w-full p-10 min-h-screen '>
      <div className='flex flex-col items-center md:w-[500px] mx-auto'>
        <h2 className='text-center text-xl md:text-2xl'>Recharge</h2>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Amount</span>
          </div>
          <input onChange={(e) => setAmount(e.target.value)} type="amount" placeholder="Amount" name='amount' className="input input-bordered w-full" />

        </label>
        <button onClick={handleRecharge} className='btn w-full  mt-4 btn-primary text-white'>Pay Now</button>
      </div>

    </div>
  );
};

export default Recharge;