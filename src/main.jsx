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
        path: "/detelsProduct",
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

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
