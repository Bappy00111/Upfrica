import React, { useEffect, useState } from "react";
import { FaLocationPin } from "react-icons/fa6";
import Details from "./Details";
import {
  IoIosArrowDown,
  IoIosArrowDropdown,
  IoMdCheckmark,
} from "react-icons/io";
import { MdLocalPhone, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { FaArrowLeft, FaArrowRight, FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetelsButton from "./DetelsButton";
import PriceSection from "./PriceSection";
import SalesEndSection from "./SalesEndSection";
import CollectionDetails from "./CollectionDetails";
import FreeDeliveryInfo from "./FreeDeliveryInfo";
import DeliveryDate from "./DeliveryDate";
import LaptopDetails from "./LaptopDetails";
import ConfidenceSection from "./ConfidenceSection";
import AddToBasketButton from "./AddToBasketButton";
const DetelsProduct = () => {
  // useEffect(() => {
  //   // Page ke top e scroll kore niye ashte
  //   window.scrollTo(0, 0);
  // }, []);
  const navigation = useNavigate();
  const location = useLocation();
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  // console.log()
  const {
    id,
    product_images,
    title,
    price,
    postage_fee,
    sale_end_date,
    sale_start_date,
  } = location.state || {};


  const laptopDetails = [
    {
      Condition: "Renewed",
      Brand: "Dell",
      Type: "Laptops",
      ModelName: "Dell Latitude 3380",
      ScreenSizeInches: 13.3,
      HardDiskSizeGB: 128,
      CpuModelGHz: 2.0,
      RamMemoryGB: 4,
      OperatingSystem: "Windows 11",
      Series: "Core i3",
      Features: ["HDMI", "Bluetooth", "Camera", "WiFi Connection", "USB Ports"],
      UpfricaItemID: "JERB7PX8",
      ItemNumber: "0000003487",
    },
  ];

  const datas = [
    {
      img: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNzhHQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f9d701000402b6634ad598665ecd048f568c26a1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lKYW5CbFp3WTZCa1ZVT2hOeVpYTnBlbVZmZEc5ZlptbHNiRnNIYVFMMEFXa0M5QUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--1f597fae043315a1f6069a2ebe258ef78d4a385e/10263691_001.jpeg",
      title: "Good nothing country.",
      price: 27.9,
    },
    {
      img: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdkZBIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7187ba3759a9a83763c40f1d668e9a827178ff4c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lKZDJWaWNBWTZCa1ZVT2hOeVpYTnBlbVZmZEc5ZlptbHNiRnNIYVFMMEFXa0M5QUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--f6a9d5da1ca7272c0d5ee49ccee29a1023f14abe/617myiTpYRL._AC_UF1000,1000_QL80_FMwebp_.webp",
      title: "Really scientist certainly tax.",
      price: 63.89,
    },
    {
      img: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdGQ5IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--520b2ab8ded488bab1b390f2df544b1c71717db3/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQXZRQmFRTDBBUT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--3095e24fd31f63b05a82bb8e43a2ff174971486d/Screenshot%202023-10-18%20095415.png",
      title: "Reach goal six throughout price.",
      price: 66.27,
    },
    {
      img: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWZzIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--364d7db8f1ede59593008a31995065bf1091c871/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lKYW5CbFp3WTZCa1ZVT2hOeVpYTnBlbVZmZEc5ZlptbHNiRnNIYVFMMEFXa0M5QUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--1f597fae043315a1f6069a2ebe258ef78d4a385e/upfrica-laptop.jpeg",
      title: "Study movement.",
      price: 12.1,
    },
    {
      img: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcnJ0IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--56c1277bc68ea0b20d49622a739f9e85732f4238/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQXZRQmFRTDBBUT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--7e58ae838154e3bab96ff19fe4ba2866ae9322e2/IMG-20240509-WA0002.jpg",
      title: "Lot politics factor apply memory.",
      price: 84.67,
    },
    {
      img: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcnJ0IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--56c1277bc68ea0b20d49622a739f9e85732f4238/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQXZRQmFRTDBBUT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--7e58ae838154e3bab96ff19fe4ba2866ae9322e2/IMG-20240509-WA0002.jpg",
      title: "Market program Republican wear money.",
      price: 75.24,
    },
    {
      img: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdXpHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e3d36e806d492162640f955880df13995e4c1356/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQXZRQmFRTDBBUT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--3095e24fd31f63b05a82bb8e43a2ff174971486d/IdeaPad_1_14IGL7_CT4_01.png",
      title: "Stuff thought know yet.",
      price: 56.23,
    },
    {
      img: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdWR3IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0a059c8204038053d036a7dc735ea3412e8a7512/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQXZRQmFRTDBBUT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--7e58ae838154e3bab96ff19fe4ba2866ae9322e2/microsoft-3tgg.jpg",
      title: "Foot red.",
      price: 15.25,
    },
    {
      img: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBamxwIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--633e907e4242bd4cd68d6a2515ed502d12b7b73a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQXZRQmFRTDBBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--0f68375eaf441ecd8b3a772d120bb6aff2c461ab/Screenshot%202023-08-11%20at%2012.16.55.png",
      title: "May team ahead whole.",
      price: 28.42,
    },
    {
      img: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBendJQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--ba5cb6fb796f4311949ce46de50e07472e5c3caf/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQXZRQmFRTDBBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--0f68375eaf441ecd8b3a772d120bb6aff2c461ab/Screenshot%202024-08-31%20at%2018.14.50.png",
      title: "Feeling position water.",
      price: 28.38,
    },
    {
      img: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBelVJQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6b7a9774f2923e0469c9754357cb4e73a965b840/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lKZDJWaWNBWTZCa1ZVT2hOeVpYTnBlbVZmZEc5ZlptbHNiRnNIYVFMMEFXa0M5QUU2REdOdmJuWmxjblE2Q1hkbFluQT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--822becc989580aaeb23fb25e468593064e9c80da/s-l1200.webp",
      title: "But ok care how.",
      price: 57.55,
    },
    {
      img: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeW9JQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0e80103fe0bd107770bae6213b279bc234ceea61/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQXZRQmFRTDBBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--0f68375eaf441ecd8b3a772d120bb6aff2c461ab/Screenshot%202024-08-31%20at%2016.18.14.png",
      title: "Sit choice both.",
      price: 53.04,
    },
    {
      img: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeG9JQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5bc7abdea300067e0ba7d79787884e08db0c33e7/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQXZRQmFRTDBBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--0f68375eaf441ecd8b3a772d120bb6aff2c461ab/Screenshot%202024-08-31%20at%2015.09.37.png",
      title: "Agree management interest.",
      price: 11.14,
    },
    {
      img: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBamNHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7c4f67b56f4c6b808e59526d2218a94b89cf568d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQXZRQmFRTDBBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bd58729da459fbfda670b840147c70989e0602a2/HTB1XxGvaRCw3KVjSZR0q6zcUpXaR.jpg",
      title: "Blood property Democrat style.",
      price: 22.02,
    },
    {
      img: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcHBlIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ec317547139e778bce8d6691358157053300cf86/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lKZDJWaWNBWTZCa1ZVT2hOeVpYTnBlbVZmZEc5ZlptbHNiRnNIYVFMMEFXa0M5QUU2REdOdmJuWmxjblE2Q1hkbFluQT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--822becc989580aaeb23fb25e468593064e9c80da/up-bdyuy1.webp",
      title: "Bar face thus floor course.",
      price: 40.96,
    },
    {
      img: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc0pyIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b725957f19ea1b06b9ce10d8e44709008068cb69/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lKZDJWaWNBWTZCa1ZVT2hOeVpYTnBlbVZmZEc5ZlptbHNiRnNIYVFMMEFXa0M5QUU2REdOdmJuWmxjblE2Q1hkbFluQT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--822becc989580aaeb23fb25e468593064e9c80da/fis-scale-1.webp",
      title: "Draw hundred will.",
      price: 89.13,
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product_images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product_images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // added cart item loccal store age
  const handleAddToBasket = () => {
    // Product er details
    const productData = {
      id: id,
      title: title,
      price: price,
      quantity: 1, // Default 1 quantity initially
      image: product_images,
      // delivery:postage_fee
    };

    // Existing basket theke data niye asha
    const basket = JSON.parse(localStorage.getItem("basket")) || [];

    // Check korbo je product already ase kina
    const existingProductIndex = basket.findIndex(
      (item) => item.id === productData.id
    );

    if (existingProductIndex >= 0) {
      // Product already basket e thakle quantity increase korbo
      basket[existingProductIndex].quantity += 1;
    } else {
      // Product basket e na thakle, basket e push korbo
      basket.push(productData);
    }

    // localStorage e update korbo
    localStorage.setItem("basket", JSON.stringify(basket));

    toast.success(`${title} has been added to your basket!`, {
      position: "top-center",
      autoClose: 5000,
      theme: "dark",
    });
    setTimeout(() => {
      navigation("/cartProdct");
    }, 2000);
  };

  // sale date

  useEffect(() => {
    setInterval(() => {
      const saleSatrtDate = new Date(sale_start_date);
      const saleEndDate = new Date(sale_end_date);

      // বর্তমানে কত সময় বাকি আছে, সেটা বের করতে
      const currentDate = new Date();

      // সেল শেষ হবার সময় এবং বর্তমান সময়ের মধ্যে পার্থক্য বের করা
      const timeRemaining =   currentDate - saleEndDate;
      // const timeRemaining =    saleEndDate - currentDate;

      const seconds = Math.floor((timeRemaining / 1000) % 60);
      const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
      const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

      // console.log(
      //   `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds remaining`
      // );

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);
  }, []);

  return (
    <div className="container space-y-6 md:w-full lg:w-3/4 xl:w-4/5 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
        {/* image section  */}
        <div className="relative max-w-4xl mx-auto">
          {/* Slides */}
          {product_images && product_images.length > 0 && (
            <div className="overflow-hidden">
              <img
                src={product_images[currentImageIndex]}
                alt={`Product ${currentImageIndex + 1}`}
                className="w-full h-full object-cover  rounded-lg"
              />
            </div>
          )}

          {/* Prev/Next Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              className="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full p-2"
              onClick={handlePrev}
            >
              <FaArrowLeft className="text-2xl" /> {/* Left arrow icon */}
            </button>
            <button
              className="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full p-2"
              onClick={handleNext}
            >
              <FaArrowRight className="text-2xl" /> {/* Right arrow icon */}
            </button>
          </div>

          {/* Dots for Navigation */}
          <div className="absolute w-full flex items-center justify-center px-4">
            {product_images.map((_, index) => (
              <button
                key={index}
                className={`flex-1 w-4 h-2 mt-4 mx-2 mb-0 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-teal-600 hover:shadow-lg ${
                  currentImageIndex === index ? "bg-orange-600" : "bg-teal-300"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* Text Section */}

        <div className="space-y-4 text-base">
          <div className="text-xl md:text-2xl font-bold">{title}</div>
          <DetelsButton text="Write a Review" />

          <div className="flex items-center space-x-2">
            <span className="font-extrabold">3785 sold by</span>
            <span className="text-purple-500">Esther Mensah</span>
            <div className="flex items-center">
              <FaLocationPin className="mx-1 h-4 w-4 text-gray-400" />
              <span className="text-purple-500 font-bold">Accra, GH</span>
            </div>
          </div>

          <PriceSection price={price} />

          <SalesEndSection
            days={timeRemaining.days}
            // hours={timeRemaining.hours}
            minutes={timeRemaining.minutes}
            seconds={timeRemaining.seconds}
          />

          <p>
            <b>Collection:</b> Click & Collect - Select option at checkout
          </p>

          <FreeDeliveryInfo delivery={postage_fee.cents / 100} />

          <DeliveryDate />
          <p>Get a $1.41 credit for late delivery</p>

          <AddToBasketButton onClick={handleAddToBasket} />

          <LaptopDetails laptopDetails={laptopDetails} />

          <ConfidenceSection />
        </div>
      </div>

      {/* Dell Latitude section  */}
      <div className="grid md:grid-cols-2 gap-5 lg:gap-20 ">
        <div>
          <div className="md:h-full space-y-2">
            <div className="space-y-4 border rounded-xl p-2">
              <div className="flex gap-5">
                <span>
                  <GoPerson className="h-16 w-16 border rounded-full text-gray-500" />
                </span>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold tracking-wide">
                    Upfrica
                  </h2>
                  <p className="text-base">
                    <span className="mr-5 text-gray-400">5 followers</span>{" "}
                    <span className="text-green-500">417 Items</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="text-base lg:text-xl font-bold border rounded-3xl w-1/2">
                  <button className="flex items-center gap-4  mx-auto py-2">
                    <span>
                      <FaHeart />
                    </span>
                    <span>Follow</span>
                  </button>
                </div>
                <div className="text-base lg:text-xl font-bold border rounded-3xl w-1/2">
                  <button className="flex flex-col mx-auto py-2">
                    <span>shop all items</span>
                  </button>
                </div>
              </div>
              <div className="   bg-[#A435F0] py-3 rounded-lg w-full flex items-center justify-center">
                <div className="flex items-center gap-2 ">
                  <span>
                    <MdLocalPhone
                      className="h-6 w-6 text-white
              "
                    />
                  </span>
                  <p className="text-white text-base lg:text-xl tracking-wide font-bold">
                    Click to view number
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 py-4">
            <h2 className="text-xl font-medium tracking-wide">
              Customer Review
            </h2>
            <hr />
            <div className="flex justify-center bg-[#f5f5f6] py-6 rounded-2xl">
              <div className="text-base md:text-xl leading-8 text-center p-4">
                <b>Be the first to review this product</b>
                <br />
                <span>
                  (If you have recently purchased this product on Upfrica)
                </span>
                <br />
                <small>Share your thoughts with other customers</small>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 py-4">
          <h2 className="text-xl md:text-2xl font-medium tracking-wide">
            Dell Latitude 3380 Cor.. in Ghana Best Sale Price: Upfrica
          </h2>
          <hr />
          <p className="text-base md:text-xl leading-8">
            Shop Dell Latitude 3380 Core I3 6th Generation .. at everyday low
            prices. Order online today for fast delivery or collect from the
            seller in accra, GH
          </p>
          <p className="text-base md:text-xl leading-8 ">
            This is a Slim 6th Gen. neat Dell latitude 3380 core i3 with
            excellent battery health The laptop comes with SSD 128GB RAM, 4GB
            charger, HDMI, Bluetooth, camera, WiFi connection, USB Ports 13.3"
            screen and processor speed 2.0GHz
          </p>
          <p className="text-xl">
            <span className=" font-bold mr-2">Seller location: </span> accra,
            Ghana
          </p>
        </div>
      </div>
      {/* items related products  */}
      <div>
        <h2 className="text-xl md:text-2xl font-medium text-[#555555]">
          Items related to this Dell Latitude 3380 Core I3 6th Generation 128gb
          Ssd 4gb Ram and their Price in Ghana See more{" "}
          <small className="text-blue-500">see more</small>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-4">
          {datas.map((data, index) => (
            <Details key={index} data={data}></Details>
          ))}
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={5000} theme="dark" />
    </div>
  );
};

export default DetelsProduct;
