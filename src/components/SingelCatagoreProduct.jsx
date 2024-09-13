import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function SingelCatagoreProduct({ data }) {
  // console.log(data)
  // console.log(data);
  const { image, name } = data;
  if(!image) return; 

  return (
    <div>
      <div className="flex flex-col items-center">
        <Link to='/catagoreDetels'>
          <img
            className="h-24 2xl:h-28 w-24 2xl:w-28 rounded-full"
            src={image || "https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?cs=srgb&dl=bloom-blossom-flora-46216.jpg&fm=jpg"}
            alt=""
          />
        </Link>
        <p className="text-sm lg:text-base tracking-wide">{name}</p>
      </div>
    </div>
  );
}
