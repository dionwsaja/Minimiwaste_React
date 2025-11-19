import React from "react";
import img from "../assets/images/contact.jpg";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="max-w-7xl mx-auto z-30 px-6 py-16">
      <div className="md:hidden">
        <div className="bg-linear-to-tr from-[#2A4540] to-[#68AB9F] rounded-3xl p-8 py-16">
          <h1 className="text-center mb-8 font-bold text-3xl text-white">
            Contact Us
          </h1>

          <ContactForm />
        </div>
      </div>

      <div className="hidden md:block py-16">
        <div className="flex flex-col md:flex-row overflow-hidden rounded-[30px] bg-linear-to-tr from-[#2A4540] to-[#68AB9F] shadow-xl">
          <div className="relative md:w-1/2 flex items-center justify-center text-center text-white p-12">
            <img
              src={img}
              alt="contact"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-[#2A4540]/50" />

            <div className="relative z-10">
              <h2 className="text-5xl font-extrabold mb-4">
                Send Your Message
              </h2>
              <p className="text-xl">Be part of Our Sustainability Program</p>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col justify-center px-16 py-10">
            <h3 className="text-4xl font-bold text-center text-white mb-8">
              Contact Us
            </h3>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
