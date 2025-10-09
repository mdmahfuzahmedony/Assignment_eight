import React from "react";
import star from "../image/star.png";
import dwn from "../image/dwn.png";

const Install = ({ app }) => {
  return (
    <div>
      <div className=" py-4 px-3 flex  justify-between items-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-all duration-300">
        <div className="flex gap-5">
          <img src={app.image} alt="" />
          <h1>{app.title}</h1>
          <div className="flex gap-4">
            <div className="flex justify-center items-center gap-3">
              <img src={dwn} alt="" />
            </div>
            <div className="flex justify-center items-center gap-3">
              <img src={star} alt="" />
            </div>
            <p>{app.size}</p>
          </div>
        </div>
        <div>
          <button className="bg-green-500 py-2 px-4 rounded-lg">
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default Install;
