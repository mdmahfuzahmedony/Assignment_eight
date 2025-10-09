import React, { useState } from "react";
import Allapps from "./Allapps";
import useHeroApp from "../Hook/useHeroApp";

const App = () => {
  const { app, loading } = useHeroApp(); // ✅ loading ও নিচ্ছি
  const [searchTerm, setSearchTerm] = useState(""); // ✅ useState ঠিক করা হয়েছে



  // 🔍 Filter logic
  const filteredApps = app.filter((singleApp) =>
    singleApp.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(filteredApps);

  // 🕐 Loading state দেখানোর জন্য
  if (loading) {
    return <h1 className="text-center text-xl font-semibold mt-20">Loading...</h1>;
  }

  return (
    <div className="text-center px-4">
      {/* ---------- Heading ---------- */}
      <h1 className="text-[40px] font-bold mt-10">Our All Applications</h1>
      <p className="text-[18px] font-light text-[#627382] mt-2">
        Explore all the apps developed by us — we code for millions!
      </p>

      {/* ---------- Search Bar & Count ---------- */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
        <p className="text-gray-700 font-medium">
          <span>({filteredApps.length})</span> Apps Found
        </p>

        <div className="relative w-full md:w-80">
          <input
            type="search"
            placeholder="Search App..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
      <div className="mt-10">
        {filteredApps.length > 0 ? (
          <Allapps app={filteredApps} />
        ) : (
          <p className="text-center text-red-500 mt-10 text-lg font-semibold">
            App not found 😢
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
