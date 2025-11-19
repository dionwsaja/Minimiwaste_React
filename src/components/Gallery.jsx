import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import img1 from "../assets/images/gallery/1.png";
import img2 from "../assets/images/gallery/2.png";
import img3 from "../assets/images/gallery/3.png";
import img4 from "../assets/images/gallery/4.png";
import img5 from "../assets/images/gallery/5.png";
import img6 from "../assets/images/gallery/6.png";
import img7 from "../assets/images/gallery/7.png";
import img8 from "../assets/images/gallery/8.png";
import img9 from "../assets/images/gallery/9.png";
import img10 from "../assets/images/gallery/10.png";
import { TbArrowNarrowLeftDashed } from "react-icons/tb";
import { TbArrowNarrowRightDashed } from "react-icons/tb";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  return (
    <div id="gallery">
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-16 md:py-24">
        <h1 className="text-center mb-16 text-4xl md:text-5xl text-primary font-bold">
          GALLERY
        </h1>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {images.map((images, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden group transition-all duration-500 h-full ease-in-out rounded-3xl">
                <img
                  src={images}
                  alt={`strategy-${index + 1}`}
                  className="w-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center text-sm md:text-lg text-primary gap-x-4 pt-8">
          <TbArrowNarrowLeftDashed />
          <p className="">Slide</p>
          <TbArrowNarrowRightDashed />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
