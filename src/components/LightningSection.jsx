import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import SingelLightningSection from "./SingelLightningSection";

export default function LightningSection() {
  const datas = [
    {
      id: 1,
      title: "Dell latitude 338..",
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdzRJQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--14b21d649eedcfd40e47a050e6ac48702996e12b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQXZRQmFRTDBBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--0f68375eaf441ecd8b3a772d120bb6aff2c461ab/Screenshot%202024-08-31%20at%2013.44.26.png",
      productCode: "P101",
      newPrice: 1500,
      oldPrice: 2000,
    },
    {
      id: 2,
      title: "Hot plate double ...",
      image: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcjU1IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6ad3e421dc1173c8c64363ae4e3792d40b24d7d0/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQXZRQmFRTDBBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--0f68375eaf441ecd8b3a772d120bb6aff2c461ab/Screenshot%202023-09-30%20at%2015.42.54.png",
      productCode: "P102",
      newPrice: 1200,
      oldPrice: 1800,
    },
    {
      id: 3,
      title: "Samsung galaxy sc...",
      image: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBME1HQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c2589750a13505338aef72b7c53182cd70c0ae51/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQXZRQmFRTDBBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--0f68375eaf441ecd8b3a772d120bb6aff2c461ab/Screenshot%202024-08-23%20at%2008.18.28.png",
      productCode: "P103",
      newPrice: 800,
      oldPrice: 1200,
    },
    {
      id: 4,
      title: "Lenovo yoga 11e i...",
      image: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWZzIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--364d7db8f1ede59593008a31995065bf1091c871/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lKYW5CbFp3WTZCa1ZVT2hOeVpYTnBlbVZmZEc5ZlptbHNiRnNIYVFMMEFXa0M5QUU2REdOdmJuWmxjblE2Q1hkbFluQT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--29660478de3e7db46108b4d681e7f0be8b9f3f86/upfrica-laptop.jpeg",
      productCode: "P104",
      newPrice: 2500,
      oldPrice: 3000,
    },
    {
      id: 5,
      title: "Potato slicer mac...",
      image: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBanJrIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c96293b4fb9e80c000ad73d368c07b96948a42b2/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lKYW5CbFp3WTZCa1ZVT2hOeVpYTnBlbVZmZEc5ZlptbHNiRnNIYVFMMEFXa0M5QUU2REdOdmJuWmxjblE2Q1hkbFluQT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--29660478de3e7db46108b4d681e7f0be8b9f3f86/ddsss.jpeg",
      productCode: "P105",
      newPrice: 1000,
      oldPrice: 1500,
    },
  ];

  //   console.log(data);
  return (
    <div className="container px-4 py-20 bg-white shadow-2xl mt-2">
      <div className="flex gap-10 items-center ">
        <h1 className="text-3xl font-extrabold tracking-wide">Lightening Deals</h1>
        <IoIosArrowRoundForward className="h-14 w-14 pt-4 text-gray-700" />
      </div>
      <div className="flex gap-5">
        {
            datas.map(data => <SingelLightningSection key={data.id} data={data}></SingelLightningSection> )
        }
      </div>
    </div>
  );
}
