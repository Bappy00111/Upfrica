import React from "react";
import { Link } from "react-router-dom";

export default function NavSection() {
  const datas = [
    { title: "Home", id: 1 },
    { title: "Browse", id: 2 },
    { title: "Deals", id: 3 },
    { title: "Shops", id: 4 },
    { title: "Categories", id: 5 },
    { title: "How It Works", id: 6 },
    { title: "Uk Site", id: 7 },
  ];
  return (
    <div
      className=" hidden lg:flex  justify-center py-4 bg-white"
    >
      <ul className="text-base font-bold  flex gap-6 tracking-wide text-gray-600 ">
        {datas.map((data) => (
          <Link to={`/drafPage/${datas.id}`} key={data.id}>
            <li className="hover:text-purple-500" >
              {data.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
