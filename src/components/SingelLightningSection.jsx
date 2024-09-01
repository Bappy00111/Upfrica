import React from 'react'

export default function SingelLightningSection({data}) {
    const {image,id,title,productCode,newPrice,oldPrice} = data;
  return (
    <div className='bg-white shadow-2xl rounded-xl overflow-hidden'>
        <img className='h-80 w-80 rounded-t hover:scale-125 hover:translate-y-5 transition-transform duration-1000' src={image} alt="" />
        <div className='p-4 space-y-2 text-xl text-gray-600'>
            <p>{title}</p>
            <p className='text-purple-500'>{productCode} + sold recently</p>
            <hr />
            <div className='flex gap-5'>
                <p className='font-bold'> ${newPrice}</p>
                <p className='line-through'>${oldPrice}</p>
            </div>
        </div>
    </div>
  )
}
