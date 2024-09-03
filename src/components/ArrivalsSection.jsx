import React from 'react'
import ArrivalsSingelProducts from './ArrivalsSingelProducts';

export default function ArrivalsSection() {
    const products = [
        {
          image: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBendJQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--ba5cb6fb796f4311949ce46de50e07472e5c3caf/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWl3QmFRSXNBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--3ceea134a3025feae76cb0f22ed85d15b2b1bb6d/Screenshot%202024-08-31%20at%2018.14.50.png",
          id: 1,
          newPrice: 19.99,
          oldPrice: 29.99,
        },
        {
          image: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBelVJQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6b7a9774f2923e0469c9754357cb4e73a965b840/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lKZDJWaWNBWTZCa1ZVT2hOeVpYTnBlbVZmZEc5ZlptbHNiRnNIYVFJc0FXa0NMQUU2REdOdmJuWmxjblE2Q1hkbFluQT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--cfd187e6ae7698456a1e9d0d803437d89557e4a7/s-l1200.webp",
          id: 2,
          newPrice: 14.99,
        },
        {
          image: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeW9JQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0e80103fe0bd107770bae6213b279bc234ceea61/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWl3QmFRSXNBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--3ceea134a3025feae76cb0f22ed85d15b2b1bb6d/Screenshot%202024-08-31%20at%2016.18.14.png",
          id: 3,
          newPrice: 24.99,
          oldPrice: 34.99,
        },
        {
          image: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeG9JQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5bc7abdea300067e0ba7d79787884e08db0c33e7/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWl3QmFRSXNBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--3ceea134a3025feae76cb0f22ed85d15b2b1bb6d/Screenshot%202024-08-31%20at%2015.09.37.png",
          id: 4,
          newPrice: 9.99,
        },
        {
          image: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdzRJQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--14b21d649eedcfd40e47a050e6ac48702996e12b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWl3QmFRSXNBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--3ceea134a3025feae76cb0f22ed85d15b2b1bb6d/Screenshot%202024-08-31%20at%2013.44.26.png",
          id: 5,
          newPrice: 39.99,
          oldPrice: 49.99,
        },
        {
          image: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd1FJQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--008ae27c5b3439704b2c2cb5f780344b6f658dc6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWl3QmFRSXNBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--3ceea134a3025feae76cb0f22ed85d15b2b1bb6d/Screenshot%202024-08-31%20at%2012.35.24.png",
          id: 6,
          newPrice: 12.99,
        },
        {
          image: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK1lIQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--62ecd9f6124ca74aadbf28a8fd12a32066d636cd/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lKZDJWaWNBWTZCa1ZVT2hOeVpYTnBlbVZmZEc5ZlptbHNiRnNIYVFJc0FXa0NMQUU2REdOdmJuWmxjblE2Q1hkbFluQT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--cfd187e6ae7698456a1e9d0d803437d89557e4a7/6B15ED6B-9D9D-48BE-A8FC-5E1926787717.webp",
          id: 7,
          newPrice: 29.99,
          oldPrice: 39.99,
        },
        {
          image: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOTBIQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--a15e7935b6a62f9d33e9e0d44881e4b5539e6c96/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWl3QmFRSXNBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e99d0413c0a2cac1bc7779b07c13f2159cbd0f0f/upfricatricycle.jpg",
          id: 8,
          newPrice: 19.99,
        },
        {
          image: "https://www.upfrica.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOVVIQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--4e0ca35154c1cd44dc47efccc0314e92457841b4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWl3QmFRSXNBVG9NWTI5dWRtVnlkRG9KZDJWaWNBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e99d0413c0a2cac1bc7779b07c13f2159cbd0f0f/upfricamotorblue.jpg",
          id: 9,
          newPrice: 24.99,
          oldPrice: 34.99,
        },
       
      ];
  return (
    <div className='container px-4 py-20 bg-white shadow-2xl'>
        <h1 className='text-3xl font-extrabold tracking-wide'>New Arrivals</h1>
        <div className='flex justify-between'>
            {
                products.map(product => <ArrivalsSingelProducts key={product.id} product={product}></ArrivalsSingelProducts> )
            }
        </div>
    </div>
  )
}
