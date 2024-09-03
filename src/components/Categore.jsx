import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import CategoreProduct from "./CategoreProduct";

export default function Categore() {
  return (
    <div className="pt-32 shadow-xl  pb-4 ">
      <div className="container ">
        <div className="flex gap-10 items-center ">
          <h1 className="text-3xl font-extrabold tracking-wide">Shop by Category</h1>
          <IoIosArrowRoundForward className="h-14 w-14 pt-4 text-gray-700" />
        </div>
        <CategoreProduct />
      </div>
    </div>
  );
}
