import React from "react";
import { NavLink } from "react-router";
import logo from "../image/logo.png";
import github from "../image/github.png"
const Navbar = () => {
  return (
    <div >
      <div className="navbar bg-base-100 py-6 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             <li>Home</li>
             <li>Apps</li>
             <li>Installation</li>
            </ul>
          </div>
          <NavLink to={"/home"} className="btn btn-ghost text-xl">
            <div className="flex gap-3">
              <img src={logo} alt="" />
              <p className="font-bold text-purple-700 text-[16px]">HERO.IO</p>
            </div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLink to={"/home"} className="px-4">Home</NavLink>
            <NavLink to={"/home"} className="px-4">App</NavLink>
            <NavLink to={"/home"} className="px-4">Installation</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to={""}>
            <div className="bg-purple-700 text-white flex gap-4 px-4 py-2 rounded-lg
            "><img src={github} alt="" />
              <p>Contribute</p></div>     
          </NavLink>
        </div> 
      </div>
    </div>
  );
};

export default Navbar;
