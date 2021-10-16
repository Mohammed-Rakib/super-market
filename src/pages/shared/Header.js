import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div>
      <div className="lg:block hidden border-bottom ">
        <div className=" w-9/12 mx-auto ">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="left-column flex ">
              <Link to="/about">About Us</Link>
              <Link to="/">My Account</Link>
              <Link to="/">Wishlist</Link>
              <Link to="/">Order Tracking</Link>
            </div>

            <span>Need help? Call Us: + 880100000000</span>
          </div>
        </div>
      </div>
      <div className="lg:hidden block  common-bg text-center text-white">
        <p className="py-2" style={{ fontSize: ".9rem" }}>
          Grand opening up to 15% off all items. Only 3 days left
        </p>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
