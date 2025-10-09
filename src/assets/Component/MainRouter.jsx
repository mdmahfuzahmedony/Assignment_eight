import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import { ToastContainer,} from "react-toastify";

const MainRouter = () => {
  return (
    <div className=" mx-auto flex flex-col min-h-screen bg-white ">
      <Navbar></Navbar>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer position="top-center" theme="colored"></ToastContainer>
    </div>
  );
};

export default MainRouter;




