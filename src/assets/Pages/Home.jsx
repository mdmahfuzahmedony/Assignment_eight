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
          <button className="py-2 px-4 border rounded-lg flex gap-2">
            <img src={googleplay} alt="" />
            Google Play
          </button>
          <button className="py-2 px-4 border rounded-lg flex gap-2">
            <img src={app} alt="" />
            App Store
          </button>
        </div>
      </div>
      <div className="container  mx-auto flex flex-col md:flex-row items-center justify-center gap-12 pt-16 relative">
        <div className="flex flex-col items-center justify-center gap-7 relative -left-10 md:-left-3">
          <img src={num1} alt="left icon 1" className="w-20 h-20" />
          <img
            src={num2}
            alt="left icon 2"
            className="w-20 h-20 -translate-x-10"
          />
          <img
            src={num3}
            alt="left icon 3"
            className="w-20 h-20 -translate-x-20"
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
          <img src={num4} alt="right icon 1" className="w-20 h-20" />
          <img
            src={num5}
            alt="right icon 2"
            className="w-20 h-20 translate-x-10"
          />
          <img
            src={num6}
            alt="right icon 3"
            className="w-20 h-20 translate-x-20"
          />
        </div>
      </div>
      <div className="bg-[#8C52ED] py-15 ">
        <h1 className="text-center font-bold text-[40px]">
          Trusted by Millions, Built for You
        </h1>

        <div className="flex justify-center mx-auto mt-10">
          <div className="grid grid-cols-3 gap-10 max-w-[1000px] w-full p-5 ">
            <div className=" text-center">
              <p className="text-[16px]">Total Downloads</p>
              <h1 className="text-[84px] font-bold ">29.6M</h1>
              <p className="text-[16px] mt-3">21% more than last month</p>
            </div>
            <div className=" text-center">
              <p className="text-[16px]">Total Downloads</p>
              <h1 className="text-[84px] font-bold ">906K</h1>
              <p className="text-[16px] mt-3">21% more than last month</p>
            </div>
            <div className=" text-center">
              <p className="text-[16px]">Total Downloads</p>
              <h1 className="text-[84px] font-bold ">132+</h1>
              <p className="text-[16px] mt-3">21% more than last month</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-15  ">
        <h1 className="text-center text-[40px] font-bold">Trending Apps</h1>
        <p className="text-center mt-2">Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="max-w-[1300px] ">
          <HomeProduct></HomeProduct>
        </div>


    </div>
  );
};

export default Home;
