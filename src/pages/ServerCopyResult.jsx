/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

// import React, { useRef, useState } from "react";
// import serverCopyImage from "../assets/serverCopy.png";
// import { useReactToPrint } from "react-to-print";
// import QRCode from "qrcode";
// import { useEffect } from 'react';

import "./ServerCopyResult.css";

const ServerCopyResult = ({ nidData, nidAddressData }) => {
  const nidInformation = nidData?.data?.data;
  const AddressData = nidAddressData?.data;
  const {
    name,
    nameEn,
    spouse,
    gender,
    bloodGroup,
    dateOfBirth,
    father,
    mother,
    pin,
    nationalId,
    religion,
    mobile,
    occupation,
    photo,
    permanentAddress: {
      division: permanentDivision,
      district: permanentDistrict,
      upozila: permanentUpozila,
      unionOrWard: permanentUnionOrWard,
      postOffice: permanentPostOffice,
      postalCode: permanentPostalCode,
      additionalMouzaOrMoholla: permanentAdditionalMouzaOrMoholla,
      additionalVillageOrRoad: permanentAdditionalVillageOrRoad,
      homeOrHoldingNo: permanentHomeOrHoldingNo,
      region: permanentRegion,
    },
    presentAddress: {
      division: presentDivision,
      district: presentDistrict,
      upozila: presentUpozila,
      unionOrWard: presentUnionOrWard,
      postOffice: presentPostOffice,
      postalCode: presentPostalCode,
      additionalMouzaOrMoholla: presentAdditionalMouzaOrMoholla,
      additionalVillageOrRoad: presentAdditionalVillageOrRoad,
      homeOrHoldingNo: presentHomeOrHoldingNo,
      region: presentRegion,
    },
  } = nidInformation;

  return (
    <div className=" print:-mt-28 print:scale-95">
      <button className="print:hidden" onClick={() => window.print()}>
        Print
      </button>

      <div className="background">
        <div style={{ position: "relative" }}>
          <img
            className="crane"
            src="https://servarcopyhd.xyz/images/cbimagex1.png"
            alt="Crane"
            height="1500px"
            width="1070px"
          />
          <div
            style={{
              position: "absolute",
              left: "30%",
              top: "8%",
              fontSize: "16px",
              color: "rgb(255, 224, 0)",
            }}
          >
            <b>National Identity Registration Wing (NIDW)</b>
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "11%",
              fontSize: "14px",
              color: "rgb(255, 47, 161)",
            }}
          >
            <b>Select Your Search Category</b>
          </div>
          <div
            style={{
              position: "absolute",
              left: "45%",
              top: "12.8%",
              fontSize: "12px",
              color: "rgb(8, 121, 4)",
            }}
          >
            Search By NID / Voter No.
          </div>
          <div
            style={{
              position: "absolute",
              left: "45%",
              top: "14.3%",
              fontSize: "12px",
              color: "rgb(7, 119, 184)",
            }}
          >
            Search By Form No.
          </div>
          <div
            style={{
              position: "absolute",
              left: "30%",
              top: "16.9%",
              fontSize: "12px",
              color: "rgb(252, 0, 0)",
            }}
          >
            <b>NID or Voter No*</b>
          </div>
          <div
            style={{
              position: "absolute",
              left: "45%",
              top: "16.9%",
              fontSize: "12px",
              color: "rgb(143, 143, 143)",
            }}
          >
            NID
          </div>
          <div
            style={{
              position: "absolute",
              left: "63.7%",
              top: "17.3%",
              fontSize: "11px",
              color: "#ffffff",
            }}
          >
            Submit
          </div>
          <div
            style={{
              position: "absolute",
              left: "89.6%",
              top: "11.75%",
              fontSize: "11px",
              color: "#ffffff",
            }}
          >
            Home
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "27.4%",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            <b>জাতীয় পরিচিতি তথ্য</b>
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "30%",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            জাতীয় পরিচয় পত্র নম্বর
          </div>
        </div>

        <div
          id="nid_no"
          style={{
            position: "absolute",
            left: "55%",
            top: "30.3%",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          69111564464646
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "32.7%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          পিন নম্বর
        </div>
        <div
          id="nid_father"
          style={{
            position: "absolute",
            left: "55%",
            top: "32.7%",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          {/* {nidData?.data?.data?.pin} */}
          76446464446
        </div>

        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "35.4%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          ভোটার নম্বর
        </div>
        <div
          id="nid_mother"
          style={{
            position: "absolute",
            left: "55%",
            top: "35.4%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          123
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "38%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          সিরিয়াল নম্বর
        </div>
        <div
          id="spouse"
          style={{
            position: "absolute",
            left: "55%",
            top: "38%",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          1234
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "40.5%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          ভোটার অঞ্চল
        </div>
        <div
          id="voter_area"
          style={{
            position: "absolute",
            left: "55%",
            top: "40.5%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          rangpur
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "43.5%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          <b>ব্যক্তিগত তথ্য</b>
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "46%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          নাম (বাংলা)
        </div>
        <div
          id="name_bn"
          style={{
            position: "absolute",
            fontWeight: "bold",
            left: "55%",
            top: "46%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          kabir
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "48.5%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          নাম (ইংরেজি)
        </div>

        <div
          id="name_en"
          style={{
            position: "absolute",
            left: "55%",
            top: "48.5%",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          kabir
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "51.2%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          জন্ম তারিখ
        </div>
        <div
          id="dob"
          style={{
            position: "absolute",
            left: "55%",
            top: "51.2%",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          19-11-1998
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "53.8%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          পিতার নাম
        </div>
        <div
          id="fathers_name"
          style={{
            position: "absolute",
            left: "55%",
            top: "53.8%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          aaaa
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "56.5%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          মাতার নাম
        </div>
        <div
          id="mothers_name"
          style={{
            position: "absolute",
            left: "55%",
            top: "56.5%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          bbbb
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "59.5%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          স্বামী/স্ত্রীর নাম
        </div>
        <div
          id="blood"
          style={{
            position: "absolute",
            left: "55%",
            top: "59.5%",
            fontSize: "18px",
            color: "black",
          }}
        >
          cccc
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "62.2%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          <b>অন্যান্য তথ্য</b>
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "65%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          লিঙ্গ
        </div>
        <div
          id="gender"
          style={{
            position: "absolute",
            left: "55%",
            top: "65%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          male
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "67.7%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          পেশা
        </div>
        <div
          id="mobile_no"
          style={{
            position: "absolute",
            left: "55%",
            top: "67.7%",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          kamla
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "70.5%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          রক্তের গ্রুপ
        </div>
        <div
          id="blood_grp"
          style={{
            position: "absolute",
            left: "55%",
            top: "70.5%",
            fontSize: "18px",
            color: "red",
          }}
        >
          b+
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "72.9%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          জন্মস্থান
        </div>
        <div
          id="birth_place"
          style={{
            position: "absolute",
            left: "55%",
            top: "72.9%",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          rangpur
        </div>

        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "75.9%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          <b>বর্তমান ঠিকানা</b>
        </div>

        <div
          id="present_addr"
          style={{
            position: "absolute",
            left: "37%",
            top: "78.1%",
            width: "48%",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          গ্রাম/রাস্তা: ইসলামাবাদ রাড, উপজেলা: কদমতলী, পোস্ট কোড : 1204, জেলা:
          ঢাকা, িবভাগ: ঢাকা
        </div>

        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "84.7%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          <b>স্থায়ী ঠিকানা</b>
        </div>

        <div
          id="permanent_addr"
          style={{
            position: "absolute",
            left: "37%",
            top: "87%",
            width: "48%",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          গ্রাম/রাস্তা: ইসলামাবাদ রাড, উপজেলা: কদমতলী, জেলা: ঢাকা, িবভাগ: ঢাকা
        </div>

        <div
          style={{
            position: "absolute",
            top: "93.5%",
            width: "100%",
            textAlign: "center",
            fontSize: "14px",
            color: "rgb(3, 3, 3)",
          }}
        >
          This is Software Generated Report From Bangladesh Election Commission,
          Signature &amp; Seal Aren't Required.
        </div>

        <div
          style={{
            position: "absolute",
            top: "95%",
            width: "100%",
            fontSize: "16px",
            textAlign: "center",
            color: "rgb(255, 0, 0)",
          }}
        >
          উপরে প্রদর্শিত তথ্যসমূহ জাতীয় পরিচয়পত্র সংশ্লিষ্ট, ভোটার তালিকার সাথে
          সরাসরি সম্পর্কযুক্ত নয়।
        </div>

        <div
          style={{
            position: "absolute",
            left: "19%",
            top: "25.7%",
            width: "auto",
            fontSize: "12px",
            color: "rgb(3, 3, 3)",
          }}
        >
          <img
            id="photo"
            src={"/nid_img.jpg"}
            // height="140px"
            // width="1px"
            style={{ borderRadius: "10px", width: "125px", height: "140px" }}
            alt="NID Image"
            // className='w-full'
          />
        </div>

        <div
          style={{
            position: "absolute",
            left: "21%",
            top: "40%",
            width: "auto",
            fontSize: "12px",
            color: "rgb(3, 3, 3)",
          }}
        >
          <img
            // id="qr"
            src={`/public/barcode.gif`}
            style={{ height: "110px", width: "120px", marginLeft: "-10px" }}
            // height="110px"
            // width="110px"
            alt="QR Code"
          />
        </div>

        <div
          id="name_en2"
          style={{
            position: "absolute",
            fontWeight: "bold",
            left: "17%",
            top: "36.1%",
            height: "32px",
            width: "161px",
            fontSize: "13px",
            color: "rgb(7, 7, 7)",
            margin: 0,
            padding: 0,
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <b>Nisharga Kabir</b>
        </div>
      </div>

      {/*   <div ref={componentRef} className=" relative w-[1070px]">
        <div className="background">
          <img
            className="crane"
            src={serverCopyImage}
            height="1500px"
            width="1270px"
            alt="Background"
          />
          <div
            style={{
              position: "absolute",
              left: "30%",
              top: "8%",
              width: "auto",
              fontSize: "16px",
              color: "rgb(255 224 0)",
            }}
          >
            <b>National Identity Registration Wing (NIDW)</b>
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "11%",
              width: "auto",
              fontSize: "14px",
              color: "rgb(255, 47, 161)",
            }}
          >
            <b>Select Your Search Category</b>
          </div>
          <div
            style={{
              position: "absolute",
              left: "45%",
              top: "12.8%",
              width: "auto",
              fontSize: "12px",
              color: "rgb(8, 121, 4)",
            }}
          >
            Search By NID / Voter No.
          </div>
          <div
            style={{
              position: "absolute",
              left: "45%",
              top: "14.3%",
              width: "auto",
              fontSize: "12px",
              color: "rgb(7, 119, 184)",
            }}
          >
            Search By Form No.
          </div>
          <div
            style={{
              position: "absolute",
              left: "30%",
              top: "16.9%",
              width: "auto",
              fontSize: "12px",
              color: "rgb(252, 0, 0)",
            }}
          >
            <b>NID or Voter No*</b>
          </div>
          <div
            style={{
              position: "absolute",
              left: "45%",
              top: "16.9%",
              width: "auto",
              fontSize: "12px",
              color: "rgb(143, 143, 143)",
            }}
          >
            NID
          </div>
          <div
            style={{
              position: "absolute",
              left: "63.7%",
              top: "17.3%",
              width: "auto",
              fontSize: "11px",
              color: "#ffffff",
            }}
          >
            Submit
          </div>
          <div
            style={{
              position: "absolute",
              left: "89.6%",
              top: "11.75%",
              width: "auto",
              fontSize: "11px",
              color: "#fff",
            }}
          >
            Home
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "27.4%",
              width: "auto",

              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            <b>জাতীয় পরিচিতি তথ্য</b>
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "30%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            জাতীয় পরিচয় পত্র নম্বর
          </div>
          <div
            id="nid_no"
            style={{
              position: "absolute",
              left: "55%",
              top: "30%",
              width: "auto",
              fontSize: "16px",
              color: "rgb(7, 7, 7)",
            }}
          >
            {data?.data?.data?.nationalId}
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "32.7%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            পিন নম্বর
          </div>
          <div
            id="nid_father"
            style={{
              position: "absolute",
              left: "55%",
              top: "32.5%",
              width: "auto",
              fontSize: "16px",
              color: "rgb(7, 7, 7)",
            }}
          >
            {data?.data?.data?.pin}
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "35.4%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            ভোটার নম্বর
          </div>
          <div
            id="nid_mother"
            style={{
              position: "absolute",
              left: "55%",
              top: "35.4%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            {data?.voter?.voter_no}
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "38%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            সিরিয়াল নম্বর
          </div>
          <div
            id="spouse"
            style={{
              position: "absolute",
              left: "55%",
              top: "38%",
              width: "auto",
              fontSize: "16px",
              color: "rgb(7, 7, 7)",
            }}
          >
            {data?.voter?.sl_no}
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "40.5%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            ভোটার অঞ্চল
          </div>
          <div
            id="voter_area"
            style={{
              position: "absolute",
              left: "55%",
              top: "40.5%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            {data?.data?.data?.presentAddr.division}
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "43.5%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            <b>ব্যক্তিগত তথ্য</b>
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "46%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            নাম (বাংলা)
          </div>
          <div
            id="name_bn"
            style={{
              position: "absolute",
              fontWeight: "bold",
              left: "55%",
              top: "46%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            <b>{data?.data?.data?.name}</b>
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "48.5%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            নাম (ইংরেজি)
          </div>
          <div
            id="name_en"
            style={{
              position: "absolute",
              left: "55%",
              top: "48.5%",
              width: "auto",
              fontSize: "16px",
              color: "rgb(7, 7, 7)",
            }}
          >
            {data?.data?.data?.nameEn}
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "51.2%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            জন্ম তারিখ
          </div>
          <div
            id="dob"
            style={{
              position: "absolute",
              left: "55%",
              top: "51.2%",
              width: "auto",
              fontSize: "16px",
              color: "rgb(7, 7, 7)",
            }}
          >
            {data?.data?.data?.dateOfBirth}
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "53.8%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            পিতার নাম
          </div>
          <div
            id="fathers_name"
            style={{
              position: "absolute",
              left: "55%",
              top: "53.8%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            {data?.data?.data?.father}
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "56.5%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            মাতার নাম
          </div>
          <div
            id="mothers_name"
            style={{
              position: "absolute",
              left: "55%",
              top: "56.5%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            {data?.data?.data?.mother}
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "59.5%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            স্বামী/স্ত্রীর নাম
          </div>
          <div
            id="blood"
            style={{
              position: "absolute",
              left: "55%",
              top: "59.5%",
              width: "auto",
              fontSize: "18px",
              color: "black",
            }}
          >
            {data?.data?.data?.spouse}
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "62.2%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            <b>অন্যান্য তথ্য</b>
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "65%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            লিঙ্গ
          </div>
          <div
            id="gender"
            style={{
              position: "absolute",
              left: "55%",
              top: "65%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            {data?.data?.data?.gender}
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "67.7%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            ধর্ম
          </div>
          <div
            id="mobile_no"
            style={{
              position: "absolute",
              left: "55%",
              top: "67.7%",
              width: "auto",
              fontSize: "16px",
              color: "rgb(7, 7, 7)",
            }}
          >
            {data?.data?.data?.religion}
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "70.5%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            রক্তের গ্রুপ
          </div>
          <div
            id="blood_grp"
            style={{
              position: "absolute",
              left: "55%",
              top: "70.5%",
              width: "auto",
              fontSize: "18px",
              color: "red",
            }}
          >
            {data?.data?.data?.bloodGroup}
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "72.9%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            জন্মস্থান
          </div>
          <div
            id="birth_place"
            style={{
              position: "absolute",
              left: "55%",
              top: "72.9%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            {data?.data?.data?.birthPlace}
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "75.9%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            <b>বর্তমান ঠিকানা</b>
          </div>
          <div
            id="present_addr"
            style={{
              position: "absolute",
              left: "37%",
              top: "78.1%",
              width: "48%",
              fontSize: "16px",
              color: "rgb(7, 7, 7)",
            }}
          >
            {`বাসা/হোল্ডিং: ${home}, গ্রাম/রাস্তা: ${village}, মৌজা/মহল্লা: ${area}, ইউনিয়ন: ${union}, ${presentAddress}`}
          </div>
          <div
            style={{
              position: "absolute",
              left: "37%",
              top: "84.7%",
              width: "auto",
              fontSize: "18px",
              color: "rgb(7, 7, 7)",
            }}
          >
            <b>স্থায়ী ঠিকানা</b>
          </div>
          <div
            id="permanent_addr"
            style={{
              position: "absolute",
              left: "37%",
              top: "87%",
              width: "48%",
              fontSize: "16px",
              color: "rgb(7, 7, 7)",
            }}
          >
            {`বাসা/হোল্ডিং: ${phome}, গ্রাম/রাস্তা: ${pvillage}, মৌজা/মহল্লা: ${parea}, ইউনিয়ন: ${punion}, ${presentAddress}`}
          </div>
          <div
            style={{
              position: "absolute",
              top: "93.5%",
              width: "100%",
              textAlign: "center",
              fontSize: "14px",
              color: "rgb(255, 0, 0)",
            }}
          >
            উপরে প্রদর্শিত তথ্যসমূহ জাতীয় পরিচয়পত্র সংশ্লিষ্ট, ভোটার তালিকার
            সাথে সরাসরি সম্পর্কযুক্ত নয়।
          </div>
          <div
            style={{
              position: "absolute",
              top: "95%",
              width: "100%",
              fontSize: "16px",
              textAlign: "center",
              color: "rgb(3, 3, 3)",
            }}
          >
            This is Software Generated Report From Bangladesh Election
            Commission, Signature & Seal Aren't Required.
          </div>
          <div
            style={{
              position: "absolute",
              left: "19%",
              top: "25.7%",
              width: "auto",
              fontSize: "12px",
              color: "rgb(3, 3, 3)",
            }}
          >
            <img
              id="photo"
              src={data?.data?.data?.photo}
              className="mt-3"
              height="140px"
              width="160px"
              style={{ borderRadius: "10px" }}
              alt="Profile"
            />
            <p className="text-center my-3 text-[18px] font-semibold">
              {data?.data?.data?.nameEn}
            </p>
            <img
              className="mx-auto mt-[-7px]"
              id="photo"
              src={qrImage}
              height="125px"
              width="125px"
              style={{ borderRadius: "10px" }}
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button
          onClick={handlePrint}
          className="btn w-full   mb-4 btn-primary text-white flex justify-center items-center"
        >
          Download
        </button>
      </div> */}
    </div>
  );
};

export default ServerCopyResult;
