import React, { useState } from "react";
import { FaMinus, FaPencilAlt, FaPlus } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
// import { IoMdNotifications } from "react-icons/io";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const AddNewProducts = () => {
  // ফর্ম টগল করার জন্য state
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // টগল করার ফাংশন
  const toggleForm = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-center pt-20 bg-slate-50">
      <div className="w-full md:w-3/5 2xl:w-1/2 ">
        <div className="text-center space-y-4 py-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
            Add New Listing
          </h1>
          <p className="flex items-center justify-center space-x-2 text-[#0063d1]">
            <span className="text-base">
              *Your location: , Dhaka, Bangladesh{" "}
            </span>
            <span>
              <FaPencilAlt />
            </span>
          </p>
        </div>
        <div className="space-y-4">
          {/* Homepage Positions section  */}
          <div className="p-4 bg-white shadow-md rounded-xl">
            <h1 className="text-2xl font-bold mb-4">
              Homepage Positions (Admin)
            </h1>
            <hr className="py-2" />

            {/* Positions with checkbox */}
            <div className="mb-4 text-base font-bold">
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="mr-2 text-purple-600 focus:ring-purple-500 checked:bg-purple-600 checked:border-purple-600"
                />
                <p>Add to position 1</p>
              </div>

              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="mr-2 text-purple-600 focus:ring-purple-500 checked:bg-purple-600 checked:border-purple-600"
                />
                <p>Add to position 2</p>
              </div>

              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="mr-2 text-purple-600 focus:ring-purple-500 checked:bg-purple-600 checked:border-purple-600"
                />
                <p>Add to position 3</p>
              </div>

              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="mr-2 text-purple-600 focus:ring-purple-500 checked:bg-purple-600 checked:border-purple-600"
                />
                <p>Add to position 4</p>
              </div>

              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="mr-2 text-purple-600 focus:ring-purple-500 checked:bg-purple-600 checked:border-purple-600"
                />
                <p>Add to position 5</p>
              </div>
            </div>

            {/* Bulk */}
            <div className="mb-4">
              <p className="font-bold">Bulk?</p>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="bulk"
                    value="no"
                    className="mr-2 text-purple-600 focus:ring-purple-500 checked:bg-purple-600 checked:border-purple-600"
                  />
                  No
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="bulk"
                    value="yes"
                    className="mr-2 text-purple-600 focus:ring-purple-500 checked:bg-purple-600 checked:border-purple-600"
                  />
                  Yes
                </label>
              </div>
            </div>

            {/* Available Promo */}
            <div className="mb-4">
              <p className="font-bold">Available Promo?</p>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="available_promo"
                    value="no"
                    className="mr-2 text-purple-600 focus:ring-purple-500 checked:bg-purple-600 checked:border-purple-600"
                  />
                  No
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="available_promo"
                    value="yes"
                    className="mr-2 text-purple-600 focus:ring-purple-500 checked:bg-purple-600 checked:border-purple-600"
                  />
                  Yes
                </label>
              </div>
            </div>

            {/* Preorder Promo */}
            <div className="mb-4">
              <p className="font-bold">Preorder Promo?</p>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preorder_promo"
                    value="no"
                    className="mr-2 text-purple-600 focus:ring-purple-500 checked:bg-purple-600 checked:border-purple-600"
                  />
                  No
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preorder_promo"
                    value="yes"
                    className="mr-2 text-purple-600 focus:ring-purple-500 checked:bg-purple-600 checked:border-purple-600"
                  />
                  Yes
                </label>
              </div>
            </div>

            {/* Promoted */}
            <div className="mb-4">
              <p className="font-bold">Promoted?</p>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="promoted"
                    value="no"
                    className="mr-2 text-purple-600 focus:ring-purple-500 checked:bg-purple-600 checked:border-purple-600"
                  />
                  No
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="promoted"
                    value="yes"
                    className="mr-2 text-purple-600 focus:ring-purple-500 checked:bg-purple-600 checked:border-purple-600"
                  />
                  Yes
                </label>
              </div>
            </div>
          </div>
          {/* Admin Inputs section  */}
          <div className="p-4 bg-white shadow-md rounded-xl">
            {/* Header Section */}
            <div className="flex items-center justify-between text-base font-bold">
              {/* Centered Content */}
              <div className="flex items-center justify-center space-x-2 flex-grow">
                <span>
                  <IoMdNotifications />
                </span>
                <span>Admin Inputs</span>
              </div>

              {/* Arrow Button on Right */}
              <button onClick={toggleForm} className="ml-4 focus:outline-none">
                {isOpen ? <FaMinus /> : <FaPlus />}
              </button>
            </div>

            {/* Toggling Form */}
            {isOpen && (
              <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">
                  Supplier Information
                </h1>

                <form className="space-y-4 text-base text-[#3c4858] ">
                  {/* Supplier Links */}
                  <div>
                    <label className="block  font-bold mb-2">
                      Supplier Link or GPS*
                    </label>
                    <input
                      type="text"
                      placeholder="Link"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block  font-bold mb-2">
                      Backup Supplier Link
                    </label>
                    <input
                      type="text"
                      placeholder="2nd Supplier link"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block  font-bold mb-2">
                      Supplier name
                    </label>
                    <input
                      type="text"
                      placeholder="Supplier name"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block  font-bold mb-2">
                      Supplier phone number
                    </label>
                    <input
                      type="text"
                      placeholder="Supplier phone number"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  {/* Product Costing */}
                  <div>
                    <p className="font-bold">Product Costing(USD)</p>
                    <p>
                      Price <span className="font-bold">$0</span>
                    </p>
                    <hr />
                  </div>
                  {/* inpute filed  */}
                  <div className="space-y-4">
                    {/* Input fields */}
                    <div className="grid grid-cols-3  md:grid-cols-5 lg:grid-cols-7 gap-3 md:gap-5 xl:gap-10 ">
                      <div>
                        <label htmlFor="Vprice($)">
                          Vprice($)
                          <input
                            type="text"
                            placeholder="ver"
                            className="w-full px-3 py-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
                          />
                        </label>
                      </div>
                      <div>
                        <label htmlFor="Vprice($)">
                          Vshipping
                          <input
                            type="text"
                            placeholder="ven"
                            className="w-full px-3 py-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
                          />
                        </label>
                      </div>

                      <div>
                        <label htmlFor="Vprice($)">
                          L
                          <input
                            type="text"
                            placeholder="L"
                            className="w-full px-3 py-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 "
                          />
                        </label>
                      </div>
                      <div>
                        <label htmlFor="Vprice($)">
                          w
                          <input
                            type="text"
                            placeholder="W"
                            className="w-full px-3 py-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 "
                          />
                        </label>
                      </div>
                      <div>
                        <label htmlFor="Vprice($)">
                          H
                          <input
                            type="text"
                            placeholder="H"
                            className="w-full px-3 py-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 "
                          />
                        </label>
                      </div>
                      <div>
                        <label htmlFor="1CBM">
                          1CBM
                          <input
                            type="text"
                            placeholder="e.g"
                            className="w-full px-3 py-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 "
                          />
                        </label>
                      </div>
                      <div>
                        <label htmlFor="Rate ($ to GHS)">
                          Rate ($ to GHS)
                          <input
                            type="text"
                            placeholder="Rate ($ to GHS)"
                            className="w-full px-3 py-6 border rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 "
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* total cosst detels  */}
                  <div className="space-y-2 mb-4">
                    <p className="text-base">CBM: 0.0</p>
                    <p className="text-base">Shipping Cost: 0.0</p>
                    <p className="text-base">Product cost:</p>
                    <p className="text-base">Total cost:</p>
                  </div>

                  <div className="mt-6">
                    <p className="font-bold mb-2">*Select Payment Terms</p>
                    <div className="flex flex-col space-y-2">
                      <label className="font-bold ">Delivery</label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2 text-purple-600 focus:ring-purple-500 checked:bg-purple-600 checked:border-purple-600"
                        />
                        Payment before delivery
                      </label>
                      <label className="font-bold">Click & Collect</label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2 text-purple-600 focus:ring-purple-500 checked:bg-purple-600 checked:border-purple-600"
                        />
                        Payment on collection
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        {/* title from  */}
        <div className="my-4 bg-white shadow-md  rounded-md p-4 space-y-2">
          {/* title  */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Your Title Here</h2>

            <p className="text-gray-600 mb-4">
              This is your paragraph text here.
            </p>

            <hr className="border-gray-300 mb-4" />

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Type something here..."
            />
            <p className="text-gray-500 mt-2">{inputValue.length} / 80</p>
          </div>
          {/* *Item description */}
          <div>
            <h2 className="text-2xl font-bold mb-2">*Item description</h2>

            <p className="text-gray-600 mb-4">
              Usually in bullet points{" "}
              <span className="text-red-500">
                {" "}
                Phone numbers or external links are not allowed in the
                decription
              </span>
            </p>

            <hr className="border-gray-300 mb-4" />

            <textarea
              type="textbox"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="3"
              placeholder="Tell buyers about the unique features, and/or why you are selling it."
            />
            <p className="">Add accurate and concise details of your product</p>
          </div>
          {/* *Category */}
          <div>
            <h2 className="text-2xl font-bold mb-2">*Category</h2>

            <hr className="border-gray-300 mb-4" />
            <div className="flex items-center justify-between border rounded  group focus-within:border-purple-500">
              <input
                className="w-full border-none focus:outline-none py-2 ps-3"
                type="text"
                placeholder="Search Upfrica BD"
              />
              <button className="bg-purple-500 text-white h-10 px-6 rounded ">
                More
              </button>
            </div>

            <p className="">Select or tap on more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProducts;
