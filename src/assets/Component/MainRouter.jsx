import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";

const MainRouter = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>       
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MainRouter;
