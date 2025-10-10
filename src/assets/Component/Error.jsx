import React from "react";
import error from "../image/errorimage.png";

const Error = () => {
  return (
    <div className="max-w-[1300px] mx-auto border text-center">
      <img src={error} alt="" />
      <h1 className="text-black">Oops, page not found!</h1>
      <p className="text-black">The page you are looking for is not available.</p>
      <NavLink to={"/home"} className="py-2 px-5 bg-[#9F62F2] text-white">
        Go Back!
      </NavLink>
    </div>
  );
};

export default Error;
