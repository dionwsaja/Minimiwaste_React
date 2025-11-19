import React, { useState, useEffect } from "react";
import logo from "../assets/logo/logo_white.png";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        controls.start({
          rotate: -90,
          transition: { duration: 0.25, ease: "easeInOut" },
        });
      }, 300);
      return () => clearTimeout(timer);
    } else {
      controls.start({ rotate: 0, transition: { duration: 0.2 } });
    }
  }, [isOpen, controls]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // scroll 10px = aktif
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["about", "event", "gallery", "contact"];

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-primary/50 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center py-4 px-4">
        <div>
          <a href="/">
            <img src={logo} alt="logo_white" className="w-24" />
          </a>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center justify-around gap-x-8 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white transition-all ">
            <a
              href="#about"
              className={`px-4 py-2 rounded-full transition-all ${
                activeSection === "about"
                  ? "bg-primary text-white"
                  : "bg-transparent hover:bg-white/20"
              }`}
            >
              About Us
            </a>

            <a
              href="#event"
              className={`px-4 py-2 rounded-full transition-all ${
                activeSection === "event"
                  ? "bg-primary text-white"
                  : "bg-transparent hover:bg-white/20"
              }`}
            >
              Events
            </a>

            <a
              href="#gallery"
              className={`px-4 py-2 rounded-full transition-all ${
                activeSection === "gallery"
                  ? "bg-primary text-white"
                  : "bg-transparent hover:bg-white/20"
              }`}
            >
              Gallery
            </a>

            <a
              href="#contact"
              className={`px-4 py-2 rounded-full transition-all ${
                activeSection === "contact"
                  ? "bg-primary text-white"
                  : "bg-transparent hover:bg-white/20"
              }`}
            >
              Contact
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <a href="/" className="button-1">
            <span className="z-10">Join Us</span>
          </a>
        </div>
        <div
          className={`block md:hidden cursor-pointer ${
            scrolled ? "bg-transparent p-1" : "bg-primary rounded-xl p-1"
          }`}
          onClick={() => setIsOpen(true)}
        >
          <HiMiniBars3BottomRight className="text-white text-4xl" />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-screen bg-primary z-50 flex flex-col  items-end px-8 py-36 md:hidden"
            >
              <motion.button
                animate={controls}
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white text-3xl font-light cursor-pointer "
              >
                <RxCross2 />
              </motion.button>
              <nav className="flex flex-col gap-12 text-xl text-end text-white">
                <a href="/">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-[140px] absolute top-6 left-4"
                  />
                </a>
                <a id="navList" href="#about" className="relative">
                  About Us
                </a>
                <a id="navList" href="#event" className="relative">
                  Events
                </a>
                <a id="navList" href="#gallery" className="relative">
                  Gallery
                </a>
                <a id="navList" href="#contact" className="relative">
                  Contact
                </a>
                <a id="navList" href="/" className="button-2">
                  <span className="z-10">Join Us</span>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Navbar;

{
  /* <div
  class="flex items-center justify-center w-screen min-h-[400px] bg-cover bg-center bg-no-repeat rounded-md"
  style="background-image: url('https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&auto=format&fit=crop&q=90');"
>
  <button class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-4 py-2 text-white text-sm font-medium rounded-lg bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
    Button
  </button>
</div>; */
}
