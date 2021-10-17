import React from "react";
import { Carousel } from "react-bootstrap";
import { FiSend } from "react-icons/fi";

const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item className="slider-1 rounded-xl">
        <h1 className="pt-5 px-3 md:text-6xl text-2xl text-gray-100">
          Original Laptop <br /> big discount
        </h1>
        <h5 className="p-3 text-gray-500">Signup for the daily newsletter</h5>
        <div
          className="bg-white flex justify-between items-center mt-5  mx-4 ps-4 border-green-700"
          style={{ width: "400px", borderRadius: "30px" }}
        >
          <FiSend />
          <input
            type="email"
            className="focus:outline-none"
            placeholder="Your email address"
          />
          <button
            className="bg-green-500 px-4 py-3 rounded-3xl"
            style={{ borderRadius: "30px" }}
          >
            Subscribe
          </button>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-2 rounded-xl">
        <h1 className="pt-5 px-3 md:text-6xl text-2xl text-gray-200">
          Original Laptop <br /> big discount
        </h1>
        <h5 className="p-3 text-gray-500">Signup for the daily newsletter</h5>
        <div
          className="bg-white flex justify-between items-center mt-5 rounded-3xl mx-4 ps-4 border-green-700"
          style={{ width: "400px", borderRadius: "30px" }}
        >
          <FiSend />
          <input
            type="email"
            className="focus:outline-none"
            placeholder="Your email address"
          />
          <button
            className="bg-green-500 px-4 py-3 "
            style={{ borderRadius: "30px" }}
          >
            Subscribe
          </button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
