import React from "react";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="banner py-5">
      <div className="md:w-9/12 w-11/12 row mx-auto">
        <div className="col-lg-12 col-12">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Banner;
