import React from "react";
import logo from "../assets/logo.svg";
import { TiKeyboard } from "react-icons/ti";
import { FaCrown, FaInfo, FaRegUser, FaKeyboard } from "react-icons/fa";
import { IoMdSettings, IoIosNotifications } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
export const Navbar = () => {
  return (
    <nav className="flex justify-evenly items-center p-6 text-white px-5">
      <div className="flex justify-between space-x-4 items-center">
        <div className="logo flex">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <div className="text-xl font-bold px-1 text-orange-400">
            monkeytype
          </div>
        </div>
        <FaKeyboard />
        <FaCrown />
        <FaInfo />
        <IoMdSettings />
      </div>
      <div className="flex justify-between space-x-2 items-center ">
        <IoIosNotifications />
        <FaRegUser />
      </div>
    </nav>
  );
};
