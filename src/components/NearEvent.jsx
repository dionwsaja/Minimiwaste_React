import React from "react";
import paper from "../assets/images/paper.png";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const NearEvent = () => {
  return (
    <div className="px-4 -mt-64">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl px-4 py-8">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="flex flex-col gap-y-4 md:gap-y-16">
            <div className="text-primary">
              <h1 className="text-3xl font-bold">Near Event - Papercycle </h1>
              <p className="flex items-center gap-2">
                <span>
                  <FaCalendarAlt />
                </span>{" "}
                Saturday, December 13th 2025
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <FaLocationDot />
                </span>{" "}
                Taman Prestasi Surabaya
              </p>
            </div>
            <div className="pe-32">
              <p className="text-lg md:text-xl">
                A creative workshop that transforms used paper into new,
                handmade creations. Learn the art of recycling and discover how
                waste can have a second life.
              </p>
            </div>
            <a href="">
              <div className="button-3 w-fit ">
                <span className="z-10">Register Now</span>
              </div>
            </a>
          </div>
          <div>
            <img src={paper} alt="" className="w-screen md:w-[500px] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearEvent;
