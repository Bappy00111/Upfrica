import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./components/Home.jsx";
import DetelsProduct from "./components/DetelsProduct.jsx";
import CatagoreDetels from "./components/CatagoreDetels.jsx";
import SingUp from "./components/SingUp.jsx";
import Login from "./components/Login.jsx";
import CartProduct from "./components/CartProduct.jsx";
import Checkout from './components/Checkout';
import AddNewProducts from "./components/AddNewProducts.jsx";
import DrafPage from "./components/DrafPage.jsx";
import User from "./components/User.jsx";
import UserOutLate from "./components/UserOutLate.jsx";
import UserContent from "./components/UserContent.jsx";
import UserEdit from "./components/UserEdit.jsx";
import DashBoard from "./components/DashBoard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detelsProduct/:id",
        element: <DetelsProduct />,
      },
      {
        path: "/catagoreDetels",
        element: <CatagoreDetels />,
      },
      {
        path: "/cartProdct",
        element: <CartProduct />,
      },
      {
        path: "/addNewProducts",
        element: <AddNewProducts/>,
      },
      {
        path: "/drafPage",
        element: <DrafPage/>,
      },
     
    ],
  },
  {
    path: "/singUp",
    element: <SingUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/checkout",
    element: <Checkout/>,
  },
  {
    path: "/user",
    element: <UserOutLate/>,
    children:[
      {
        path:'',
        element: <UserContent/>
      },
      {
        path:'dashboard',
        element: <DashBoard/>
      },
      {
        path:'UserEdit',
        element: <UserEdit/>
      },
    ]
   
  },


]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
