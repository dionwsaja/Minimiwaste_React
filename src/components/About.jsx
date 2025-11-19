import React from "react";
import grid from "../assets/images/grid_green.png";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";

const About = () => {
  return (
    <div id="about" className="relative overflow-hidden">
      <div className="absolute -z-10">
        <img
          src={grid}
          alt=""
          className=" object-cover bg-center w-full opacity-25 "
        />
        <img
          src={grid}
          alt=""
          className=" object-cover bg-center w-full opacity-25 "
        />
        <img
          src={grid}
          alt=""
          className=" object-cover bg-center w-full opacity-25 "
        />
        <img
          src={grid}
          alt=""
          className=" object-cover bg-center w-full opacity-25 "
        />
        <img
          src={grid}
          alt=""
          className=" object-cover bg-center w-full opacity-25 "
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-16 md:pt-24 pb-24 text-primary">
        <h1 className="text-center text-4xl md:text-5xl text-primary font-bold mb-16">
          About Us
        </h1>
        <div className="">
          <div className="flex flex-col md:flex-row justify-between md:gap-x-12 items-center mb-8">
            <img src={img1} />
            <div className="py-2 md:py-0">
              <p className="text-2xl font-semibold text-center md:text-left md:text-3xl">
                Simplifying Sustainability
              </p>
              <p className="md:text-xl">
                We make sustainable living easy and accessible for everyone —
                starting from small, intentional steps.{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row-reverse justify-center items-center mb-8 md:gap-x-12 md:text-end">
            <img src={img2} />
            <div className="py-2 md:py-0">
              <p className="text-2xl font-semibold text-center md:text-end md:text-3xl">
                Creating from Waste
              </p>
              <p className="md:text-xl">
                We turn local waste materials into purposeful products and
                creative experiences that inspire change.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:gap-x-12">
            <img src={img3} />
            <div className="py-2 md:py-0">
              <p className="text-2xl font-semibold text-center md:text-left md:text-3xl ">
                Living with Intention
              </p>
              <p className="md:text-xl">
                We believe every choice matters — less waste, more meaning, and
                a better way to live.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
