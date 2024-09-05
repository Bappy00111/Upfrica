import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

export default function Details({ data }) {
  const { img, title, price } = data;

  return (
    <div className="border rounded-lg shadow-lg ">
      {/* Card Image Section */}
      <div className="relative">
        <img
          src={img}
          alt="Product"
          className="w-full h-50 object-cover rounded-lg"
        />

        {/* Heart Icon at the top-right */}
        <div className="absolute top-2 right-2 border p-2 rounded-full bg-slate-100">
          <FaHeart className=" h-6 w-6" />
        </div>

        {/* Sales Button at the bottom-left */}
        <div className="absolute bottom-2 left-2">
          <button className="bg-purple-500 text-white px-3 py-1 rounded-lg text-sm">
            Sales
          </button>
        </div>
      </div>

      <div className="p-8">
        {/* Title Section */}
        <div className="mt-4 ">
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        </div>

        {/* Horizontal Line */}
        <hr className="my-2" />

        {/* Price and Cart Icon */}
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-700">$ {price}</p>
          <span className="border-2 rounded"><AiOutlineShoppingCart className="h-6 w-6 text-purple-500 bg-slate-200 m-1" /></span>
        </div>
      </div>
    </div>
  );
}
