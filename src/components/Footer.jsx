import React from "react";
import pohon from "../assets/images/pohon.png";
import logo from "../assets/logo/logo_white.png";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-secondary">
      <footer className="w-full relative">
        <div className="flex overflow-hidden">
          <img src={pohon} alt="" className="md:w-[500px]" />
          <img src={pohon} alt="" className="md:w-[500px]" />
          <img src={pohon} alt="" className="md:w-[500px]" />
          <img src={pohon} alt="" className="md:w-[500px]" />
          <img src={pohon} alt="" className="md:w-[500px]" />
          <img src={pohon} alt="" className="md:w-[500px]" />
        </div>

        <div className="bg-[#2A4540]">
          <div className="max-w-7xl mx-auto block md:hidden">
            <div className="flex flex-col md:flex-row justify-between px-6 py-16">
              <div className="flex flex-col-reverse">
                <div className="flex gap-x-4 justify-center md:flex-col py-8 gap-y-4 text-secondary">
                  <a href="#home">Home</a>
                  <a href="#about">About Us</a>
                  <a href="#events">Events</a>
                  <a href="#gallery">Gallery</a>
                  <a href="#contact">Contact Us</a>
                </div>

                <div className="flex justify-center">
                  <img src={logo} alt="" className="w-20" />
                </div>
              </div>

              <div className="flex flex-col gap-y-4 text-left md:text-right py-8 px-11 text-secondary">
                <a href="#contact">
                  Sent Us Message <i className="fa-solid fa-arrow-right"></i>
                </a>
                <a href="#">+62-123-4567-89</a>
                <p>Based in Surabaya, East Java, Indonesia</p>

                <a
                  href="https://www.instagram.com/minimiwaste/"
                  target="_blank"
                  className="flex items-center gap-x-2"
                >
                  <FaInstagram /> Instagram
                </a>
              </div>
            </div>

            <div className="w-full bg-[#1C332F] px-6 py-3">
              <p className="flex items-center justify-center gap-x-2">
                <FaRegCopyright />
                2025 Minimiwaste. All Right Reserved
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto hidden md:block">
            <div className="flex flex-col md:flex-row justify-between  px-6 py-32 ">
              <div className="flex flex-col pe-52  gap-x-4 justify-center  gap-y-4">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#events">Events</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact Us</a>
              </div>
              <div className="min-h-full bg-green-950/50 w-0.5 hidden md:block"></div>
              <div className="flex flex-col items-center justify-center gap-y-8">
                <img src={logo} alt="" className="w-[120px]" />
                <div className="text-secondary">
                  <a
                    href="https://www.instagram.com/minimiwaste/"
                    target="_blank"
                    className="flex items-center gap-x-2"
                  >
                    <span>
                      <FaInstagram />
                    </span>
                    Instagram
                  </a>
                </div>
              </div>
              <div className="min-h-full bg-green-950/50 w-0.5 hidden md:block"></div>
              <div className="flex flex-col gap-y-4 text-left md:text-right py-4">
                <a href="#contact">
                  Sent Us Message{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </a>
                <a href="#">+62-123-4567-89</a>
                <p>Based in Surabaya, Easy Java, Indonesia</p>
              </div>
            </div>
            <div className="w-full  absolute bottom-0 left-0 bg-[#1C332F] px-6 py-2">
              <div className="max-w-7xl mx-auto">
                <p className="flex items-center gap-x-2">
                  <span>
                    <FaRegCopyright />
                  </span>
                  2025 Minimiwaste. All Right Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
