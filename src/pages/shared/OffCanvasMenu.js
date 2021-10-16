import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaHeadset } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";

const OffCanvasMenu = () => {
  const activeStyle = {
    color: "#3bb77e",
    background: "rgba(209, 250, 229, 90)",
  };
  return (
    <div className="w-100 ">
      <NavLink
        activeStyle={activeStyle}
        to="/home"
        className="text-gray-600 hover:bg-green-100 block p-2 border-bottom "
      >
        Home
      </NavLink>
      <NavLink
        activeStyle={activeStyle}
        to="/shop"
        className="text-gray-600 hover:bg-green-100 block p-2 border-bottom my-3 "
      >
        Shop
      </NavLink>
      <NavLink
        activeStyle={activeStyle}
        to="/vendors"
        className="text-gray-600 hover:bg-green-100 block p-2 border-bottom my-3 "
      >
        Vendors
      </NavLink>
      <NavLink
        activeStyle={activeStyle}
        to="/megaMenu"
        className="text-gray-600 hover:bg-green-100 block p-2 border-bottom my-3 "
      >
        Mega Munu
      </NavLink>
      <NavLink
        activeStyle={activeStyle}
        to="/blog"
        className="text-gray-600 hover:bg-green-100 block p-2 border-bottom my-3 "
      >
        Blog
      </NavLink>
      <NavLink
        activeStyle={activeStyle}
        to="/language"
        className="text-gray-600 hover:bg-green-100 block p-2 border-bottom my-3 "
      >
        Language
      </NavLink>
      <br />
      <h6 className="text-gray-600 mt-3">Follow Us</h6>
      <div className="flex space-x-2 ">
        <span className="bg-green-500 p-2  rounded-circle cursor-pointer">
          <FaFacebookF className="text-white " />
        </span>
        <span className="bg-green-500 p-2  rounded-circle cursor-pointer">
          <BsInstagram className="text-white " />
        </span>
        <span className="bg-green-500 p-2  rounded-circle cursor-pointer">
          <BsTwitter className="text-white " />
        </span>
        <span className="bg-green-500 p-2  rounded-circle cursor-pointer">
          <AiOutlineYoutube className="text-white " />
        </span>
      </div>
      <div className="flex space-x-2 items-center my-5">
        <div>
          <FaHeadset className="text-6xl" />
        </div>
        <div>
          <span className="text-3xl text-green-500">01111111</span>
          <p className="text-sm">24/7 Support Center</p>
        </div>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
