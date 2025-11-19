import React from "react";
import Navbar from "./Navbar";
import HeroSection from "../Sections/HeroSection";
import bg from "../assets/images/header.png";
import NearEvent from "./NearEvent";

const Header = () => {
  return (
    <div className="relative h-[95vh] pb-64">
      <div className="absolute inset-0 rounded-b-[64px] overflow-hidden -z-30">
        <img
          src={bg}
          className="h-full w-full object-cover bg-center"
          alt="Header Background"
        />
      </div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Header;
