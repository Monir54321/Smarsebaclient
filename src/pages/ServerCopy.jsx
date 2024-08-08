import React, { useEffect, useState } from 'react';
import ServerCopyResult from './ServerCopyResult';
import { useNavigate } from 'react-router-dom';

const data = {
    "data": {
        "status": 200,
        "response": "success",
        "data": {
            "name": "গাজী মোঃ বাইজিদ",
            "nameEn": "G M BAYZID",
            "gender": "null",
            "bloodGroup": "O+",
            "father": "মোঃ মামুনুর রশিদ",
            "mother": "নুরুন নাহার বেগম",
            "spouse": "",
            "nationalId": "2417599137",
            "permanentAddress": "চট্টগ্রাম,কুমিল্লা,1,বুড়িচং,রাজাপুর,চড়ানল,৩৫০০,2,পাচোঁড়া,পাচোঁড়া,গাজী বাড়ী,কুমিল্লা",
            "presentAddress": "চট্টগ্রাম,কুমিল্লা,1,বুড়িচং,রাজাপুর,চড়ানল,৩৫০০,2,পাচোঁড়া,পাচোঁড়া,গাজী বাড়ী,কুমিল্লা",
            "presentAddr": {
                "division": "চট্টগ্রাম",
                "district": "কুমিল্লা",
                "upazila": "বুড়িচং",
                "union": "রাজাপুর",
                "village": "চড়ানল",
                "postcode": "৩৫০০",
                "ward": "2",
                "area": "পাচোঁড়া"
            },
            "permanentAddr": {
                "division": "চট্টগ্রাম",
                "district": "কুমিল্লা",
                "upazila": "বুড়িচং",
                "union": "রাজাপুর",
                "village": "চড়ানল",
                "postcode": "৩৫০০",
                "ward": "2",
                "area": "পাচোঁড়া"
            },
            "photo": "https://mfs.agranibank.org:9293/appapi/assets/images/nidprofilepic/2417599137_1720773976.jpeg",
            "mobile": "",
            "religion": "",
            "nidFather": "",
            "nidMother": "",
            "voterArea": "রাজাপুর (2 নং অংশ)",
            "dateOfBirth": "2005-01-21",
            "birthPlace": "কুমিল্লা",
            "pin": "20051911875000081"
        }
    },
    "voter": {
        "message": "ok",
        "voter_no": "191311001201",
        "sl_no": 1692,
        "voterArea": "রাজাপুর (2 নং অংশ)",
        "voterAreaCode": "",
        "voterAt": "",
        "gender": "null"
    }
}

const ServerCopy = () => {
    const [nidData, setNidData] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nidNumber = e?.target?.NIDNumber?.value;
        const dateOfBirth = e?.target?.dateOfBirth?.value;

        console.log(nidNumber, dateOfBirth);
        setNidData(data);
        // if (nidNumber && dateOfBirth) {
        //     fetch(`https://api.foxithub.com/unofficial/api.php?key=signCopy&nid=${nidNumber}&dob=${dateOfBirth}`, {
        //         method: 'GET',
        //         headers: {
        //             'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        //             'sec-ch-ua-mobile': '?1',
        //             'sec-ch-ua-platform': '"Android"',
        //             'dnt': '1',
        //             'upgrade-insecure-requests': '1',
        //             'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36',
        //             'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        //             'sec-fetch-site': 'none',
        //             'sec-fetch-mode': 'navigate',
        //             'sec-fetch-user': '?1',
        //             'sec-fetch-dest': 'document',
        //             'accept-encoding': 'gzip, deflate, br, zstd',
        //             'accept-language': 'en-US,en;q=0.9,ja;q=0.8,bn;q=0.7,ru;q=0.6',
        //             'cookie': 'twk_uuid_65ffdb5b1ec1082f04da92ac=%7B%22uuid%22%3A%221.SwsRsJ2muObQYvjv8N0k3o4rQl4CzcEcsuXqokDy1Lt4ZUT0JLWOljC3pZvEXuG6isdtljI0ktcQDspKCEYQjNm0HfYk2uqrYjPRy90oX0GAMIYeq5pI8%22%2C%22version%22%3A3%2C%22domain%22%3A%22foxithub.com%22%2C%22ts%22%3A1720343404181%7D',
        //             'priority': 'u=0, i'
        //         }
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data);
        //             setNidData(data)
        //         })
        // }
    }
    if (nidData) {
        return <ServerCopyResult nidData={nidData} />
    }
    
    return (
        <div className='w-full p-10 min-h-screen '>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <h1 className='text-1xl md:text-3xl text-center'>Server Copy</h1>
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
                    <input type="text"  placeholder="DATE OF BIRTH (YYYY-MM-DD)" name='dateOfBirth' className="input input-bordered w-full" />

                </label>

                <button className='btn w-full  mt-4 btn-primary text-white'>Submit</button>
            </form>
        </div>
    );
};

export default ServerCopy;