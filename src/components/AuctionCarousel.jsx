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
import womanmobile from "../assets/womanMobile.png";
import lamp from "../assets/lamp.png";
import cloths from "../assets/cloths.png";

// import "./index.css";
import "../index.css";
// import required modules
import { Pagination } from "swiper";
import Livebid from "../pages/Livebid";

const AuctionCarousel = ({
  data,
  bid1,
  bid2,
  bid3,
  bid1ref,
  bid2ref,
  bid3ref,
}) => {
  const [selectedId, setSelectedId] = useState(null);
  const auction = [
    { image: womansunset, image2: womanmobile, id: 1, bid: bid1, ref: bid1ref },
    { image: lamp, id: 2, image2: womanmobile, bid: bid2, ref: bid2ref },
    { image: cloths, id: 3, image2: womanmobile, bid: bid3, ref: bid3ref },
  ];

  const closeBid = () => {
    setSelectedId(null);
  };
  return (
    <>
      {/* Carousel for mobile */}
      <div className="w-11/12 mx-auto md:hidden">
        <AnimatePresence>
          {selectedId && (
            <Livebid
              selectedId={selectedId}
              auction={auction}
              handleClose={closeBid}
              data={data}
            />
          )}
        </AnimatePresence>
        <Swiper
          slidesPerView={"auto"}
          // centeredSlides={false}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mt-10 cursor-pointer"
        >
          {auction.map((auc, i) => {
            return (
              <SwiperSlide key={i}>
                <div
                  layoutId={auc.id}
                  onClick={() => {
                    setSelectedId(auc.id);
                  }}
                  className="relative"
                >
                  <div className="w-full">
                    <motion.img src={auc.image} />
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 mx-auto  w-10/12">
                    <div className="text-md text-center bg-white/30 rounded-md py-2 text-white">
                      6h:10mins:15s
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* Carousel for desktop */}
      <div className="hidden md:block w-11/12 mx-auto">
        <AnimatePresence>
          {selectedId && (
            <Livebid
              selectedId={selectedId}
              auction={auction}
              handleClose={closeBid}
              data={data}
            />
          )}
        </AnimatePresence>
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
                  <motion.div className="absolute bottom-6 w-10/12 left-0 right-0 mx-auto">
                    <motion.div className="text-2xl bg-gray-400/30 border rounded-lg text-center py-4 text-white">
                      6h:10mins:15s
                    </motion.div>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default AuctionCarousel;
