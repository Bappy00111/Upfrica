import React from "react";

const CatagoreDetels = () => {
  const products = [
    {
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcy85IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4cea9505cd1b70cfa6d996849e74175887521743/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZwcEFmbzZER052Ym5abGNuUTZDWGRsWW5BPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--49e558d3860662070c769838f3b68075ca8eb505/Screenshot%202024-07-29%20at%2022.43.44.png",
      title: "Dell Latitude 3380 Core I3",
      brandNew: true,
      price: "$159.77",
      oldPrice: "$166.17",
      deliveryPrice: "$10.00",
      deliveryDate: "08 Sep - 11 Sep",
    },
    {
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc2syIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cc37a289559146da84b13efe52fbba5e866a6d47/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZwcEFmbzZER052Ym5abGNuUTZDWGRsWW5BPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e32e45ba8c99d3e515807419773adcbdf4a3373/sp.jpg",
      title: "HP Pavilion 15",
      brandNew: true,
      price: "$799.99",
      oldPrice: null,
      deliveryPrice: "$15.00",
      deliveryDate: "10 Sep - 12 Sep",
    },
    {
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeFlGQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1fe784ca5aa0b0ddfc1d085644ab476d4c5ac34a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZwcEFmbzZER052Ym5abGNuUTZDWGRsWW5BPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e32e45ba8c99d3e515807419773adcbdf4a3373/Screenshot_20240817_223210_Alibabacom.jpg",
      title: "Lenovo ThinkPad X1",
      brandNew: false,
      price: "$999.99",
      oldPrice: "$1050.00",
      deliveryPrice: "$20.00",
      deliveryDate: "12 Sep - 14 Sep",
    },
    {
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdDQyIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--305911a2cc34aef64326c82d78dc18b0bd80dc30/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZwcEFmbzZER052Ym5abGNuUTZDWGRsWW5BPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e32e45ba8c99d3e515807419773adcbdf4a3373/wey1.jpg",
      title: "Apple MacBook Pro",
      brandNew: true,
      price: "$1299.99",
      oldPrice: null,
      deliveryPrice: "$25.00",
      deliveryDate: "15 Sep - 18 Sep",
    },
    {
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdEkyIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--25a16bdf01607f683344ef53b6a6ff6f6348151e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZwcEFmbzZER052Ym5abGNuUTZDWGRsWW5BPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e32e45ba8c99d3e515807419773adcbdf4a3373/triple.jpg",
      title: "Acer Aspire 5",
      brandNew: false,
      price: "$549.99",
      oldPrice: "$600.00",
      deliveryPrice: "$12.00",
      deliveryDate: "08 Sep - 11 Sep",
    },
    {
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdEkyIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--25a16bdf01607f683344ef53b6a6ff6f6348151e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZwcEFmbzZER052Ym5abGNuUTZDWGRsWW5BPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e32e45ba8c99d3e515807419773adcbdf4a3373/triple.jpg",
      title: "Asus ZenBook 14",
      brandNew: true,
      price: "$699.99",
      oldPrice: null,
      deliveryPrice: "$18.00",
      deliveryDate: "09 Sep - 12 Sep",
    },
    {
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcjgyIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a92236960fe7c2112621fe4f7b70123eba14d610/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZwcEFmbzZER052Ym5abGNuUTZDWGRsWW5BPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e32e45ba8c99d3e515807419773adcbdf4a3373/speak.jpg",
      title: "Microsoft Surface Pro",
      brandNew: true,
      price: "$849.99",
      oldPrice: "$880.00",
      deliveryPrice: "$22.00",
      deliveryDate: "10 Sep - 13 Sep",
    },
    {
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeFlGQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1fe784ca5aa0b0ddfc1d085644ab476d4c5ac34a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZwcEFmbzZER052Ym5abGNuUTZDWGRsWW5BPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e32e45ba8c99d3e515807419773adcbdf4a3373/Screenshot_20240817_223210_Alibabacom.jpg",
      title: "Razer Blade 15",
      brandNew: false,
      price: "$1599.99",
      oldPrice: "$1650.00",
      deliveryPrice: "$30.00",
      deliveryDate: "11 Sep - 14 Sep",
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 gap-10 container py-5">
      <div className="col-span-1 hidden lg:flex bg-white shadow-xl p-10 rounded h-[200px]">
        <div>
          <h1 className="text-xl font-bold mb-4">Price Filter</h1>
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4 items-center">
              <input
                type="text"
                name="min-price"
                id="min-price"
                placeholder="Max"
                className="border border-gray-300 px-3 py-2 rounded-md w-24"
              />
              <input
                type="text"
                name="max-price"
                id="max-price"
                placeholder="Min"
                className="border border-gray-300 px-3 py-2 rounded-md w-24"
              />
              <button className=" px-4 py-2  border rounded-xl">Go</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <h1 className="text-2xl font-bold tracking-wide pb-4">
          Speakers & Accessories in Ghana for sale
        </h1>
        {/* catagore detels card  */}
        <div className="grid grid-cols-1 gap-6 px-2">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 p-4 flex items-center space-x-6"
            >
              {/* Image Section */}
              <div className="w-full sm:w-1/4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-52 lg:h-72 object-center rounded-md "
                />
              </div>
              {/* Text Section */}
              <div className="w-full sm:w-3/4 space-y-2">
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p
                  className={`text-base ${
                    product.brandNew ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {product.brandNew ? "Brand New" : "Used"}
                </p>
                <p className="text-xl md:text-2xl font-bold ">{product.price}</p>
                {product.oldPrice && (
                  <p className="text-base text-gray-500 line-through">
                    {product.oldPrice}
                  </p>
                )}
                <p className="text-base font-bold">Buy it now</p>
                <p className="text-base">
                  Delivery: {product.deliveryPrice}
                </p>
                <p className="text-sm">
                  Estimated Delivery: {product.deliveryDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatagoreDetels;
