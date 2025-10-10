import React, { useState } from "react";
import { NavLink, useParams } from "react-router";
import useHeroApp from "../Hook/useHeroApp";
import dwn from "../image/dwn.png";
import star from "../image/star.png";
import review from "../image/review.png";
import {
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "../Component/NotFound";

const AppDetails = () => {
  const { app, loading } = useHeroApp();
  const { id } = useParams();

  // Button state
  const [isInstalled, setIsInstalled] = useState(false);

  if (loading) {
    return <h1>Loading......</h1>;
  }

  const singleProduct = app.find((appItem) => String(appItem.id) === id);
  if (!singleProduct) {
    return <NotFound></NotFound>;
  }

  const {
    image,
    title,
    companyName,
    reviews,
    ratingAvg,
    downloads,
    ratings,
    size,
    description,
  } = singleProduct;

  const chartData = ratings.map((r) => ({ name: r.name, count: r.count }));

  // 🔹 Button click function
  const buttonChange = () => {
    setIsInstalled(true);
    toast.success(`Yohoo !! ${title} installed successfully`, {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });

    // ...............localstorage

    const existingApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    const isAlreadyInstalled = existingApps.some(
      (app) => app.id === singleProduct.id
    );

    if (!isAlreadyInstalled) {
      const updatedApps = [...existingApps, singleProduct];
      localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    }
  };

  return (
    <div className="p-6  ">

      {/* ---------- App Info Section ---------- */}
      <div className="grid md:grid-cols-5 grid-cols-1 gap-10 mt-20  max-w-[1300px] border-2 rounded-2xl border-gray-100 mx-auto">
        
        {/* Left Image */}
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className="w-[200px] h-[200px] object-cover rounded-lg shadow"
          />
        </div>

        {/* Middle Info */}
        <div className="col-span-2 p-4 ">
          <h1 className="text-[30px] text-center md:text-left font-bold text-black">
            {title}
          </h1>
          <p className="text-center md:text-left mt-2 font-bold text-black">
            Developed by <b>{companyName}</b>
          </p>

          <div className="flex gap-6 justify-start items-center mt-4">
            {/* Downloads */}
            <div className="py-3 px-2 border-2 border-gray-600 rounded-lg text-center">
              <img
                src={dwn}
                alt="downloads"
                className="w-[40px] h-[40px] mx-auto"
              />
              <p className="text-[15px] mt-1 text-black font-bold">Downloads</p>
              <p className="text-[24px] font-bold mt-1 text-black">{downloads}</p>
            </div>

            {/* Rating */}
            <div className="py-3 px-3 text-center border-2 border-gray-600 rounded-lg">
              <img
                src={star}
                alt="rating"
                className="w-[40px] h-[40px] mx-auto"
              />
              <p className="text-[15px] mt-1 text-black font-bold">Avg Rating</p>
              <p className="text-[24px] font-bold mt-1 text-black">{ratingAvg}</p>
            </div>

            {/* Reviews */}
            <div className="py-3 px-3 text-center border-2 border-gray-600 rounded-lg">
              <img
                src={review}
                alt="review"
                className="w-[40px] h-[40px] mx-auto"
              />
              <p className="text-[15px] mt-1 text-black font-bold">Reviews</p>
              <p className="text-[24px] font-bold mt-1 text-black">{reviews}</p>
            </div>
          </div>

          {/* ---------- Install Button ---------- */}
          <div className=" flex justify-start mt-4">
            <NavLink
              to={"/installtion"}
              state={{ installedApp: singleProduct }}
              onClick={buttonChange}
              disabled={isInstalled}
              className={`py-2 px-6 border rounded-[10px] font-bold transition-all duration-300 text-center w-full md:w-auto  ${
                isInstalled
                  ? "bg-gradient-to-r from-[#7B61FF] via-[#9D6EFF] to-[#C471ED] text-white cursor-not-allowed"
                  : "bg-gradient-to-r from-[#7B61FF] via-[#9D6EFF] to-[#C471ED] hover:bg-purple-600 text-white"
              }`}
            >
              {isInstalled ? "Installed" : `Install Now (${size})`}
            </NavLink>
          </div>
        </div>
      </div>

      {/* ---------- Chart Section ---------- */}
      <div className="mt-10  rounded-xl bg-gray-50 shadow-sm max-w-[1300px] mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-black ml-3">Ratings</h3>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
            >
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} reversed />
              <Tooltip />
              <Bar dataKey="count" fill="#FACC15" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-20 max-w-[1300px] mx-auto">
        <h1 className="text-[25px] font-bold text-black">Description</h1>
        <p className="mt-5 text-gray-500">{description}</p>
      </div>

      {/* ---------- Toast Container ---------- */}
      {/* <ToastContainer /> */}
    </div>
  );
};

export default AppDetails;
