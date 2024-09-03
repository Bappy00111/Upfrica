import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SingelCatagoreProduct({ data }) {
  console.log(data);
  const { image, title } = data;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div>
      <div className="hidden lg:block">
        <img className='h-36 w-36 rounded-full' src={image} alt="" />
        <p className='text-base tracking-wide font-medium'>{title}</p>
      </div>

      <div className="lg:hidden">
        <Slider {...settings}>
          <div>
            <img className='h-36 w-36 rounded-full' src={image} alt="" />
            <p className='text-base tracking-wide font-medium'>{title}</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
