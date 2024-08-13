import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import auth from "../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState(null);
  // const [reFetch, setReFetch] = useState(false);

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
    <div className="flex justify-between items-center  w-[100%] bg-gray-100  px-5 py-1 shadow-md">
      <div>
        <label htmlFor="my-drawer-2" className=" cursor-pointer lg:hidden">
          <FaBars className="w-10 h-10 text-blue-700" width={16} height={16} />
        </label>
      </div>

      <div className="dropdown dropdown-left">
        <div className="flex items-center gap-4">
          <p className="text-xl font-bold p-3 text-white bg-blue-500 rounded-lg ">
            {userData?.amount}
          </p>
          <div tabIndex={0} role="button" className="avatar">
            <div className="w-16 h-16">
              <img
                className=" shadow-md rounded-full"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </div>
       
        <ul
          tabIndex={0}
          className="dropdown-content menu text-white rounded-[10px]  w-40 p-2 bg-gray-800 fixed left-[6px] mt-[70px]  shadow z-10"
        >
          <li>
            <a>Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li onClick={() => signOut(auth)}>
            <Link to={"/"}>Log Out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
