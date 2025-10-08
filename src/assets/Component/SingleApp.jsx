import React from "react";
import { NavLink } from "react-router";

const SingleApp = ({ app }) => {
  const { size, reviews, ratingAvg } = app;

  return (
    <div className="bg-base-100 shadow-md rounded-xl overflow-hidden">
      <figure className="h-56">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="App"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="p-5">
        <h2 className="text-xl font-semibold">App size: {size}</h2>
        <p className="text-gray-500 mt-2 text-sm">
          A card component has a figure, a body part, and inside body there are
          title and actions parts.
        </p>
        <div className="flex justify-end mt-3">
          <NavLink to = "/app" className="btn btn-primary">Buy Now</NavLink>
        </div>
      </div>
    </div>
  );
};

export default SingleApp;
