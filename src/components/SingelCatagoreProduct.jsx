import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SingelCatagoreProduct({ data }) {
  console.log(data);
  const { image, title } = data;

  
  return (
    <div>
      <div className="">
        <img className='h-36 w-36 rounded-full' src={image} alt="" />
        <p className='text-base tracking-wide font-medium'>{title}</p>
      </div>

      
    </div>
  );
}
