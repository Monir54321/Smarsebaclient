import React from 'react';

const ServerCopyToNID = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div className='w-full p-10 min-h-screen '>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <h1 className='text-1xl md:text-3xl text-center'>Server Copy to NID Make</h1>
                <h1 className=' md:text-xl text-center mt-5 '>আপনার একাউন্ট থেকে 10 টাকা কাটা হবে।</h1>

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">NID Number (10/17 DIGIT)</span>
                    </div>
                    <input type="text" placeholder="NID Number" name='NIDNumber' className="input input-bordered w-full" />

                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">DATE OF BIRTH (YYYY-MM-DD)</span>
                    </div>
                    <input type="text" placeholder="DATE OF BIRTH (YYYY-MM-DD)" name='dateOfBirth' className="input input-bordered w-full" />

                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">SIGNATURE</span>
                    </div>
                    <input type="file" name='signature' className="file-input file-input-bordered w-full" />

                </label>



                <button className='btn w-full  mt-4 btn-primary text-white'>Submit</button>
            </form>

        </div>
    );
};

export default ServerCopyToNID;