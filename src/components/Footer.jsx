import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-black">
      <footer className="grid lg:grid-cols-5 gap-10 text-white  p-10 container text-base tracking-wide">
        <nav className="space-y-4 ">
          <h6 className="text-2xl font-bold ">Upfrica - BD</h6>
          <p className="text-base">
            Online Shopping in Ghana, Nigeria, UK for quality items at
            discounted prices - Sell, deliver, process payments and grow your
            business - Buy & sell African products, electronics, machines &
            related products
          </p>
          <p className="flex gap-1 items-center">
            <span>
              <FaWhatsapp className="h-6 w-6" />
            </span>
            <span>+44 7466800672</span>
          </p>
          <p className="flex gap-1 items-center">
            <span>
              <MdOutlineEmail className="h-6 w-6" />
            </span>
            <span>email us</span>
          </p>

          <p className=" py-10 leading-8">
            Upfrica - African Marketplace BD. All rights reserved.
          </p>
          <p
            className="text-2xl font-bold
          "
          >
            Payment & Security
          </p>
          <div className="flex gap-2">
            <img
              className="h-10 w-14 rounded"
              src="https://d26ukeum83vx3b.cloudfront.net/assets/momo-f05ddc4de74168553b74a880e7f960a1a9854e3110b5696256500f4d8f3ee1fa.jpeg"
              alt=""
            />
            <img
              className="h-10 w-14 rounded"
              src="https://d26ukeum83vx3b.cloudfront.net/assets/visa-d303de42ebf4fbc0e8fd0e3b7f92f203822cdbbc123bc27214283acdd1fdafa7.svg"
              alt=""
            />
            <img
              className="h-10 w-14 rounded"
              src="https://d26ukeum83vx3b.cloudfront.net/assets/mastercard-23b4badc9b2f83763ca268da7a89378d3a9732066d23f7683ecf24b5bde0f06f.svg"
              alt=""
            />
            <img
              className="h-10 w-14 rounded"
              src="https://d26ukeum83vx3b.cloudfront.net/assets/expresscard-95d23c429de33f9f60a52390d788eae22f1f625648b4e587e87449c8304bd357.svg"
              alt=""
            />
          </div>
        </nav>
        <nav className="space-y-4 text-base">
          <h6 className="text-2xl font-bold tracking-wide">Page</h6>
          <p>Deals</p>
          <p>Listhings</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>New and Blog</p>
          <p>Deals</p>
        </nav>
        <nav className="space-y-4">
          <h6 className="text-2xl font-bold tracking-wide">Link</h6>
          <p>Sing up</p>
          <p>Sing in</p>
          <p>Privacy Police</p>
          <p>Terms</p>
          <p>Support</p>
        </nav>
        <nav className="space-y-4">
          <h6 className="text-2xl font-bold tracking-wide">Link</h6>
          <p>Ghana</p>
          <p>United Kingdom</p>
          <p>Negaria</p>
          <p>Global</p>
        </nav>
        <nav className="space-y-4">
          <h6 className="text-2xl font-bold tracking-wide">Quick Links</h6>
          <p>Sles on up</p>
          <p>Sales</p>
          <p>Orders</p>
          <p>Dashbord</p>
        </nav>
      </footer>
    </div>
  );
}
