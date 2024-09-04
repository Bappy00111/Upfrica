import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import Details from "./Details";
import { IoIosArrowDown, IoIosArrowDropdown, IoMdCheckmark } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const DetelsProduct = () => {
  const laptopDetails = [
    {
      Condition: "Renewed",
      Brand: "Dell",
      Type: "Laptops",
      ModelName: "Dell Latitude 3380",
      ScreenSizeInches: 13.3,
      HardDiskSizeGB: 128,
      CpuModelGHz: 2.0,
      RamMemoryGB: 4,
      OperatingSystem: "Windows 11",
      Series: "Core i3",
      Features: ["HDMI", "Bluetooth", "Camera", "WiFi Connection", "USB Ports"],
      UpfricaItemID: "JERB7PX8",
      ItemNumber: "0000003487",
    },
  ];

  return (
    <div className="grid grid-cols-2 container py-5 px-40">
      <div className="col-span-1">
        <img
          className="h-3/5 mx-auto"
          src="https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdzRJQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--14b21d649eedcfd40e47a050e6ac48702996e12b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2REdOdmJuWmxjblE2Q1hkbFluQT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--d4bbaf368280054512341b7f0b6f19697e0d7746/Screenshot%202024-08-31%20at%2013.44.26.png?scale.width=75"
          alt=""
        />
      </div>
      <div>
        <div className="col-span-1 font-medium space-y-2 tracking-wide">
          <p className="text-2xl ">
            Dell Latitude 3380 Core I3 6th Generation 128gb
          </p>
          <p className="text-2xl ">Ssd 4gb Ram</p>
          <button className="border py-2 px-4 hover:bg-purple-500 hover:text-white text-xl  text-purple-500 border-purple-500 rounded-xl">
            Write a Review{" "}
          </button>
          <p className="flex items-center space-x-2">
            <span className="font-extrabold">3785 sold </span>{" "}
            <span className="text-purple-500">Visit the </span>{" "}
            <span className="font-extrabold text-blue-700">Upfrica GH </span>
            <span className="text-purple-500  flex items-center">
              Shop{" "}
              <span className=" flex items-center text-2xl">
                {" "}
                <span>
                  <FaLocationPin className="mx-1 h-4 w-4 text-gray-500" />
                </span>{" "}
                accra, GH
              </span>
            </span>
          </p>
          <p>
            Price <span className="text-2xl font-extrabold">$159.77</span>each
          </p>
          <p className="text-gray-600">
            RRP{" "}
            <span className="line-through text-2xl font-normal"> $166.17</span>{" "}
            You Save: $6.39 (3%)
          </p>
          <p>
            <span className="text-white bg-red-600 px-3  rounded">Sales</span>{" "}
            <span className="text-red-600 text-base font-bold">
              ends in 26 days 06:01
            </span>
          </p>
          <p>
            <span className="text-xl font-bold">Collection:</span> Click &
            Collect - Select option at checkout
          </p>
        </div>
        <div className="font-medium tracking-wide mt-10 space-y-6">
          <p>
            <span
              className="font-extrabold text-xl p-2 bg-blue-50 rounded-lg
          "
            >
              Free Delivery for you within Accra
            </span>
          </p>
          <p>
            <span className="border p-2 font-bold border-blue-200 rounded">
              <span>Delivery date:</span>{" "}
              <span className="text-purple-500">08 Sep - 11 Sep</span> if
              ordered today
            </span>
          </p>
          <p className="text-xl text-gray-500">
            Get a $4.79 credit for late delivery
          </p>
          <button className="bg-yellow-400 w-2/3 py-1 rounded-2xl font-bold">
            Add to baseket
          </button>
          <hr className="w-2/3" />
        </div>
        <div className="p-4 space-y-4">
          {laptopDetails.map((details, index) => (
            <div key={index}>
              <div className="space-y-3">
                {Object.entries(details).map(([key, value]) => (
                  <div key={key} className="flex">
                    <div className="font-bold text-gray-700 w-1/3 text-right pr-2">
                      {key}
                    </div>
                    <div className="text-gray-700">:</div>
                    <div className="text-gray-900 w-2/3 pl-2">
                      {Array.isArray(value)
                        ? value.join(", ")
                        : value.toString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <hr className="w-2/3" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Shop with confidence</h2>
          <button className="flex items-center gap-2 text-green-400">
            <span>
              <IoIosArrowDropdown className="h-7 w-7" />
            </span>
            <span>Shopping Security</span>
            <span>
              <MdOutlineKeyboardArrowRight className="h-7 w-7" />
            </span>
          </button>
          <div className="w-2/3 grid grid-cols-2 gap-4 text-base font-medium tracking-wide">
            <p className="flex gap-2">
              <span><IoMdCheckmark className="h-6 w-6 font-bold" /></span> <span>Safe payments</span>
            </p>
            <p className="flex gap-2">
              <span><IoMdCheckmark className="h-6 w-6 font-bold" /></span> <span>Delivery or Collaction</span>
            </p>
            <p className="flex gap-2">
              <span><IoMdCheckmark className="h-6 w-6 font-bold" /></span> <span>Good quailty products</span>
            </p>
            <p className="flex gap-2">
              <span><IoMdCheckmark className="h-6 w-6 font-bold" /></span> <span>Secure privace</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetelsProduct;
