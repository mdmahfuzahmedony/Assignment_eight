import React from "react";
import googleplay from "../image/googleplay.png";
import app from "../image/app.png";
import num1 from "../image/num1.png";
import num2 from "../image/num2.png";
import num3 from "../image/num3.png";
import num4 from "../image/num4.png";
import num5 from "../image/num5.png";
import num6 from "../image/num6.png";
import iphn from "../image/Iphone.png";
import HomeProduct from "../Component/HomeProduct";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div>
      <div className=" mx-auto">
        <h1 className="text-center text-[72px] font-bold text-black leading-20 ">
          We Build <br /> <span className="text-purple-500">Productive</span>{" "}
          Apps
        </h1>
        <p className="text-gray-400 text-center text-[16px] mt-4">
          AtHERO.IO we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br /> Our goal is to turn your ideas into digital experiences that
          truly make an impact.
        </p>
        <div className="flex  gap-9 items-center justify-center mt-10">
          <NavLink
            to={"https://play.google.com/store/apps/"}
            className="py-2 px-4 border-2 bg rounded-lg flex gap-2 text-black "
          >
            <img src={googleplay} alt="" />
            Google Play
          </NavLink>
          <NavLink
            to={"https://apps.apple.com/"}
            className="py-2 px-4 border-2 rounded-lg text-black flex gap-2"
          >
            <img src={app} alt="" />
            App Store
          </NavLink>
        </div>
      </div>

      <div className="container  mx-auto flex flex-col md:flex-row items-center justify-center gap-12 pt-16 relative">
        <div className="flex flex-col items-center justify-center gap-7 relative -left-10 md:-left-3">
          <img
            src={num1}
            alt="left icon 1"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 hidden md:block"
          />
          <img
            src={num2}
            alt="left icon 2"
            className="w-20 h-20 -translate-x-10 hidden md:block"
          />
          <img
            src={num3}
            alt="left icon 3"
            className="w-20 h-20 -translate-x-20 hidden md:block"
          />
        </div>

        <div className="relative z-10">
          <img
            src={iphn}
            alt="mobile"
            className="max-w-[300px] md:max-w-[360px] drop-shadow-2xl"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-7 relative left-5 md:left-3">
          <img
            src={num4}
            alt="right icon 1"
            className="w-20 h-20 hidden md:block"
          />
          <img
            src={num5}
            alt="right icon 2"
            className="w-20 h-20 translate-x-10 hidden md:block"
          />
          <img
            src={num6}
            alt="right icon 3"
            className="w-20 h-20 translate-x-20 hidden md:block"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#7B61FF] via-[#9D6EFF] to-[#C471ED] py-15 ">
        <h1 className="text-center font-bold text-[40px]">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-col items-center mx-auto mt-10 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1000px] w-full">
            <div className="text-center  rounded-xl p-6">
              <p className="text-[14px] sm:text-[16px] text-black">
                Total Downloads
              </p>
              <h1 className="text-[48px] sm:text-[64px] lg:text-[84px] font-bold text-white leading-tight">
                29.6M
              </h1>
              <p className="text-[14px] sm:text-[16px] mt-2 text-black">
                21% more than last month
              </p>
            </div>

            <div className="text-center rounded-xl p-6">
              <p className="text-[14px] sm:text-[16px] text-black">
                Active Users
              </p>
              <h1 className="text-[48px] sm:text-[64px] lg:text-[84px] font-bold text-white
               leading-tight">
                906K
              </h1>
              <p className="text-[14px] sm:text-[16px] mt-2 text-black">
                18% more than last month
              </p>
            </div>

            <div className="text-center  rounded-xl p-6">
              <p className="text-[14px] sm:text-[16px] text-black">
                Apps Available
              </p>
              <h1 className="text-[48px] sm:text-[64px] lg:text-[84px] font-bold text-white leading-tight">
                132+
              </h1>
              <p className="text-[14px] sm:text-[16px] mt-2 text-black">
                25% more than last month
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-15  ">
        <h1 className="text-center text-[40px] text-black font-bold">Trending Apps</h1>
        <p className="text-center text-gray-500 mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="max-w-[1300px] mx-auto ">
        <HomeProduct></HomeProduct>
        <div className="flex justify-center items-center mt-3 mb-3">
          <NavLink
            to={"/app"}
            className="py-2 px-7 rounded-lg bg-purple-500 text-white"
          >
            {" "}
            All Apps
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
