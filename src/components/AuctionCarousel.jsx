import React, { useRef, useState } from "react";
// Import Swiper React components
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import womansunset from "../assets/sunsetwoman.png";
import lamp from "../assets/lamp.png";
import cloths from "../assets/cloths.png";

// import "./index.css";
import "../index.css";
// import required modules
import { Pagination } from "swiper";
import Livebid from "../pages/Livebid";

const AuctionCarousel = () => {
  const [selectedId, setSelectedId] = useState(null);
  const auction = [
    { image: womansunset, id: 1 },
    { image: lamp, id: 2 },
    { image: cloths, id: 3 },
  ];

  const closeBid = () => {
    setSelectedId(null);
  };
  return (
    <>
      <div className="w-11/12 mx-auto md:hidden">
        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mt-10 cursor-pointer"
        >
          <SwiperSlide>
            <div className="relative">
              <div className="">
                <motion.img src={womansunset} />
              </div>
              <div className="absolute bottom-10  w-full flex justify-center">
                <div className="text-xl backdrop-blur-lg rounded-lg px-6 py-2 bg-white">
                  6h:10mins:15s
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <motion.img src={lamp} />
              <div className="absolute bottom-10 w-full flex justify-center">
                <div className="text-xl backdrop-blur-lg border border-white rounded-lg px-6 py-2 bg-white">
                  6h:40mins:15s
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <motion.img src={cloths} />
              <div className="absolute bottom-10 w-full flex justify-center">
                <div className="text-xl backdrop-blur-lg border border-white rounded-lg px-6 py-2 bg-white">
                  6h:40mins:15s
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden md:block w-11/12 mx-auto">
        <Swiper
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mt-10 cursor-pointer"
        >
          {/* <Link to={'/livebids'}> */}
          {auction.map((auc, i) => {
            return (
              <SwiperSlide key={i}>
                <motion.div
                  layoutId={auc.id}
                  onClick={() => {
                    setSelectedId(auc.id);
                  }}
                  className="relative"
                >
                  {/* <Link to={"/livebids"}> */}
                  <motion.div className="">
                    <motion.img src={auc.image} />
                  </motion.div>
                  {/* </Link> */}
                  <motion.div className="absolute bottom-10 w-full flex justify-center">
                    <motion.div className="text-2xl backdrop-blur-lg border border-white rounded-lg px-8 py-4 bg-white">
                      6h:10mins:15s
                    </motion.div>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <AnimatePresence>
          {selectedId && (
            <Livebid
              selectedId={selectedId}
              auction={auction}
              handleClose={closeBid}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AuctionCarousel;
