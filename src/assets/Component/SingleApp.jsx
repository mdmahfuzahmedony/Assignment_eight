import React from "react";
import { NavLink } from "react-router";
import star from "../image/star.png";
import dwn from "../image/dwn.png";

const SingleApp = ({ app }) => {
  const { size, reviews, image, ratingAvg, title, companyName, downloads } = app;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden py-3 px-3">
      <figure className="h-56">
        <img
          src={image}
          alt="App"
          className="w-full h-full object-cover rounded-lg"
        />
      </figure>
      <div className="py-2">
        <h2 className="text-xl font-semibold flex text-black">
          {companyName}:<span>{title}</span>
        </h2>

        <div className="flex justify-between items-center mt-3">
          <div className="flex justify-between gap-3 items-center bg-gray-300 rounded-lg py-1 px-2">
            <img src={dwn} alt="" />
            <p className="text-green-600 font-bold">{downloads}</p>
          </div>
          <div className="flex justify-between gap-3 bg-gray-300 rounded-lg py-1 px-2 items-center">
            <img src={star} alt="" />
            <p className="text-orange-700 font-bold">{ratingAvg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleApp;
