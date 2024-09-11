import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function SingelCatagoreProduct({ data }) {
  console.log(data);
  const { image, title } = data;

  return (
    <div>
      <div>
        <Link to='/catagoreDetels'>
          <img
            className="h-24 2xl:h-28 w-24 2xl:w-28 rounded-full"
            src={image}
            alt=""
          />
        </Link>
        <p className="text-sm lg:text-base tracking-wide ">{title}</p>
      </div>
    </div>
  );
}
