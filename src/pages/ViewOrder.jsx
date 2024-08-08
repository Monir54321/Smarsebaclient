import React, { useEffect, useState } from 'react';

const ViewOrder = ({ viewUrl }) => {
    const [order, setOrder] = useState(null);

    useEffect(() => {
        fetch(`https://smart-seba-server.onrender.com/${viewUrl}`)
            .then(res => res.json())
            .then(data => {
                console.log(data?.data);
                setOrder(data?.data);
            })
    }, [viewUrl])

    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <div className="py-4">
                        {order && Object?.entries(order)?.map(([key, value]) => (
                            <div className='flex gap-2' key={key}>
                                <strong className=''>{key}:</strong> {value.toString()}
                            </div>
                        ))}
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ViewOrder;