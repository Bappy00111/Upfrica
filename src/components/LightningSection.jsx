import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import SingelLightningSection from "./SingelLightningSection";

export default function LightningSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://upfrica-staging.herokuapp.com/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="container px-4 py-20 bg-white shadow-2xl">
      <div className="flex gap-10 items-center ">
        <h1 className="text-xl md:text-2xl font-extrabold tracking-wide">
          Lightening Deals
        </h1>
        <IoIosArrowRoundForward className="h-14 w-14 pt-4 text-gray-700" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-6 gap-4">
        {products?.map((product) => (
          <SingelLightningSection
            key={product.id}
            product={product}
          ></SingelLightningSection>
        ))}
      </div>
    </div>
  );
}
