import React from "react";
import { NavLink } from "react-router";
import star from "../image/star.png";
import dwn from "../image/dwn.png";

const SingleApp = ({ app }) => {
  const { image, ratingAvg,title,downloads,id } = app;

  return (
   <NavLink
  to={`/apps/${id}`}
  className="bg-white shadow-md rounded-xl overflow-hidden py-2 px-3 transform transition-all duration-300 hover:scale-[1.04] hover:shadow-xl hover:-translate-y-1"
>
  <figure className="h-56">
    <img
      src={image}
      alt="App"
      className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:opacity-90"
    />
  </figure>

  <div className="py-2">
    <h2 className="text-[20px] font-semibold flex text-black">
      <span>{title}</span>
    </h2>

    <div className="flex justify-between items-center mt-3">
      <button className="flex justify-between gap-3 items-center bg-gray-300 rounded-lg py-1 px-2 transition-colors duration-300 hover:bg-gray-400">
        <img src={dwn} alt="" />
        <p className="text-green-600 font-bold">{downloads}</p>
      </button>
      <div className="flex justify-between gap-3 bg-gray-300 rounded-lg py-1 px-2 items-center transition-colors duration-300 hover:bg-gray-400">
        <img src={star} alt="" />
        <p className="text-orange-700 font-bold">{ratingAvg}</p>
      </div>
    </div>
  </div>
</NavLink>

  );
};

export default SingleApp;
