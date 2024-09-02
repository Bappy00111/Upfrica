import React from 'react'
import { FaCartPlus } from 'react-icons/fa';

export default function ArrivalsSingelProducts({product}) {
    console.log(product)
    const {id,image,newPrice,oldPrice} = product;
  return (
    <div className='border rounded-xl mt-4 overflow-hidden'>
        <img className='h-40 w-40 bg-center bg-cover hover:scale-110 hover:translate-y-[-4px] transition-transform duration-300' src={image} alt="" />
        <hr />
        <div className="flex justify-between items-center p-1">
          <div className="flex gap-2">
            <p className="font-bold   py-1 tracking-wide text-sm">
              {" "}
              ${newPrice}
            </p>
            <p className="line-through   py-1 tracking-wide text-sm text-gray-500">
              ${oldPrice }
            </p>
          </div>
          <div className="p-2 bg-gray-200 rounded">
          <FaCartPlus className="h-4 w-4 text-purple-500 " />
          </div>
        </div>
    </div>
  )
}
