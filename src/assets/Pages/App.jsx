import React from "react";
import Allapps from "./Allapps";

const App = () => {
  return (
    <div>
      <div className=" text-center">
        <h1 className="text-[48px] font-bold">Our All Applications</h1>
        <p className="text-[20px] font-light text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div className="flex justify-between items-center">
          <p>
            <span></span>Apps Found
          </p>
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search App" />
            </label>
          </div>
        </div>
        <div>
          <Allapps></Allapps>
        </div>
      </div>
    </div>
  );
};

export default App;
