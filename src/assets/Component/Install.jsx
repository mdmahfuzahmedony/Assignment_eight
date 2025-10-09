import React from "react";
import star from "../image/star.png";
import dwn from "../image/dwn.png";

const Install = ({ app }) => {
  console.log(app);

  return (
    <div>
      <div className=" py-4 px-3 flex justify-between items-center">
        <div className="flex gap-5">
          <img src={app.image} alt="" />
          <h1>{app.title}</h1>
          <div className="flex gap-4">
            <div className="flex justify-center items-center gap-3">
              <img src={dwn} alt="" />
              <p>sfsfsf</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <img src={star} alt="" />
              <p>sdfds</p>
            </div>
            <p>{app.size}</p>
          </div>
        </div>
        <div>
          <button className="bg-green-500 py-2 px-4 rounded-lg">Uninstall</button>
        </div>


      </div>
    </div>
  );
};

export default Install;
