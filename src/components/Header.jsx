import React from "react";
import { BiUser } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdMenu, IoMdSearch } from "react-icons/io";
import NavSection from "./NavSection";

export default function Header() {
  return (
    <div className="bg-white shadow-2xl">
    
    <div className="lg:flex lg:gap-4 lg:justify-between py-1 shadow-2xl bg-white px-2">
      {/* Small & Medium Devices Layout */}
      <div className="lg:hidden flex justify-between items-center w-full">
        <img
          className="h-10 w-10 rounded-full"
          src="https://d26ukeum83vx3b.cloudfront.net/assets/upfrica-com-logo-dark_170x-94d438d62a4c6b2c2c70fe1084c008f4584357ed2847dac5fc38818a0de6459d.webp"
        />
        <button className="px-4 py-1 bg-purple-500 text-white rounded-md">
          Sell
        </button>
        <div className="flex gap-4">
          <BiUser className="h-6 w-6 text-purple-500" />
          <IoMdMenu className="h-6 w-6 text-purple-500" />
        </div>
      </div>

      {/* Large Devices Layout */}
      <div className="hidden lg:flex lg:w-full lg:gap-4 items-center">
        {/* Profile Image */}
        <div className="lg:w-1/6 flex justify-start">
          <img
            className="h-10 w-26"
            src="https://d26ukeum83vx3b.cloudfront.net/assets/upfrica-com-logo-dark_170x-94d438d62a4c6b2c2c70fe1084c008f4584357ed2847dac5fc38818a0de6459d.webp"
            alt="Profile"
          />
        </div>

        {/* Search Section */}
        <div className="lg:w-3/4 flex items-center border justify-between rounded-xl py-4 px-2">
          <input
            className="w-full focus:outline-none ps-3"
            type="text"
            placeholder="Search Upfrica BD"
          />
          <IoMdSearch className="h-8 w-8 text-purple-500" />
        </div>

        {/* WhatsApp Section */}
        <div className="lg:w-1/6 flex items-center justify-center bg-gray-100 p-4">
          <FaWhatsapp className="h-6 w-6 text-green-400" />
          <p className="text-purple-500 tracking-wide text-base ">Join the WhatsApp Group</p>
        </div>

        {/* Sell Button */}
        <div className="lg:w-1/6 flex items-center justify-center">
          <div className="border border-gray-500 rounded-md">
            <p className="font-bold text-purple-500 px-4 py-1 tracking-wide text-xl">Sell</p>
          </div>
        </div>

        {/* User Section */}
        <div className="lg:w-1/6 flex items-center justify-end gap-4 text-xl">
          <BiUser className="h-6 w-6 text-purple-500" />
          <div className="flex gap-2 tracking-wide items-center">
            <h2>
              <span className="font-bold">Hello </span>
              <span className="text-purple-500">Sign in |</span> 
            </h2>
            <button className="px-4 py-1 bg-purple-500 text-white rounded h-10">
              Join
            </button>
          </div>
        </div>
      </div>
      
    </div>
    <hr />
    <NavSection/>
    <hr />
    </div>
  );
}
