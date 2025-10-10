import React from "react";
import notfound from "../image/notfound.png";
import { NavLink } from "react-router";
const NotFound = () => {
  return (
    <div>
      <div className="py-20">
        <div className="flex justify-center items-center">
          <img src={notfound} alt="" />
        </div>
        <p className="text-center text-[30px] font-bold mt-4 text-black">
          OPPS!! APP NOT FOUND
        </p>
        <p className="text-center text-[16px] text-black ">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <div className="flex justify-center items-center mt-4">
          <NavLink
            to={"/home"}
            className={"py-2 px-3 text-white bg-purple-500 rounded-md"}
          >
            Go Back!
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
