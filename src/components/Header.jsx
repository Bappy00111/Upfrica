import React, { useState } from "react";
import { BiLogOut, BiUser } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCart, IoMdMenu, IoMdPerson, IoMdSearch } from "react-icons/io";
import NavSection from "./NavSection";
import { Link } from "react-router-dom";
import { MdHelp, MdSettings } from "react-icons/md";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="bg-white shadow-2xl">
      <div className="xl:flex lg:gap-4 lg:justify-between py-1 shadow-2xl bg-white px-2">
        {/* Small & Medium Devices Layout */}
        <div className="xl:hidden flex flex-col w-full">
          <div className="flex justify-between items-center w-full">
            <Link to="/">
              {" "}
              <img
                className="h-8 w-24"
                src="https://d26ukeum83vx3b.cloudfront.net/assets/upfrica-com-logo-dark_170x-94d438d62a4c6b2c2c70fe1084c008f4584357ed2847dac5fc38818a0de6459d.webp"
                alt="Profile"
              />
            </Link>
            <Link>
              {" "}
              <button className="px-2 py-1 bg-purple-500 text-white rounded-md">
                Sell
              </button>
            </Link>
            <div className="flex gap-4">
              <BiUser className="h-6 w-6 text-purple-500" />
              <IoMdMenu className="h-6 w-6 text-purple-500" />
            </div>
          </div>

          {/* Full Width Search Section */}
          <div className="mt-4 w-full flex items-center border rounded-xl py-2 px-2">
            <input
              className="w-full border-none focus:outline-none focus:ring-0 ps-3"
              type="text"
              placeholder="Search Upfrica BD"
            />
            <IoMdSearch className="h-8 w-8 text-purple-500" />
          </div>

          {/* Full Width WhatsApp Section */}
          <div className="mt-2 w-full flex items-center justify-center bg-gray-100 p-4">
            <FaWhatsapp className="h-6 w-6 text-green-400" />
            <p className="text-purple-500 tracking-wide text-base ">
              Join the WhatsApp Group
            </p>
          </div>
        </div>

        {/* Large Devices Layout */}
        <div className="hidden xl:flex lg:w-full lg:gap-4 items-center">
          {/* Profile Image */}
            <div className="lg:w-1/6 flex justify-start">
          <Link to='/'>
              <img
                className="h-10 w-26"
                src="https://d26ukeum83vx3b.cloudfront.net/assets/upfrica-com-logo-dark_170x-94d438d62a4c6b2c2c70fe1084c008f4584357ed2847dac5fc38818a0de6459d.webp"
                alt="Profile"
              />
          </Link>
            </div>

          {/* Search Section */}
          <div className="lg:w-2/4 flex items-center border rounded-xl py-1 px-2 group">
            <input
              className="w-full border-none focus:outline-none ps-3"
              type="text"
              placeholder="Search Upfrica BD"
            />
            <IoMdSearch className="h-8 w-8 text-purple-500" />
          </div>

          {/* WhatsApp Section */}
          <div className="xl:w-2/6 flex items-center justify-center bg-gray-100 p-2 rounded-md">
            <FaWhatsapp className="h-6 w-6 text-green-400" />
            <p className="text-purple-500 tracking-wide text-base ">
              Join the WhatsApp Group
            </p>
          </div>

          {/* Sell Button */}
          <div className=" flex items-center justify-center">
            <div className="border border-gray-500 rounded-md ">
              <Link to="/addNewProducts">
                {" "}
                <p className="font-bold text-purple-500 px-4 tracking-wide text-xl py-1">
                  Sell
                </p>
              </Link>
            </div>
          </div>

          {/* User Section */}
          <div className="xl:w-2/6 flex items-center justify-end gap-4 text-base cursor-pointer">
            <BiUser className="h-6 w-6 text-purple-500" onClick={toggleModal} />
            <div className="flex gap-2 tracking-wide items-center cursor-pointer">
              <h2>
                <span className="font-bold">Hello </span>
                <Link to="/login">
                  <span className="text-purple-500">Sign in |</span>
                </Link>
              </h2>
              <Link>
                <button className="px-4 py-1 bg-purple-500 text-white rounded text-xl font-bold">
                  Join
                </button>
              </Link>
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed  r bg-black  right-0 top-0 z-30 mt-16">
              <div className="bg-white w-80 p-4  shadow-lg">
                {/* User Info */}
                <div className="flex items-center">
                  <BiUser className="h-8 w-8 text-purple-500" />
                  <span className="ml-2 font-bold">user@example.com</span>
                </div>
                <hr className="my-2" />

                {/* Menu Items */}
                <div className="flex flex-col">
                  <div className="flex items-center py-2 cursor-pointer ">
                    <IoMdPerson className="h-5 w-5 text-gray-500" />
                    <span className="ml-2">My Profile</span>
                  </div>
                  <div className="flex items-center py-2 cursor-pointer">
                    <IoMdCart className="h-5 w-5 text-gray-500" />
                    <span className="ml-2">Purchases History</span>
                  </div>
                  <div className="flex items-center py-2 cursor-pointer">
                    <IoMdCart className="h-5 w-5 text-gray-500" />
                    <span className="ml-2">Sales History</span>
                  </div>
                  <div className="flex items-center py-2 cursor-pointer">
                    <IoMdCart className="h-5 w-5 text-gray-500" />
                    <span className="ml-2">My Saved Items</span>
                  </div>
                  <div className="flex items-center py-2 cursor-pointer">
                    <MdSettings className="h-5 w-5 text-gray-500" />
                    <span className="ml-2">Profile Settings</span>
                  </div>
                  <div className="flex items-center py-2 cursor-pointer">
                    <MdHelp className="h-5 w-5 text-gray-500" />
                    <span className="ml-2">Help Center</span>
                  </div>
                  <div className="flex items-center py-2 cursor-pointer">
                    <IoMdCart className="h-5 w-5 text-gray-500" />
                    <span className="ml-2">All Orders</span>
                  </div>
                  <Link to="drafPage">
                    <div className="flex items-center py-2 cursor-pointer">
                      <IoMdCart className="h-5 w-5 text-gray-500" />
                      <span className="ml-2">Draft</span>
                    </div>
                  </Link>
                  <Link to="/user">
                    <div className="flex items-center py-2 cursor-pointer">
                      <IoMdCart className="h-5 w-5 text-gray-500" />
                      <span className="ml-2">users</span>
                    </div>
                  </Link>
                  <div className="flex items-center py-2 cursor-pointer">
                    <IoMdCart className="h-5 w-5 text-gray-500" />
                    <span className="ml-2">Price Updated</span>
                  </div>
                </div>
                <hr className="my-2" />

                {/* Sign Out */}
                <div
                  className="flex items-center py-2 cursor-pointer"
                  onClick={() => alert("Signed out!")}
                >
                  <BiLogOut className="h-5 w-5 text-red-500" />
                  <span className="ml-2 text-red-500">Sign Out</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr />
      <NavSection />
      <hr />
    </div>
  );
}
