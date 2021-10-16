import React from "react";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="banner py-5">
      <div className="w-9/12 row mx-auto">
        <div className="col-lg-9 col-12">
          <Slider />
        </div>
        <div className="col-lg-3 lg:block hidden">
          <img
            src="https://tech2sports.com/wp-content/uploads/2021/06/e0nk-pdxeaa1fy6.jpg"
            alt=""
            className="img-fluid rounded-xl h-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
