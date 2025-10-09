import React, { useState } from "react";
import Allapps from "./Allapps";
import useHeroApp from "../Hook/useHeroApp";
import found from "../image/notfound.png"
const App = () => {
  const { app, loading } = useHeroApp(); 
  const [searchTerm, setSearchTerm] = useState(""); 



  // 🔍 Filter logic
  const filteredApps = app.filter((singleApp) =>
    singleApp.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


 
  if (loading) {
    return <h1 className="text-center text-xl font-semibold mt-20">Loading...</h1>;
  }

  return (
    <div className="text-center px-4 ">
      {/* ---------- Heading ---------- */}
      <h1 className="text-[40px] font-bold text-black mt-10">Our All Applications</h1>
      <p className="text-[18px] font-light text-gray-400 mt-2">
        Explore all the apps developed by us — we code for millions!
      </p>

      {/* ---------- Search Bar & Count ---------- */}
      <div className="flex flex-col md:flex-row justify-between  items-center gap-4 mt-8 max-w-[1300px] mx-auto">
        <p className="text-black font-medium">
          <span className="text-black">({filteredApps.length})</span> Apps Found
        </p>

        <div className="relative w-full border-black border-2 rounded-lg  md:w-80 max-w-[1300px]">
          <input
            type="search"
            placeholder="Search App..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-black py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <svg
            className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
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
        </div>
      </div>

      {/* ---------- Apps Grid / Not Found ---------- */}
      <div className="mt-10 ">
        {filteredApps.length > 0 ? (
          <Allapps app={filteredApps} />
        ) : (
          <p className="flex justify-center items-center py-10">
            <div>
              <img src={found} alt="" />
            </div>
            
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
