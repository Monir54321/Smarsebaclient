/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

// import React, { useRef, useState } from "react";
// import serverCopyImage from "../assets/serverCopy.png";
// import { useReactToPrint } from "react-to-print";
// import QRCode from "qrcode";
// import { useEffect } from 'react';

import { useState } from "react";
import "./ServerCopyResult.css";
import ServerCopyQr from "./ServerCopyQr";

const ServerCopyResult = ({ nidData }) => {
  
  // const nidInformation = nidData?.data?.data || {};
  // const AddressData = nidAddressData?.data;

  const nidInformationStaticData = {
    name: "সাজুদা বেগম",
    nameEn: "Sajoda Begum",
    spouse: "মোঃ আবুল হোসেন",
    gender: "Female",
    bloodGroup: "O+",
    dateOfBirth: "1975-03-10",
    father: "লুৎফর রহমান",
    mother: "জিন্নতির নেছা",
    pin: "123456",
    nationalId: "9150012632",
    religion: "Islam",
    mobile: "017XXXXXXXX",
    occupation: "Teacher",
    photo:
      "https://prportal.nidw.gov.bd/file-cb/b/d/f/77b5fd95-31c0-41e6-9b6e-3ea794d03833/Photo-77b5fd95-31c0-41e6-9b6e-3ea794d03833.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=fileobj%2F20240821%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240821T045157Z&X-Amz-Expires=120&X-Amz-SignedHeaders=host&X-Amz-Signature=269a6a16e8cec6b085ae67d48287e2d163567b39bb61ba545bdc6a1b28aaeb4f",
    voter_no: "voter_no_dynamic",
    sl_no: "sl_no_dynamic",
    voterAreaCode: "dynamic",
    permanentAddress: {
      division: "Dhaka",
      district: "Chandpur",
      upozila: "Faridganj",
      unionOrWard: "Paikpara Union",
      postOffice: "Paikpara - 3651",
      postalCode: "3651",
      additionalMouzaOrMoholla: "Paikpara",
      additionalVillageOrRoad: "Paikpara Road",
      homeOrHoldingNo: "123/B",
      region: "South",
      fullAddress:
        "বাসা/হোল্ডিং: ওলি ড্রাইভার বাড়ী, ডাকঘর: নবাবপুর-৩৯৩২, উপজেলা: সোনাগাজী, জেলা: ফেনী, বিভাগ: চট্টগ্রাম",
    },
    presentAddress: {
      division: "Dhaka",
      district: "Chandpur",
      upozila: "Faridganj",
      unionOrWard: "Paikpara Union",
      postOffice: "Paikpara - 3651",
      postalCode: "3651",
      additionalMouzaOrMoholla: "Paikpara",
      additionalVillageOrRoad: "Paikpara Road",
      homeOrHoldingNo: "123/B",
      region: "South",
      fullAddress:
        "বাসা/হোল্ডিং: ওলি ড্রাইভার বাড়ী, ডাকঘর: নবাবপুর-৩৯৩২, উপজেলা: সোনাগাজী, জেলা: ফেনী, বিভাগ: চট্টগ্রাম",
    },
  };

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
    voter_no,
    sl_no,
    voterAreaCode,
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
      fullAddress: permanentFullAddress,
    } = {}, // Add default empty object here
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
      fullAddress: presentFullAddress,
    } = {}, // Add default empty object here
  } = nidInformationStaticData;

  return (
    <div className="print:-mt-20 print:scale-100">
      {/* <button className="print:hidden" onClick={() => window.print()}>
        Print
      </button> */}

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
          {nationalId}
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
            top: "32.5%",
            width: "auto",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          {pin}
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
          {voter_no}
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
          {sl_no}
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
          {permanentDivision}
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
            marginTop: "1px",
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
          {name}
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
          {nameEn}
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
          {dateOfBirth}
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
          {father}
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
          {mother}
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
          {spouse || ""}
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "62.5%",
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
          {gender}
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
          ধর্ম
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
          {religion}
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
          ভোটার এরিয়া কোড
        </div>
        <div
          id="blood_grp"
          style={{
            position: "absolute",
            left: "55%",
            top: "70.5%",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          {voterAreaCode}
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
          {presentDivision}
        </div>

        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "76.3%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          <b>বর্তমান ঠিকানা</b>
        </div>

        {/* <div
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
          গ্রাম/রাস্তা: {presentAdditionalVillageOrRoad}, উপজেলা:
          {presentUpozila}, পোস্ট কোড : {presentPostalCode}, জেলা:
          {presentDistrict} িবভাগ: {presentDivision}
        </div> */}

        <div
          id="present_addr"
          style={{
            position: "absolute",
            left: "37%",
            top: "78.5%",
            width: "48%",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          {presentFullAddress}
        </div>

        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "85.3%",
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
            top: "87.4%",
            width: "48%",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          {permanentFullAddress}
        </div>

        {/* <div
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
        </div> */}

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
          উপরে প্রদর্শিত তথ্যসমূহ জাতীয় পরিচয়পত্র সংশ্লিষ্ট, ভোটার তালিকার সাথে
          সরাসরি সম্পর্কযুক্ত নয়।
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
          This is Software Generated Report From Bangladesh Election Commission,
          Signature & Seal Aren't Required.
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
            src={photo}
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
          <ServerCopyQr nationalId={nationalId} pin={pin} name={name}/>
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
          <b>{name}</b>
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
