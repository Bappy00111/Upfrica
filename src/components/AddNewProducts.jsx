import React, { useRef, useState } from "react";
import { FaMinus, FaPencilAlt, FaPlus } from "react-icons/fa";
import { IoMdNotifications, IoMdPhotos } from "react-icons/io";
// import { IoMdNotifications } from "react-icons/io";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import ImageUploading from "react-images-uploading";
import { Editor } from "@tinymce/tinymce-react";

const AddNewProducts = () => {
  // ফর্ম টগল করার জন্য state
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [arrowshowDropdown, setArrowShowDropdown] = useState(false);
  const [brandArrow, setBrandArrow] = useState(false);
  const [approVal, setApproVal] = useState(false);

  // টগল করার ফাংশন
  const toggleForm = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen);
  };

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  // image uploading
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <div className="flex justify-center pt-20 bg-slate-50">
      <form className="w-full md:w-3/5 2xl:w-1/2 py-5">
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
        {/*  title from  */}
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
            <Editor
              apiKey="wlfjcowajns1o44b16c3vyk0lmxnctw5pehcbmo9070i2f4x"
              onInit={(_evt, editor) => (editorRef.current = editor)}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
            {/* <textarea
              type="textbox"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="3"
              placeholder="Tell buyers about the unique features, and/or why you are selling it."
            /> */}
            <p className="">Add accurate and concise details of your product</p>
          </div>
          {/* *Category */}
          <div className="py-4">
            <h2 className="text-2xl font-bold mb-2">*Category</h2>

            <hr className="border-gray-300 mb-4" />
            <div className="relative flex items-center justify-between border  rounded-md group focus-within:border-purple-500 ">
              <input
                className="w-full border-none focus:outline-none focus:ring-0 py-2 ps-3"
                type="text"
                placeholder="Search Upfrica BD"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              <button className="bg-purple-500 text-white h-[45px] px-6 rounded-tr-md rounded-br-md">
                More
              </button>

              {/* Dropdown list */}
              {showDropdown && (
                <div className="absolute top-full left-0 w-full bg-white border rounded shadow-lg mt-2 z-10">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-200">Option 1</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Option 2</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Option 3</li>
                  </ul>
                </div>
              )}
            </div>

            <p className="">Select or tap on more</p>
          </div>
          {/* *Condition */}
          <div className="py-4">
            <h2 className="text-2xl font-bold mb-2">*Condition</h2>
            <p>
              Use keywords people would search for when looking for your item.
              Include details such us colour, size, brand & model.
            </p>
            <hr className="border-gray-300 mb-4" />
            <div className="relative flex items-center justify-between border  rounded-md group focus-within:border-purple-500 ">
              <input
                className="w-full border-none focus:outline-none focus:ring-0 py-2 ps-3"
                type="text"
                placeholder="Search Upfrica BD"
                onClick={() => setArrowShowDropdown(!arrowshowDropdown)}
              />
              {arrowshowDropdown ? (
                <button className=" h-[45px] px-6 rounded-tr-md rounded-br-md">
                  <MdOutlineArrowDropUp />
                </button>
              ) : (
                <button className=" h-[45px] px-6 rounded-tr-md rounded-br-md">
                  <MdOutlineArrowDropDown />
                </button>
              )}

              {/* Dropdown list */}
              {arrowshowDropdown && (
                <div className="absolute top-full left-0 w-full bg-white border rounded shadow-lg mt-2 z-10">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-200">Option 1</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Option 2</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Option 3</li>
                  </ul>
                </div>
              )}
            </div>

            <p className="">Select or tap on more</p>
          </div>
          {/* Brand  */}
          <div className="py-4">
            <h2 className="text-2xl font-bold mb-2">Brand</h2>
            <p>
              Use keywords people would search for when looking for your item.
              Include details such us colour, size, brand & model.
            </p>
            <hr className="border-gray-300 mb-4" />
            <div className="relative flex items-center justify-between border  rounded-md group focus-within:border-purple-500 ">
              <input
                className="w-full border-none focus:outline-none focus:ring-0 py-2 ps-3"
                type="text"
                placeholder="Search Upfrica BD"
                onClick={() => setBrandArrow(!brandArrow)}
              />
              {brandArrow ? (
                <button className=" h-[45px] px-6 rounded-tr-md rounded-br-md">
                  <MdOutlineArrowDropUp />
                </button>
              ) : (
                <button className=" h-[45px] px-6 rounded-tr-md rounded-br-md">
                  <MdOutlineArrowDropDown />
                </button>
              )}

              {/* Dropdown list */}
              {brandArrow && (
                <div className="absolute top-full left-0 w-full bg-white border rounded shadow-lg mt-2 z-10">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-200">Option 1</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Option 2</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Option 3</li>
                  </ul>
                </div>
              )}
            </div>

            <p className="">Select or tap on more</p>
          </div>

          {/* *Photos & Video */}
          <div>
            <div className="space-y-2 py-4">
              <h1 className="text-2xl font-bold">*Photos & Video</h1>
              <p>Phone numbers are not allowed on photos</p>
            </div>
            <hr />
            <div className="space-y-4 m-4">
              <p>Supported files: *.jpg and *.png</p>
              <div className="App">
                <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                      <button
                        className="h-40 w-40 border"
                        style={isDragging ? { color: "red" } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        <span>
                          <IoMdPhotos className="h-8 w-8 mx-auto" />
                        </span>
                        Add Photos
                      </button>
                      &nbsp;
                      {/* <button onClick={onImageRemoveAll}>
                        Remove all images
                      </button> */}
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img src={image["data_url"]} alt="" width="100" />
                          <div className="image-item__btn-wrapper">
                            <button onClick={() => onImageUpdate(index)}>
                              Update
                            </button>
                            <button onClick={() => onImageRemove(index)}>
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ImageUploading>
              </div>
            </div>
            <hr />

            <div className="py-6 space-y-2">
              <p>YouTube video link - optional</p>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="https://www.youtube.com/watch?v=nLl0z0YC6hk"
              />
            </div>
            <div className="space-y-2">
              <p className="text-base font-bold">
                Upload mp4 product video - <small>optional</small>
              </p>
              <div className="App">
                <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper flex space-x-4 items-center">
                      <button
                        className="px-4 py-2 border font-bold rounded"
                        style={isDragging ? { color: "red" } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        Choose File
                      </button>
                      <p>No file Chosen</p>
                      &nbsp;
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img src={image["data_url"]} alt="" width="100" />
                          <div className="image-item__btn-wrapper">
                            <button onClick={() => onImageUpdate(index)}>
                              Update
                            </button>
                            <button onClick={() => onImageRemove(index)}>
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ImageUploading>
              </div>
            </div>

            {/* Pricing */}

            <div className="my-6">
              <h1 className="text-2xl font-bold">*Pricing</h1>
              <hr className="my-4" />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div>
                  <h1 className="text-gray-700 text-base">*item Price</h1>
                  <div className="flex items-center space-x-2 border-b pb-1 text-xl font-bold">
                    <h3 className="underline text-blue-600">USD</h3>
                    <input
                      className="border-none text-xl font-bold focus:outline-none focus:ring-0"
                      type="text"
                      name=""
                      id=""
                      placeholder="Price"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-gray-700 text-base">Unit value</h1>
                  <div className="flex  md:items-center space-x-2  text-xl font-bold">
                    <input
                      type="number"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="0"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-gray-700 text-base">Unit of measure</h1>
                  <div className="flex items-center space-x-2  text-xl font-bold">
                    <input
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="text"
                      placeholder="each"
                      onClick={() => setBrandArrow(!brandArrow)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Approval notes */}
            <div className="my-4">
              <h1 className="text-2xl font-bold">Approval notes</h1>
              <hr className="my-6" />
              <div className="relative flex items-center justify-between border  rounded-md group focus-within:border-purple-500 ">
                <input
                  className="w-full border-none focus:outline-none focus:ring-0 py-2 ps-3"
                  type="text"
                  readOnly
                  placeholder="select"
                  onClick={() => setApproVal(!approVal)}
                />
              

                {/* Dropdown list */}
                {approVal && (
                  <div className="absolute top-full left-0 w-full bg-white border rounded shadow-lg mt-2 z-10">
                    <ul className="py-2">
                      <li className="px-4 py-2 hover:bg-gray-200">Option 1</li>
                      <li className="px-4 py-2 hover:bg-gray-200">Option 2</li>
                      <li className="px-4 py-2 hover:bg-gray-200">Option 3</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-xl font-bold p-4">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
            Save and continue
          </button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewProducts;
