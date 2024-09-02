import React from "react";
import { FaCartPlus } from "react-icons/fa";

export default function SingelLightningSection({ data }) {
  const { image, id, title, productCode, newPrice, oldPrice } = data;
  return (
    <div className="bg-white shadow-2xl rounded-xl overflow-hidden">
      <div className="relative">
      <img
        className="h-80 w-80 rounded-t hover:scale-110 hover:-translate-y-5 transition-transform duration-500"
        src={image}
        alt=""
      />
      <button className="px-4 bg-red-500 text-white rounded-3xl py-1 tracking-wide absolute
       bottom-0 text-xl m-2">
        sales
      </button>
      </div>
      <div className="p-4 space-y-2 text-xl text-gray-600">
        <p className=" tracking-wide font-medium">{title}</p>
        <p className="text-purple-500 tracking-wide font-medium">
          {productCode} + sold recently
        </p>
        <hr />
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <p className="font-bold   py-1 tracking-wide text-xl">
              {" "}
              ${newPrice}
            </p>
            <p className="line-through   py-1 tracking-wide text-xl text-gray-500">
              ${oldPrice}
            </p>
          </div>
          <div className="p-2 bg-gray-200 rounded">
          <FaCartPlus className="h-6 w-6 text-purple-500 " />
          </div>
        </div>
      </div>
    </div>
  );
}
