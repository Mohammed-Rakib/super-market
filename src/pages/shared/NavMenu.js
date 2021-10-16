import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHeadset } from "react-icons/fa";

const NavMenu = () => {
  const activeStyle = {
    color: "#3bb77e",
    fontWeight: "bold",
  };
  return (
    <div className=" my-3 md:flex justify-between items-center hidden  ">
      <div className="flex space-x-7 items-center">
        <Link
          to="/"
          className="my-3  bg-green-400 text-white text-center p-2 rounded"
        >
          Browse All Categories
        </Link>
        <NavLink
          activeStyle={activeStyle}
          to="/home"
          className="text-gray-600 my-3 "
        >
          Home
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          to="/shop"
          className="text-gray-600  my-3 "
        >
          Shop
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          to="/vendors"
          className="text-gray-600  my-3 "
        >
          Vendors
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          to="/megaMenu"
          className="text-gray-600  my-3 "
        >
          Mega Munu
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          to="/blog"
          className="text-gray-600  my-3 "
        >
          Blog
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          to="/language"
          className="text-gray-600  my-3 "
        >
          Language
        </NavLink>
      </div>
      <div className="lg:flex space-x-2 items-center justify-center hidden ">
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

export default NavMenu;
