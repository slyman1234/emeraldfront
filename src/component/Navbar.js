import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../src/img/logo.png";

function Navbar() {
  return (
    <div className=" h-[80px] bg-[#00001A] flex px-4 justify-between justify-items-center items-center ">
      {" "}
      <div className=" mt-[-20px]">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex text-white justify-between gap-2">
        <Link className="text-[14px] font-[500] leading-[19px] text-[#D4F5F9] font-['Istok']">
          {" "}
          Home{" "}
        </Link>
        <Link className="text-[14px] font-[500] leading-[19px] text-[#D4F5F9] font-['Istok']">
          {" "}
          About Us
        </Link>
        <Link className="text-[14px] font-[500] leading-[19px] text-[#D4F5F9] font-['Istok']">
          {" "}
          Contact Us{" "}
        </Link>
        <Link className="text-[14px] font-[500] leading-[19px] text-[#D4F5F9] font-['Istok']">
          {" "}
          Privacy Policy
        </Link>
      </div>
      <div className="flex text-white justify-between gap-2">
        <Link className="text-[12px] font-[500] leading-[19px] text-[#000] h-[38px] w-[120px] bg-[#D9D9D9] items-center justify-center flex rounded-[40px] font-['Istok']">
          {" "}
          Log In{" "}
        </Link>
        <Link className="text-[12px] font-[500] leading-[19px] text-[#000] h-[38px] w-[120px] bg-[#0096C7] items-center justify-center flex rounded-[40px] font-['Istok']">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
