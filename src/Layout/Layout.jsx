import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
     
    </div>
  );
}
