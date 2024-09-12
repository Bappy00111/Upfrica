import React, { useEffect, useState } from "react";
import SingelCatagoreProduct from "./SingelCatagoreProduct";
import Slider from "react-slick";

export default function CategoreProduct() {
  const [categores, setCategore] = useState([]);

  useEffect(() => {
    fetch("https://upfrica-staging.herokuapp.com/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategore(data.categories));
  }, []);

  // Slider settings for smaller devices
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default to 1 slide
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 640, // For small devices (sm)
        settings: {
          slidesToShow: 3, // Show 3 slides on sm devices
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // For medium devices (md)
        settings: {
          slidesToShow: 6, // Show 6 slides on md devices
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024, // For medium devices (md)
        settings: {
          slidesToShow: 7, // Show 6 slides on md devices
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1280, // For medium devices (md)
        settings: {
          slidesToShow: 8, // Show 6 slides on md devices
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1536, // For medium devices (md)
        settings: {
          slidesToShow: 9, // Show 6 slides on md devices
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="hidden xl:flex justify-around">
        {categores.map((data) => (
          <SingelCatagoreProduct key={data.id} data={data} />
        ))}
      </div>

      {/* Slider for smaller devices */}
      <div className="xl:hidden">
        <Slider {...settings}>
          {categores.map((data) => (
            <SingelCatagoreProduct key={data.id} data={data} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
