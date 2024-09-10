import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

const CartProduct = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="h-screen lg:flex justify-center bg-gray-100 px-4">
      <div className="w-full lg:4/5 2xl:w-1/2 pt-10 space-y-5">
        <h1 className="text-xl xl:text-2xl font-bold tracking-wide p-2 border bg-white shadow-xl text-center">
          {" "}
          Shopping Basket
        </h1>
        <div className="hidden border p-8 bg-white md:flex justify-between space-x-4 text-base ">
          <img
            className="h-20 lg:h-32 w-20 lg:w-32 rounded-md"
            src="https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdzRJQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--14b21d649eedcfd40e47a050e6ac48702996e12b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQXZRQmFRTDBBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--0f68375eaf441ecd8b3a772d120bb6aff2c461ab/Screenshot%202024-08-31%20at%2013.44.26.png"
            alt=""
          />
          <p className="underline">
            Dell latitude 3380 core i3 6th generation 128gb ssd 4gb ram
          </p>
          <div>
            <div className="flex items-center text-base">
              {/* Minus Button */}
              <button
                onClick={() => setCount(count - 1)}
                className=" px-4  py-1   font-extrabold border bg-gray-100"
              >
                -
              </button>

              {/* Number Display */}
              <span className=" font-bold bg-white py-1  px-4 border">
                {count}
              </span>

              {/* Plus Button */}
              <button
                onClick={() => setCount(count + 1)}
                className=" px-4 border  py-1 font-extrabold bg-gray-100"
              >
                +
              </button>
            </div>
            <div className="text-center text-base ">
              <p className="font-bold">$159.54</p>
              <p>+$0</p>
            </div>
          </div>

          <div className="flex justify-center items-end ">
            <MdDeleteOutline className="w-8 h-8 text-gray-400-500" />
          </div>
        </div>
        <div className="md:hidden border p-4 bg-white  grid grid-cols-4 gap-2 ">
          <div className="col-span-1 ">
            <img
              className="h-20 w-20 rounded-md"
              src="https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdzRJQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--14b21d649eedcfd40e47a050e6ac48702996e12b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQXZRQmFRTDBBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--0f68375eaf441ecd8b3a772d120bb6aff2c461ab/Screenshot%202024-08-31%20at%2013.44.26.png"
              alt=""
            />
          </div>
          <div className="col-span-3">
            <p className="underline">
              Dell latitude 3380 core i3 6th generation 128gb ssd 4gb ram
            </p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center ">
                {/* Minus Button */}
                <button
                  onClick={() => setCount(count - 1)}
                  className=" px-2  py-1  text-base font-bold border bg-gray-100"
                >
                  -
                </button>

                {/* Number Display */}
                <span className="text-base font-bold bg-white py-1  px-2 border">
                  {count}
                </span>

                {/* Plus Button */}
                <button
                  onClick={() => setCount(count + 1)}
                  className=" px-2 border  py-1 text-base font-bold bg-gray-100"
                >
                  +
                </button>
              </div>
              <div className="text-center text-base ">
                <p className="">$159.54</p>
                <p>+$0</p>
              </div>
              <div className="flex justify-center items-end ">
                <MdDeleteOutline className="w-6 h-6 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
