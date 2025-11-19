import React, { useState } from "react";
import event1 from "../assets/images/event1.png";
import event2 from "../assets/images/event2.png";
import event3 from "../assets/images/event3.png";
import daun from "../assets/images/daun.png";
import near1 from "../assets/images/near1.png";
import near2 from "../assets/images/near2.png";
import near3 from "../assets/images/near3.png";
import near4 from "../assets/images/near4.png";

const Events = () => {
  const events = [
    {
      title: "Waste Workshop",
      desc: "Hands-on sessions to turn waste into something useful and creative. Learn, craft, and discover new perspectives on everyday waste.",
      img: near1,
    },
    {
      title: "Clean-Up Day",
      desc: "Join us as we clean local areas and inspire collective action. A small step for a cleaner neighborhood — and a healthier planet.",
      img: near2,
    },
    {
      title: "Community Talk",
      desc: "Open discussions about sustainable living and environmental awareness. A space to share stories, ideas, and inspiration for a better future.",
      img: near3,
    },
    {
      title: "Swap & Share",
      desc: "Give old things a new home. Swap items, share stories, and support a circular lifestyle that benefits everyone.",
      img: near4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      id="event"
      className="bg-primary rounded-[64px] relative overflow-hidden"
    >
      <div className="absolute top-0 z-0 w-full">
        <img src={daun} alt="" className="w-full opacity-10" />
        <img src={daun} alt="" className="w-full opacity-10" />
        <img src={daun} alt="" className="w-full opacity-10" />
        <img src={daun} alt="" className="w-full opacity-10" />
        <img src={daun} alt="" className="w-full opacity-10" />
      </div>
      <div className="max-w-7xl mx-auto py-24 md:py-32 px-4 ">
        <div>
          <div className="relative">
            <h1 className="text-4xl md:text-5xl text-secondary text-center font-bold mb-16">
              Events
            </h1>
          </div>
          <div className="flex flex-col xs:flex-row items-center  xs:justify-between xs:gap-x-4 gap-y-4 mb-24 ">
            <div className="overflow-hidden relative group">
              <img src={event1} className="w-screen" />
              <div class="hover">
                <p class="text-3xl font-bold text-white">Making Paper</p>
              </div>
            </div>
            <div className="overflow-hidden relative group">
              <img src={event2} className="w-screen" />
              <div class="hover">
                <p class="text-3xl font-bold text-white">Boiling Plastic</p>
              </div>
            </div>
            <div className="overflow-hidden relative group">
              <img src={event3} className="w-screen" />
              <div class="hover">
                <p class="text-3xl font-bold text-white">Fun Game</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative w-full rounded-3xl flex flex-col-reverse md:flex-row justify-between shadow-lg transition-all duration-500 px-12 py-4 z-10">
            <div className="md:w-1/2 flex flex-col text-center justify-between md:text-left w-full md:py-12">
              <div className="flex flex-col pe-8">
                <h2 className="text-3xl md:text-5xl font-bold text-[#2A4540] mb-4">
                  {events[activeIndex].title}
                </h2>
                <p className="text-[#2A4540] text-lg leading-relaxed">
                  {events[activeIndex].desc}
                </p>
              </div>

              <div className="inline-flex bg-[#D9D9D9] md:w-fit rounded-full p-2 gap-x-2 md:gap-x-6 justify-around items-center mt-8 md:me-8">
                {events.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`
                event-btn h-10 rounded-full font-semibold transition-all duration-300 hover:bg-primary/20 hover:w-16
                ${
                  activeIndex === i
                    ? "bg-[#2A4540] text-white w-16"
                    : "text-[#2A4540] w-12"
                }
              `}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:p-0 flex justify-center">
              <img
                src={events[activeIndex].img}
                alt="Event"
                className="rounded-2xl w-[400px] h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
