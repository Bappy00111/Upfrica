import React from "react";

const DashBoard = () => {
  const data = [
    { title: "Total Revenue", price: "$500,000" },
    { title: "Revenue Last 12mo", price: "$120,000" },
    { title: "Last Month's Revenue", price: "$10,000" },
    { title: "This Month's Revenue To Date", price: "$8,000" },
    { title: "Users", price: "15,000" },
    { title: "Active Subscriptions", price: "1,200" },
  ];

  return (
    <div className="w-full bg-white shadow-md border p-10 rounded-md pb-2 space-y-4">
      <div className="">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        {/* dashbord  */}
      </div>
      <hr />
      <div className="">
        {data.map((item) => (
         <div className="text-center py-10 bg-white shadow-md mt-10 rounded-md border">
          <p className="text-2xl font-bold">{item.title}</p>
          <p className="text-base">{item.price
            }</p>
         </div>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
