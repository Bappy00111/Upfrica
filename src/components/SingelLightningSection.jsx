import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SingelLightningSection({ data }) {
  const { image, id, title, productCode, newPrice, oldPrice } = data;
  return (
    <div className="bg-white shadow-2xl rounded-xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
      <div className="relative">
        <Link to="/detels">
          <img
            className="w-full h-60 lg:h-80 object-cover rounded-t-lg hover:scale-110 hover:-translate-y-2 transition-transform duration-500 ease-in-out"
            src={image}
            alt={title}
          />
        </Link>
        <button className="px-4 bg-red-500 text-white rounded-full py-1 tracking-wide absolute bottom-2 left-2 text-xl">
          Sales
        </button>
      </div>
      <div className="p-4 space-y-2 text-base text-gray-600">
        <p className="tracking-wide font-semibold">{title}</p>
        <p className="text-purple-500 tracking-wide font-medium">
          {productCode} + sold recently
        </p>
        <hr />
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <p className="font-bold py-1 tracking-wide md:text-xl">${newPrice}</p>
            <p className="line-through py-1 tracking-wide md:text-xl text-gray-500">
              ${oldPrice}
            </p>
          </div>
          <div className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition-colors duration-300">
            <FaCartPlus className="h-6 w-6 text-purple-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
