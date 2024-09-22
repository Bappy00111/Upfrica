import React from "react";
import { IoArrowBack } from "react-icons/io5";

const User = () => {
  const dashboardData = [
    { id: 1, name: "Dashboard", value: "dashboard" },
    { id: 2, name: "Announcements", value: "announcements" },
    { id: 3, name: "Users", value: "users" },
    { id: 4, name: "User Connected Accounts", value: "userConnectedAccounts" },
    { id: 5, name: "Accounts", value: "accounts" },
    { id: 6, name: "Account Users", value: "accountUsers" },
    { id: 7, name: "Plans", value: "plans" },
    { id: 8, name: "Pay Customers", value: "payCustomers" },
    { id: 9, name: "Pay Charges", value: "payCharges" },
    { id: 10, name: "Pay Payment Methods", value: "payPaymentMethods" },
    { id: 11, name: "Pay Subscriptions", value: "paySubscriptions" },
    { id: 12, name: "Ads", value: "ads" }, // Added Ads
  ];

  const data = [
    {
      id: 1,
      createdAt: "2023-09-01",
      fullName: "John Doe",
      username: "johndoe",
      country: "USA",
      email: "john@example.com",
      accounts: 3,
      connectedAccounts: 2,
    },
    {
      id: 2,
      createdAt: "2023-09-02",
      fullName: "Jane Smith",
      username: "janesmith",
      country: "Canada",
      email: "jane@example.com",
      accounts: 5,
      connectedAccounts: 3,
    },
    {
      id: 3,
      createdAt: "2023-09-03",
      fullName: "Alice Brown",
      username: "alicebrown",
      country: "UK",
      email: "alice@example.com",
      accounts: 2,
      connectedAccounts: 1,
    },
    {
      id: 4,
      createdAt: "2023-09-04",
      fullName: "Bob Johnson",
      username: "bobjohnson",
      country: "Australia",
      email: "bob@example.com",
      accounts: 4,
      connectedAccounts: 3,
    },
    {
      id: 5,
      createdAt: "2023-09-05",
      fullName: "Charlie Davis",
      username: "charliedavis",
      country: "Germany",
      email: "charlie@example.com",
      accounts: 6,
      connectedAccounts: 4,
    },
    {
      id: 6,
      createdAt: "2023-09-06",
      fullName: "David Evans",
      username: "davidevans",
      country: "France",
      email: "david@example.com",
      accounts: 2,
      connectedAccounts: 1,
    },
    {
      id: 7,
      createdAt: "2023-09-07",
      fullName: "Emma Wilson",
      username: "emmawilson",
      country: "Italy",
      email: "emma@example.com",
      accounts: 3,
      connectedAccounts: 2,
    },
    {
      id: 8,
      createdAt: "2023-09-08",
      fullName: "Frank Thomas",
      username: "frankthomas",
      country: "Spain",
      email: "frank@example.com",
      accounts: 5,
      connectedAccounts: 3,
    },
    {
      id: 9,
      createdAt: "2023-09-09",
      fullName: "Grace White",
      username: "gracewhite",
      country: "Japan",
      email: "grace@example.com",
      accounts: 4,
      connectedAccounts: 2,
    },
    {
      id: 10,
      createdAt: "2023-09-10",
      fullName: "Hank Miller",
      username: "hankmiller",
      country: "India",
      email: "hank@example.com",
      accounts: 3,
      connectedAccounts: 1,
    },
  ];

  console.log(data);

  return (
    <div className="container flex mt-10 gap-5">
      <div className="w-40 text-base space-y-8 cursor-pointer">
        <h2 className="flex items-center gap-2">
          <IoArrowBack />
          Back to App
        </h2>
        <hr />
        <div className="space-y-6">
          {dashboardData.map((data) => (
            <p className="">{data.name}</p>
          ))}
        </div>
      </div>
      <div className="w-full bg-white shadow-2xl p-10 rounded-md pb-2 space-y-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Users</h2>
          <div className="flex gap-4">
            <div className="max-w-md mx-auto border rounded-md">
              <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden -2">
                <div className="grid place-items-center h-full w-12 text-gray-300 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <input
                  className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 border-none"
                  type="text"
                  id="searc "
                  placeholder="Search something.."
                />
              </div>
            </div>
            <button className="text-white font-bold bg-[#1976D2] px-6 py-2 rounded-md">
              New user
            </button>
          </div>
        </div>
        <hr />
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white">
            <thead>
              <tr class="bg-gray-100">
                <th class="text-left py-2 px-4 ">id</th>
                <th class="text-left py-2 px-4 ">Created At</th>
                <th class="text-left py-2 px-4 ">Full name</th>
                <th class="text-left py-2 px-4 ">Username</th>
                <th class="text-left py-2 px-4 ">Country</th>
                <th class="text-left py-2 px-4 ">Email</th>
                <th class="text-left py-2 px-4 ">Accounts</th>
                <th class="text-left py-2 px-4 ">Connected Accounts</th>
                <th class="text-left py-2 px-4 "></th>
                <th class="text-left py-2 px-4 "></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr  style={{ marginBottom: '10px' }} className="py-2 px-4" key={item.id}>
                  <td className="py-2 px-4 pb-6">{item.id}</td>
                  <td className="py-2 px-4 ">{item.createdAt}</td>
                  <td className="py-2 px-4">{item.fullName}</td>
                  <td className="py-2 px-4">{item.username}</td>
                  <td className="py-2 px-4">{item.country}</td>
                  <td className="py-2 px-4">{item.email}</td>
                  <td className="py-2 px-4">{item.accounts} account</td>
                  <td className="py-2 px-4">
                    {item.connectedAccounts} connected Accounts
                  </td>
                  <td className="py-2 px-4">Edit</td>
                  <td className="py-2 px-4 text-red-500">Destory</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
