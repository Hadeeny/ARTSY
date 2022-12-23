import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import bouquet from '../assets/bouquet.png'
import chair from '../assets/chair.png'
import glassman from "../assets/glassman.png";
import flowerhand from "../assets/flowerhand.png";
import redhair from "../assets/redhair.png";
import kangaroo from "../assets/kangaroo.png";
import berryhand from "../assets/berryhand.png";
import redflower from '../assets/redflowers.png'
// import "./index.css";
import "../index.css";
// import required modules
import { Autoplay, EffectCards, EffectFade } from "swiper";

export default function App() {
  return (
    <>
      <div className="w-2 hidden md:block h-[370px] z-[99] bg-white absolute top-[21rem] left-[24%]" />
      <div className="w-2 hidden md:block h-[370px] z-[99] bg-white absolute top-[20rem] left-[50%]" />
      <div className="w-2 hidden md:block h-[370px] z-[99] bg-white absolute top-[20rem] left-[75.5%]" />
      <Swiper
        autoplay={{ delay: 3000 }}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="hidden md:block mt-10 cursor-pointer"
      >
        <SwiperSlide>
          <div className="">
            <img src={flowerhand} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* Nested swiper */}
          <Swiper
            autoplay={{ delay: 3000 }}
            slidesPerView={1}
            dir="rtl"
            spaceBetween={30}
            loop={true}
            modules={[Autoplay]}
            className="hidden md:block mt-10 cursor-pointer"
          >
            <SwiperSlide>
              <div className="">
                <img src={glassman} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={flowerhand} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={redhair} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={kangaroo} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={berryhand} />
              </div>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={redhair} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={kangaroo} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={berryhand} />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* mobile carousel */}
      <section id="slider" className="w-full flex justify-center relative mx-auto my-8 md:hidden">
        <div className='absolute top-0 rotate-6'>
          <img src={bouquet}/>
        </div>
        <div className='absolute top-0 -rotate-6'>
          <img src={bouquet}/>
        </div>
        <div className='absolute top-0'>
          <img className='w-full' src={bouquet}/>
        </div>
      </section>
    </>
  );
}
