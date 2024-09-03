import React from "react";
import SingelCatagoreProduct from "./SingelCatagoreProduct";

export default function CategoreProduct() {
  const datas = [
    {
      id: 1,
      title: " Speakers Acce... ",
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBemNHQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c7b6801b31bb18ffcffd43fb5da3ca3e26c90a24/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWl3QmFRSXNBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--3ceea134a3025feae76cb0f22ed85d15b2b1bb6d/Screenshot%202024-08-23%20at%2007.41.24.png",
    },
    {
      id: 2,
      title: " Commonly Used... ",
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBalpYIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--de29ac992faefc3068a2fa1e0bc307853a69cf96/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWl3QmFRSXNBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e99d0413c0a2cac1bc7779b07c13f2159cbd0f0f/425.jpg",
    },
    {
      id: 3,
      title: " Plates And Bowls ",
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcTUxIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0422d37dfb7d0b07a4e036f7e02419f967abc6f0/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWl3QmFRSXNBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--3ceea134a3025feae76cb0f22ed85d15b2b1bb6d/Screenshot%202023-09-15%20at%2011.16.50.png",
    },
    {
      id: 4,
      title: " Dinnerware Di... ",
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb2MyIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1e0006fdbf091c7fcc69637a1678e7bb344316e2/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWl3QmFRSXNBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--3ceea134a3025feae76cb0f22ed85d15b2b1bb6d/cera.png",
    },
    {
      id: 5,
      title: " Fabric Textil... ",
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc0E1IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f1377da3d5ebb5d1a098cb8f04cfe6e1f64938fd/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWl3QmFRSXNBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e99d0413c0a2cac1bc7779b07c13f2159cbd0f0f/IMG-20230218-WA0135.jpg",
    },
    {
      id: 6,
      title: " Hammer ",
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaVFWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2a72948914f09307c6150e4b0cd38aa17328e45a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWl3QmFRSXNBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e99d0413c0a2cac1bc7779b07c13f2159cbd0f0f/ah-hwtr_.jpg",
    },
    {
      id: 7,
      title: " Household App... ",
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2Y5IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bcb910e2f71337895e4a7d9cadc18da20a2e489f/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lKYW5CbFp3WTZCa1ZVT2hOeVpYTnBlbVZmZEc5ZlptbHNiRnNIYVFJc0FXa0NMQUU2REdOdmJuWmxjblE2Q1hkbFluQT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--9131f2cc4e102d7d1c165a6edf8ccf37bd2eafc6/IMG_4480.jpeg",
    },
    {
      id: 8,
      title: " Outdoor Lights ",
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaTFlIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d4c77d0a1880945a9d05f5b4eb72b4bbba648d3a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWl3QmFRSXNBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e99d0413c0a2cac1bc7779b07c13f2159cbd0f0f/e49ba540-ba5b-4564-9b65-2afc9ec2b4e4.jpg",
    },
    {
      id: 9,
      title: " Electric Irons ",
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazFNIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a6b849b8a503bb4539982c384098c399a5099b7c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWl3QmFRSXNBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e99d0413c0a2cac1bc7779b07c13f2159cbd0f0f/m367.jpg",
    },
    {
      id: 10,
      title: " Electric Hybr... ",
      image:
        "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdnB1IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--60b9f08d0c8b8897598578d128bf6d5f64aa4b36/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lKZDJWaWNBWTZCa1ZVT2hOeVpYTnBlbVZmZEc5ZlptbHNiRnNIYVFJc0FXa0NMQUU2REdOdmJuWmxjblE2Q1hkbFluQT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--cfd187e6ae7698456a1e9d0d803437d89557e4a7/c-m-b.webp",
    },
  ];
  return (
    <div className="flex gap-3">
      {datas.map((data) => (
        <SingelCatagoreProduct
          key={data.id}
          data={data}
        ></SingelCatagoreProduct>
      ))}
    </div>
  );
}
