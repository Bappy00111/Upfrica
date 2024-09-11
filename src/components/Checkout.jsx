import React, { useState } from "react";

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import Footer from "./Footer";

const Checkout = () => {
  const [country, setCountry] = useState("Bangladesh");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox state change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <div className="bg-black text-white text-center text-xl lg:text-2xl font-bold py-2">
        <h1> Secure checkout</h1>
      </div>

      <div className="shadow-md bg-white py-4 px-2">
        <div className="bord md:w-2/3 lg:w-3/5 space-y-2">
          <h2 className="text-xl lg:text-2xl font-bold tracking-wide">
            *Billing country
          </h2>
          <div>
            <CountryDropdown
              className="border border-purple-500 focus:outline-none focus:ring focus:border-blue-500 px-2 py-2 rounded-md w-full"
              value={country}
              onChange={(val) => setCountry(val)}
            />
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 py-8 px-2">
        <div className="bord md:w-2/3 lg:w-3/5 space-y-2 bg-white shadow-md p-4 lg:p-8 rounded-md">
          <h2 className="text-xl text-center lg:text-2xl font-bold tracking-wide">
            Deliver to
          </h2>
          <div className="space-y-3">
            <p className="text-base font-bold tracking-wide text-[#3c4858]">
              Your item will be delivered to this default location. Please make
              sure the details are correct.
            </p>
            <CountryDropdown
              className="border border-purple-500 focus:outline-none focus:ring focus:border-blue-500 px-2 py-2 rounded-md w-full"
              value={country}
              onChange={(val) => setCountry(val)}
            />
            <div className="">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <p className="text-xl text-[#3c4858]">
                  Add a new address <br />{" "}
                </p>
                <span className="ml-2 text-base text-gray-500">
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}{" "}
                  {/* Icon changes on open/close */}
                </span>
              </div>
              <span className="text-blue-500">Edit</span>

              {/* Dropdown form */}
              {isOpen && (
                <div className="mt-4  text-xl">
                  <form className="space-y-4">
                    <div>
                      <div className="space-y-3">
                        <p className="flex gap-2 items-center">
                          <span>Set as default</span>
                          <span>
                            <input type="checkbox" name="" id="" />
                          </span>
                        </p>
                        <p>*The field can't be blank</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="block  font-medium ">
                        *Full name (First and Last name)
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Full name (First and Last name)"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block  font-medium ">
                        *Phone number to contact you if required
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Phone number to contact you if required"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block  font-medium ">*Country</label>
                      <div>
                        <CountryDropdown
                          className="border  focus:outline-none focus:ring focus:border-blue-500 px-2 py-2 rounded-md w-full"
                          value={country}
                          onChange={(val) => setCountry(val)}
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="block  font-medium ">
                        *Address line 1 (or Company name)
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Address line 1 (or Company name)"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block  font-medium ">
                        Address line 2 (optional)
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Address line 2 (optional)"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block  font-medium ">
                        Postcode / GP GPS (optional)
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Postcode / GP GPS (optional)"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block  font-medium ">Local area</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Local area"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block  font-medium ">*Town/City</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="*Town/City"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block  font-medium ">
                        Do we need additional instructions to find this address?
                      </label>
                      <textarea
                        type="text"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <p>Weekend delivery: I can receive packages on:</p>
                      <div className="flex justify-between py-2">
                        <p>
                          <span>
                            <input type="checkbox" name="" id="" />
                          </span>{" "}
                          <span className="text-xl font-bold"> Saturdays</span>
                        </p>
                        <p>
                          <span>
                            <input type="checkbox" name="" id="" />
                          </span>{" "}
                          <span className="text-xl font-bold"> sunday</span>
                        </p>
                      </div>
                    </div>

                    {/* Add more fields as needed */}
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* order cart  */}
        <div className="bord md:w-2/3 lg:w-3/5 space-y-2 bg-white shadow-md p-4 lg:p-8 rounded-md mt-4">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">3 Items</h2>
          </div>
          <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
            <div className="md:w-4/12 2xl:w-1/4 w-full">
              <img
                src="https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcy85IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4cea9505cd1b70cfa6d996849e74175887521743/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwYldsRCIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e8b3d06437b9f2f3a314148391436da5f50a9233/Screenshot%202024-07-29%20at%2022.43.44.png"
                alt="Black Leather Purse"
                className="h-full object-center  md:block hidden object-cover"
              />
              <img
                src="https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcy85IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4cea9505cd1b70cfa6d996849e74175887521743/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwYldsRCIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e8b3d06437b9f2f3a314148391436da5f50a9233/Screenshot%202024-07-29%20at%2022.43.44.png"
                alt="Black Leather Purse"
                className="md:hidden w-full h-full object-center object-cover"
              />
            </div>
            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
              <div className="flex items-center justify-between w-full">
                <p className="text-xl font-black leading-none text-gray-800">
                  Luxe card holder
                </p>
                <select
                  aria-label="Select quantity"
                  className="py-2 -1 border border-gray-200 mr-6 focus:outline-none"
                >
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
              </div>
              <p className="text-base leading-3 text-gray-600 pt-2">
                Height: 10 inches
              </p>
              <p className="text-base leading-3 text-gray-600 py-4">
                Color: Black
              </p>

              <div className="flex items-center justify-between pt-5">
                <div className="flex itemms-center">
                  <p className="text-base leading-3 underline text-gray-800 cursor-pointer">
                    Add to favorites
                  </p>
                  <p className="text-base leading-3 underline text-red-500 pl-5 cursor-pointer">
                    Remove
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img
                  src="https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBLzBGQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--b3d4e44a482cd6b213d37b3b1d2d3c37e3b18ba8/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwYldsRCIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e8b3d06437b9f2f3a314148391436da5f50a9233/Screenshot%202024-08-21%20at%2013.37.06.png"
                  alt="Black Leather Purse"
                  className="h-full object-center  md:block hidden object-cover"
                />
                <img
                  src="https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBLzBGQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--b3d4e44a482cd6b213d37b3b1d2d3c37e3b18ba8/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwYldsRCIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e8b3d06437b9f2f3a314148391436da5f50a9233/Screenshot%202024-08-21%20at%2013.37.06.png"
                  alt="Black Leather Purse"
                  className="md:hidden w-full h-full object-center  object-cover"
                />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <div className="flex items-center justify-between w-full">
                  <p className="text-xl font-black leading-none text-gray-800">
                    Luxe card holder
                  </p>
                  <select
                    aria-label="Select quantity"
                    className="py-2  border border-gray-200 mr-6 focus:outline-none"
                  >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p className="text-base leading-3 text-gray-600 pt-2">
                  Height: 10 inches
                </p>
                <p className="text-base leading-3 text-gray-600 py-4">
                  Color: Black
                </p>

                <div className="flex items-center justify-between pt-5">
                  <div className="flex itemms-center">
                    <p className="text-base leading-3 underline text-gray-800 cursor-pointer">
                      Add to favorites
                    </p>
                    <p className="text-base leading-3 underline text-red-500 pl-5 cursor-pointer">
                      Remove
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 hover:bg-green-50 p-4 rounded-md">
              <label className="flex gap-5 text-xl font-bold">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500"
                  defaultChecked
                />
                <div>
                  <p>Pay before delivery</p>
                  <p>
                    Estimated delivery:
                    <span className="text-purple-500"> 01 Oct - 04 Oct</span>
                  </p>
                </div>
              </label>
              <label className="flex gap-5 text-xl font-bold">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500"
                  defaultChecked
                  checked={isChecked} // Checkbox is controlled by state
                  onChange={handleCheckboxChange} // Toggles state on change
                />
                <div className="space-y-2">
                  <p> Pay on collection</p>
                  <p className="text-gray-700">
                    Collection date:{" "}
                    <span className="text-purple-500"> 01 Oct - 04 Oct</span>
                  </p>
                  <p>
                    The item will be reserved until{" "}
                    <span className="text-purple-500"> 06 Oct 24</span>
                  </p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-xl flex gap-2 items-center">
                      {" "}
                      <span>
                        <IoHome />
                      </span>{" "}
                      Upfrica Collection Point
                    </p>
                    <p>
                      Shop 1, Manna Plaza <br /> Community 18 junction <br />{" "}
                      Opposite Allied Filling Station <br />
                      Spintex Road, Accra
                    </p>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="py-4 space-y-2 bord">
          <p className="text-center ">
            You'll pick up one or more items in shop or at a collection point.
          </p>
          <div className="flex justify-center items-center ">
            <button className="text-xl font-bold bg-[#f7c32e] w-full md:w-1/3 py-2 md:rounded-3xl  fixed bottom-0 sm:relative">
              Continue
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
