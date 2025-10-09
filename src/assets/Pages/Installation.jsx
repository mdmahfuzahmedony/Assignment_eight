import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // 👈 sort order state

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(storedApps);
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
  };

  // 🔹 Sorting logic
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);

    let sortedApps = [...installedApps];
    if (value === "High-Low") {
      sortedApps.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
    } else if (value === "Low-High") {
      sortedApps.sort((a, b) => parseFloat(a.size) - parseFloat(b.size));
    }

    setInstalledApps(sortedApps);
  };

  return (
    <div className="p-10 max-w-[1300px] mx-auto">
      <h1 className="text-3xl font-bold text-center">Your Installed Apps</h1>
      <p className="text-center text-gray-500 mt-2">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex items-center justify-between  p-3 mt-6 rounded-md">
        <h2 className="text-xl font-semibold">
          ({installedApps.length}) Apps Found
        </h2>

        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="rounded font-bold px-3 py-1 border"
        >
          <option value="">Sort by Size</option>
          <option value="High-Low">High-Low</option>
          <option value="Low-High">Low-High</option>
        </select>
      </div>

      <div className="mt-5 space-y-4 ">
        {installedApps.length === 0 ? (
          <p>No apps installed yet.</p>
        ) : (
          installedApps.map((app) => (
            <div
              key={app.id}
              className="flex justify-between items-center border-1 border-gray-500 p-4 rounded-lg shadow-2xs "
            >
              <div className="flex items-center gap-4 ">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-[60px] h-[60px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold text-lg">{app.title}</h3>
                  <p className="text-sm text-gray-500">{app.size} MB</p>
                  <div className="flex gap-4 text-sm mt-1">
                    <span>⭐ {app.ratingAvg}</span>
                    <span>⬇ {app.downloads}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Installation;
