import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Toaster } from "react-hot-toast";
import {
  FaAddressCard,
  FaFingerprint,
  FaMoneyCheckAlt,
  FaPhoneAlt,
  FaRegAddressCard,
  FaSearchengin,
  FaUserEdit,
  FaWhatsapp,
} from "react-icons/fa";
import { FaFilePen, FaMapLocation } from "react-icons/fa6";
import { GiSyringe } from "react-icons/gi";
import { IoMdCard } from "react-icons/io";
import { MdLockReset } from "react-icons/md";
import { PiFilesFill } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";
import bikashIcon from "../assets/bikash_icon.png";
import logo from "../assets/logo.png";
import nogodIcon from "../assets/nogod_icon.png";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import auth from "../firebase/firebase.config";

const DashboardLayout = () => {
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data?.data);
      });
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Navbar />

          <Outlet />
        </div>
        <div className="drawer-side z-30 ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-[#F8FAFC] text-black shadow-md  border-r-4 min-h-full w-[280px]">
            {/* Sidebar content here */}
            <Link className="" to={"/dashboard"}>
              <img className="h-[150px]" src={logo} alt="" />
            </Link>
            {userData?.role == "master" && (
              <li className="mt-2 text-[15px] font-sans text-gray-500">
                <Link to={"/dashboard/orders"}>
                  {" "}
                  <FaMoneyCheckAlt width={16} height={16} />
                  Orders
                </Link>
              </li>
            )}
            {userData?.role == "master" && (
              <li className="mt-2 text-[15px] font-sans text-gray-500">
                <Link to={"/dashboard/manageUsers"}>
                  {" "}
                  <FaUserEdit width={16} height={16} />
                  Manage Users
                </Link>
              </li>
            )}
            {userData?.role == "master" && (
              <li className="mt-2 text-[15px] font-sans text-gray-500">
                <Link to={"/dashboard/priceList"}>
                  {" "}
                  <FaMoneyCheckAlt width={16} height={16} />
                  Update Price List
                </Link>
              </li>
            )}
            <li className="mt-2 text-[15px] font-sans text-gray-500">
              <Link to={"/dashboard/nidMake"}>
                <FaAddressCard width={16} height={16} />
                এনআইডি মেক
              </Link>
            </li>
            <li className="mt-2 text-[15px] font-sans text-gray-500">
              <Link to={"/dashboard/signCopy"}>
                {" "}
                <FaFilePen width={16} height={16} />
                সাইন কপি
              </Link>
            </li>
            <li className="mt-2 text-[15px] font-sans text-gray-500">
              <Link to={"/dashboard/nidCard"}>
                {" "}
                <FaRegAddressCard width={16} height={16} />
                এনআইডি কার্ড
              </Link>
            </li>
            <li className="mt-2 text-[15px] font-sans text-gray-500">
              <Link to={"/dashboard/servercopytonidmake"}>
                <FaRegAddressCard width={16} height={16} />
                সার্ভার কপি to এনআইডি মেক
              </Link>
            </li>
            <li className="mt-2 text-[15px] font-sans text-gray-500">
              <Link to={"/dashboard/biometric"}>
                <FaFingerprint width={16} height={16} />
                বায়োমেট্রিক
              </Link>
            </li>
            <li className="mt-2 text-[15px] font-sans text-gray-500">
              <Link to={"/dashboard/locationTrack"}>
                <FaMapLocation width={16} height={16} />
                লোকেশন ট্র্যাক
              </Link>
            </li>
            <li className="mt-2 text-[15px] font-sans text-gray-500">
              <Link to={"/dashboard/servercopy"}>
                {" "}
                <FaRegAddressCard width={16} height={16} />
                সার্ভার কপি
              </Link>
            </li>
            <li className="mt-2 text-[15px] font-sans text-gray-500">
              <Link to={"/dashboard/calllistsim"}>
                <FaPhoneAlt width={16} height={16} />
                কল লিস্ট অল সিম
              </Link>
            </li>
            <li className="mt-2 text-[15px] font-sans text-gray-500">
              <Link to={"/dashboard/saftytika"}>
                <GiSyringe width={16} height={16} />
                সুরক্ষা টিকা
              </Link>
            </li>
            <li className="mt-2 text-[15px] font-sans text-gray-500">
              <Link to={"/dashboard/birthcertificateonline"}>
                <FaAddressCard width={16} height={16} />
                জন্ম নিবন্ধন (Online)
              </Link>
            </li>
            <li className="mt-2 text-[15px] font-sans text-gray-500">
              <Link to={"/dashboard/birthcertificateFix"}>
                <FaUserEdit width={16} height={16} />
                নিবন্ধন নাম কারেকশন
              </Link>
            </li>
            <li className="mt-2 text-[15px] font-sans text-gray-500">
              <Link to={"/dashboard/bikashinfo"}>
                {" "}
                <img src={bikashIcon} className="w-5 h-5" />
                বিকাশ ইনফো
              </Link>
            </li>
            <li className="mt-2 text-[15px] font-sans text-gray-500">
              <Link to={"/dashboard/nogodinfo"}>
                <img src={nogodIcon} className="w-5 h-5" />
                নগদ ইনফো
              </Link>
            </li>
            <li className="mt-2 text-[15px] font-sans text-gray-500">
              <Link to={"/dashboard/bikashpinreset"}>
                <MdLockReset width={16} height={16} />
                বিকাশ পিন রিসেট
              </Link>
            </li>
            <li className="mt-2 text-[15px] font-sans text-gray-500">
              <Link to={"/dashboard/nameaddress"}>
                <FaSearchengin width={16} height={16} />
                নাম ঠিকনা (হারানো আইডি)
              </Link>
            </li>
            <li className="mt-2 text-[15px] font-sans text-gray-500">
              <Link to={"/dashboard/filelist"}>
                <PiFilesFill width={16} height={16} />
                ফাইল লিস্ট
              </Link>
            </li>
            <li className="mt-2 text-[15px] font-sans text-gray-500">
              <Link to={"/dashboard/recharge"}>
                {" "}
                <IoMdCard width={16} height={16} />
                রিচার্জ
              </Link>
            </li>

            <li className="mt-2 text-[15px] font-sans text-gray-500">
              <a href={"https://wa.me/+880187654321"} target="_blank">
                <FaWhatsapp width={16} height={16} />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default DashboardLayout;
