import React from "react";
import { BiUser } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import NavSection from "./NavSection";

export default function Header() {
  return (
    <div className="">
      <div className="shadow-lg pt-3 bg-gray-100 pb-8">
      <div className="flex px-4 gap-4 justify-between py-1 shadow-2xl bg-white">
        <div>
          <img
            className="h-10 w-26"
            src="https://www.upfrica.com/assets/upfrica-com-logo-dark_170x-94d438d62a4c6b2c2c70fe1084c008f4584357ed2847dac5fc38818a0de6459d.webp"
            alt=""
          />
        </div>
        <div className="flex items-center border justify-between px-2 py-2 rounded-xl w-2/3 border-purple-500">
          <input
            className=" focus:border-none focus:outline-none ps-3"
            type="text"
            placeholder="Search Upfrica BD"
          />
          <IoMdSearch className="h-8 w-8 text-purple-500" />
        </div>
        <div className="flex items-center gap-1 bg-gray-100 px-2">
          <FaWhatsapp className="h-6 w-6 text-green-400" />
          <p className="text-purple-500">Join the WhatsApp Group</p>
        </div>
        <div className="flex items-center">
          <div className="border border-gray-500 rounded-md">
            <p className="font-bold text-purple-500 px-2 text-2xl ">Sell</p>
          </div>
        </div>
        <div className="flex gap-2">
          <BiUser className="h-10 w-10 text-purple-500" />
          <div className="flex gap-2">
            <h2 className="text-2xl">
              {" "}
              <span className="font-bold">Hellow </span>
              <span className="text-purple-500">Sing in</span> <span>|</span>
            </h2>
            <button className="px-4 py-1 bg-purple-500 text-white rounded h-10">
              Join
            </button>
          </div>
        </div>
      </div>
      <hr />
      <NavSection />
      <hr />
      </div>
    </div>
  );
}
