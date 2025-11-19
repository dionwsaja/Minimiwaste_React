import React from "react";

const HeroSection = () => {
  return (
    <div className="text-white">
      <div className="max-w-7xl mx-auto pt-36  px-4 ">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-3xl md:text-7xl mb-3">
            Simple Steps to a <br /> Cleaner Future.
          </h1>
          <p className="text-[16px] xs:text-xl md:text-2xl">
            At Minimiwaste, we believe everyone deserves an easier way to live
            consciously. Start <br className="hidden md:block" /> your journey
            toward a better planet with less waste, more intention, and zero
            guilt.
          </p>
          <div className="flex items-center justify-center gap-x-4 pt-4 xs:pt-16">
            <a href="" className="button-3">
              <span className="z-10 text-sm md:text-lg">Collab With us</span>
            </a>
            <a href="" className="button-4">
              <span className="z-10 text-sm md:text-lg">Our Events</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
