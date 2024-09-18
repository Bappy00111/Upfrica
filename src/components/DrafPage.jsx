import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const DrafPage = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("Draft");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("https://upfrica-staging.herokuapp.com/api/v1/products?page=2")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    // <div>
    //   <div className="border py-10 text-5xl font-bold px-4">
    //     <h1> 10 unpublished</h1>
    //   </div>
    //   <div className="overflow-x-auto">
    //     <table className="min-w-full divide-y divide-gray-200">
    //       <thead className="bg-gray-50">
    //         <tr className="text-xl font-bold">
    //           <th className="px-6 py-3 text-left text-gray-500 uppercase tracking-wider w-1/12">
    //             ID
    //           </th>
    //           <th className="px-6 py-3 text-left text-gray-500 uppercase tracking-wider w-3/12">
    //             Product
    //           </th>
    //           <th className="px-6 py-3 text-left text-gray-500 uppercase tracking-wider w-8/12">
    //             Details
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody className="bg-white divide-y divide-gray-200 text-base font-bold">
    //         {products?.map((product) => (
    //           <tr key={product?.id}>
    //             <td className="px-6 py-4 whitespace-nowrap w-1/12">
    //               {product?.id}
    //             </td>
    //             <td className="px-6 py-4 whitespace-nowrap w-3/12">
    //               <div className="flex justify-between items-center">
    //                 <p>draft</p>
    //                 <p>Edit</p>
    //                 <span>
    //                   <MdDelete className="text-blue-500" />
    //                 </span>
    //               </div>
    //             </td>
    //             <td className="px-6 py-4 whitespace-nowrap w-8/12">
    //               {product?.description?.body}
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-200 text-xl font-bold">
          <tr>
            <th className="border border-gray-300 px-6 py-3 w-1/12 text-left text-gray-700">
              ID
            </th>
            <th className="border border-gray-300 px-6 py-3 w-3/12 text-left text-gray-700">
              Product
            </th>
            <th className="border border-gray-300 px-6 py-3 w-8/12 text-left text-gray-700">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="text-base font-bold tracking-wide cursor-pointer"
            >
              <td className="border border-gray-300 px-6 py-10">
                {product.id}
              </td>
              <td className="border border-gray-300 px-4">
                <div className="flex justify-between items-center space-x-2">
                  {/* Dropdown for Draft/Published */}
                  <div className="relative">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="bg-[#F3E8FF] text-[#8710D8] font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-[#E0C9FF] transition-all duration-300 ease-in-out cursor-pointer"
                    >
                      {status}
                    </button>
                    {isOpen && (
                      <div className="absolute left-0 mb-10 w-32 bg-white border border-gray-300 rounded-lg shadow-xl z-10">
                        <ul className="py-1">
                          <li
                            className="px-8 py-2 text-gray-700 hover:bg-[#F3E8FF] hover:text-[#8710D8] transition-all duration-300 ease-in-out cursor-pointer"
                            onClick={() => {
                              setStatus("Draft");
                              setIsOpen(false);
                            }}
                          >
                            Draft
                          </li>
                          <li
                            className="px-8 py-2 text-gray-700 hover:bg-[#F3E8FF] hover:text-[#8710D8] transition-all duration-300 ease-in-out cursor-pointer"
                            onClick={() => {
                              setStatus("Published");
                              setIsOpen(false);
                            }}
                          >
                            Published
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Edit Button */}
                  <p className="text-[#AF35F0] font-semibold cursor-pointer hover:underline">
                    Edit
                  </p>

                  {/* Delete Button */}
                  <span className="flex items-center space-x-1 text-blue-500 cursor-pointer hover:text-blue-700">
                    <MdDelete className="h-6 w-6" />
                    <span className="font-semibold">Delete</span>
                  </span>
                </div>
              </td>

              <td className="border border-gray-300 px-6 py-4">
                {product.details}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DrafPage;
