import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import CategoreProduct from "./CategoreProduct";

export default function Categore() {
  return (
    <div className="py-10 shadow 2xl:shadow-xl  pb-2 lg:px-10 px-2">
      <div className="container ">
        <div className="flex gap-4 md:gap-10 items-center ">
          <h1 className="text-xl md:text-2xl font-extrabold tracking-wide">Shop by Category</h1>
          <IoIosArrowRoundForward className="h-14 w-14 pt-4 text-gray-700" />
        </div>
        <CategoreProduct />
      </div>
    </div>
  );
}
