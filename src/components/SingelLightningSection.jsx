import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SingelLightningSection({ data }) {
  const { image, id, title, productCode, newPrice, oldPrice } = data;
  return (
    <div className="bg-white shadow-2xl rounded-xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
      <div className="relative">
        {/* Image with Hover Effect */}
        <Link to="/detelsProduct">
          <img
            className="w-full h-60 xl:h-80 bg-center rounded-t-lg hover:scale-110 hover:-translate-y-2 transition-transform duration-500 ease-in-out"
            src={image}
            alt={title}
          />
        </Link>
        {/* Sales Badge with Subtle Shadow */}
        <button className="px-4 bg-red-500 text-white rounded-full py-1 tracking-wide absolute bottom-2 left-2 text-xl shadow-lg hover:bg-red-600 transition-colors duration-300">
          Sales
        </button>
      </div>

      {/* Product Information */}
      <div className="p-4 space-y-2 text-base text-gray-600">
        {/* Product Title */}
        <p className="tracking-wide font-semibold text-lg md:text-xl text-gray-800">
          {title}
        </p>

        {/* Product Code and Sold Info */}
        <p className="text-purple-500 tracking-wide font-medium">
          {productCode} + sold recently
        </p>

        {/* Horizontal Divider */}
        <hr className="border-gray-300" />

        {/* Pricing Section with Discounted and Old Price */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {/* New Price */}
            <p className="font-bold py-1 tracking-wide text-xl text-green-600">
              ${newPrice}
            </p>
            {/* Old Price with Line-through */}
            <p className="line-through py-1 tracking-wide text-gray-500 text-lg">
              ${oldPrice}
            </p>
          </div>
          {/* Add to Cart Button with Icon */}
          <div className="p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-300 transition-colors duration-300">
            <FaCartPlus className="h-6 w-6 text-purple-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
