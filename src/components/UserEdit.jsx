import React from "react";

const UserEdit = () => {
  return (
    <div className="w-full bg-white shadow-2xl p-10 rounded-md pb-2 space-y-4">
      <div className="">
        <h2 className="text-2xl font-bold">Edit User timtooni</h2>
      </div>
      <hr />
      <form className="space-y-5 w-1/2 px-10">
        {/* full name */}
        <div className="flex items-center justify-start w-full ">
          <label
            className="text-gray-700 w-1/6 text-left pr-4 text-xl font-bold"
            htmlFor="username"
          >
            Full name:
          </label>
          <input
            className="w-3/4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="username"
            placeholder="Enter your full name"
          />
        </div>
        {/* user Name  */}
        <div className="flex items-center justify-start w-full ">
          <label
            className="text-gray-700 w-1/6 text-left pr-4 text-xl font-bold"
            htmlFor="username"
          >
            Username:
          </label>
          <input
            className="w-3/4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="username"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div className="flex items-center justify-start w-full">
          <label className="text-gray-700 w-1/6 text-left pr-4 text-xl" htmlFor="email">
            Email:
          </label>
          <input
            className="w-3/4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="flex items-center justify-start w-full">
          <label
            className="text-gray-700 w-1/6 text-left pr-4"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="w-3/4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
      </form>
    </div>
  );
};

export default UserEdit;
