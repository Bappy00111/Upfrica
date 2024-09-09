import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className=" max-w-screen-2xl flex justify-center items-center mx-auto lg:p-10 p-4  min-h-screen">
      <div className="bg-white  container grid lg:grid-cols-2    py-10 lg:px-20 shadow-xl border rounded-md ">
        {/* Image Column */}
        <div className="col-span-1 order-2 lg:order-1 flex justify-center items-center p-2 lg:p-4">
          <img
            className=" h-80 sm:h-full"
            src="https://booking.webestica.com/assets/images/element/signin.svg"
            alt=""
          />
        </div>

        {/* Text Column */}
        <div className="col-span-1 order-1 lg:order-2 p-w lg:p-4">
          <div className="text-center space-y-4 px-4">
            {/* Logo */}
            <img
              className="h-10 lg:h-14 mx-auto"
              src="https://d26ukeum83vx3b.cloudfront.net/assets/upfrica-com-logo-dark-0200279f4edfa75fc643c477221cbe7ea4d4afdd5ac37ed8f22164659d2b0fb9.png"
              alt="Upfrica Logo"
            />

            {/* Heading */}
            <h2 className="text-xl  md:text-2xl lg:text-3xl font-bold">
              Log in to your account
            </h2>

            {/* Sign-up text */}
            <p className="text-base">
              Or{" "}
              <Link to="/singUp">
                <span className="text-purple-500 cursor-pointer">
                  sign up for an account
                </span>
              </Link>
            </p>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="block text-left text-xl font-medium text-[#85878A]">
                Enter email id
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Password Input */}
            <div className="relative w-full space-y-2">
              <label className="block text-left text-xl font-medium text-[#85878A]">
                Enter password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 cursor-pointer"
                >
                  {showPassword ? (
                    <FaEye className="text-xl" />
                  ) : (
                    <FaEyeSlash className="text-xl" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex justify-between items-center w-full ">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-[#A435F0] border-gray-300 rounded focus:ring-purple-500"
                />
                <label className="ml-2 block text-xl text-[#85878A]">
                  Remember me
                </label>
              </div>
              <div>
                <a
                  href="#"
                  className="text-xl text-purple-500 hover:text-purple-700"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Login Button */}
            <button className="w-full text-xl  px-4 py-2 bg-[#A435F0] text-white rounded-md font-bold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
              Log In
            </button>

            {/* Help Button */}
            <button className="w-full text-xl px-4 py-2 bg-gray-100  rounded-md font-bold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
              Help
            </button>

            {/* Copyright Text */}
            <p className="text-gray-500 text-sm mt-4 ">
              © 2024 Upfrica. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
