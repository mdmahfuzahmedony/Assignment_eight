import React from "react";
import flogo from "../image/logo.png";
import social from "../image/social.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#001931] py-3">
      <div className="max-w-[1300px] mx-auto  flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img src={flogo} alt="" />
          <p className="text-white font-bold text-[16px]">Hero.IO</p>
        </div>
        <div>
          <p className="text-white font-semibold"> Social link</p>
          <div className="mt-2">
            <img src={social} alt="" />
          </div>
        </div>
      </div>
      <div className="text-center py-4">
        Copyright © 2025 - All right reserved
      </div>
    </div>
  )
}

export default Footer;
