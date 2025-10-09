import React from "react";
import error from "../image/errorimage.png";
import { NavLink } from "react-router";

const Errorpage = () => {
  return (
    <div className="flex items-center justify-center max-w-[1300px] mx-auto mt-30 ">
      <div className=" w-full mx-auto items-center ">
        <div className="flex justify-center">
          <img src={error} alt="" className="te" />
        </div>

        <p className="text-[30px] font-bold text-center">
          Oops, page not found!
        </p>
        <p className="text-center">
          The page you are looking for is not available.
        </p>
        <div className="flex justify-center mt-4">
          <NavLink
            to={"/home"}
            className="py-2 px-4 text-white bg-purple-400 text-center rounded-lg"
          >
            Go back
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
