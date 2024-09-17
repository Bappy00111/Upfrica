import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";

const SingUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      password_confirmation: "",
      account_type: "Seller (Individual)",
      phone_number: "000000",
      city: "dhaka",
      country: "BD",
      terms_of_service: true,
    },
    onSubmit: async (values) => {
      // Form submit korle data pawa jabe
      console.log("Form data", values);
      try {
        const response = await fetch(
          "https://upfrica-staging.herokuapp.com/api/v1/users.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({user:values}), // Convert form data to JSON string
          }
        );

        const data = await response.text(); // Parse JSON response from server
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
        if (response.ok) {
          console.log(data);
          
          // If request is successful
          // setMessage('Signup successful!');
        } else {
          // If request fails, display error message
          // setMessage(data.message || 'Signup failed. Please try again.');
        }
      } catch (error) {
        // Handle network or other errors
        // setMessage('Error: ' + error.message);
      }
    },
  });
  return (
    <div className=" max-w-screen-2xl  mx-auto lg:p-10 p-4 flex justify-center items-center ">
      <div className="bg-white  container grid lg:grid-cols-2   lg:flex-col  py-10 lg:px-10 shadow-xl border rounded-md ">
        {/* Image Column */}
        <div className="col-span-1 order-2 lg:order-1  p-2 lg:p-4">
          <img
            className=" h-80 sm:h-full"
            src="https://booking.webestica.com/assets/images/element/signin.svg"
            alt=""
          />
        </div>

        {/* Text Column */}
        <div className="col-span-1 order-1 lg:order-2 p-w lg:p-4">
          <div className=" space-y-4 px-4">
            {/* Logo */}
            <img
              className="h-10 lg:h-14 mx-auto"
              src="https://d26ukeum83vx3b.cloudfront.net/assets/upfrica-com-logo-dark-0200279f4edfa75fc643c477221cbe7ea4d4afdd5ac37ed8f22164659d2b0fb9.png"
              alt="Upfrica Logo"
            />

            {/* Heading */}
            <h2 className="text-xl  md:text-3xl lg:text-4xl font-extrabold">
              Create new account
            </h2>

            {/* Sign-up text */}
            <p className="text-xl text-[#85878A] leading-8">
              Already a member?
              <Link to="/login">
                <span className="text-purple-500 cursor-pointer">
                  log in to your account
                </span>
                <br />
              </Link>
              Enter email address
            </p>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="block   text-left text-xl font-medium text-[#85878A]">
                  Enter email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              {/* Name Inpute  */}
              <div className="space-y-2">
                <label className="block   text-left text-xl font-medium text-[#85878A]">
                  Your name
                </label>
                <div className="relative w-full">
                  <div className="flex border border-gray-200 rounded-md">
                    {/* First Name Input */}
                    <div className="flex-1">
                      <label className="block text-left text-xl font-medium text-[#85878A] sr-only">
                        First Name
                      </label>
                      <input
                        id="fastName"
                        name="first_name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.first_name}
                        placeholder="First Name"
                        className="w-full px-4 py-2 border-none focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-l-md"
                      />
                    </div>

                    {/* Vertical Border */}
                    <div className="border-l border-gray-300"></div>

                    {/* Last Name Input */}
                    <div className="flex-1">
                      <label className="block text-left text-xl font-medium text-[#85878A] sr-only">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="last_name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.last_name}
                        placeholder="Last Name"
                        className="w-full px-4 py-2 border-none focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-r-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* display Name  */}
              <div className="space-y-2">
                <label className="block   text-left text-xl font-medium text-[#85878A]">
                  Username/Display name
                </label>
                <input
                  id="userName"
                  name="username"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  placeholder="This will show to public"
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
                    name="password"
                    type={showPassword ? "text" : "password"}
                    onChange={formik.handleChange}
                    value={formik.values.password}
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
              <div className="relative w-full space-y-2">
                <label className="block text-left text-xl font-medium text-[#85878A]">
                  Enter password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password_confirmation"
                    type={showPassword ? "text" : "password"}
                    onChange={formik.handleChange}
                    value={formik.values.password_confirmation}
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

              <div>
                <label className="ml-2 block text-xl text-[#85878A]">
                  (6 characters minimum)
                </label>
              </div>

              <div className="flex ">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-[#A435F0] border-gray-300 rounded focus:ring-purple-500 mt-1 lg:mt-2"
                />
                <label className="ml-2 block text-base lg:text-xl ">
                  I have read and agree to the{" "}
                  <span className="text-blue-400">Terms of Use</span> and{" "}
                  <span className="text-blue-400">Privacy</span>
                </label>
              </div>

              {/* singup Button */}
              <button
                type="submit"
                className="w-full text-xl  px-4 py-2 bg-[#A435F0] text-white rounded-md font-bold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Sing Up
              </button>

              {/* Help Button */}
              <button className="w-full text-xl px-4 py-2 bg-gray-100  rounded-md font-bold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
                Help
              </button>
            </form>

            {/* Copyright Text */}
            <p className="text-gray-500 text-base mt-4 text-center">
              © 2024 Upfrica. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
