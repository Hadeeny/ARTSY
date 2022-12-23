import { useState } from "react";
import { increment, decrement, addToCart } from "../features/productSlice";
import egyptian from "../assets/product2.png";
import angle from "../assets/angle.svg";
import like from "../assets/like1.svg";
import like1 from "../assets/like1.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./index.css";
import "../index.css";
// import required modules
import { Navigation } from "swiper";
import {motion} from 'framer-motion'

const ProductDetails = () => {
  const dispatch = useDispatch();
  let { id } = useParams();

  const [showDetails, setShowDetails] = useState(false);
  const [showListing, setShowListing] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [unit, setUnit] = useState(1);
  const { products, cartItems } = useSelector((state) => state.product);
  // const { cartItems } = useSelector((state) => state.cart);

  const prod = products.filter((prod) => prod.id == id);
  const product = prod[0];

  const addToCartHandler = (item, unit) => {
    const cartItem = { ...item, unit };
    dispatch(addToCart(cartItem));
  };

  return (
    <div className="md:px-16 px-2 mb-8">
      {/* page title */}
      <div className="flex my-6 ">
        <Link to={"/"}>
          <h3 className="opacity-30">Home/</h3>
        </Link>
        <Link to={"/marketplace"}>
          <h3 className="opacity-30">Marketplace/</h3>
        </Link>
        <Link to={"/marketplace"}>
          <h3 className="opacity-30">Editorials/</h3>
        </Link>
        <h3 className="opacity-100">{product.title}</h3>
      </div>
      {/* Product Details */}

      <div className="w-full border flex flex-col md:flex-row border-transparent md:border-black">
        <div className="px-2 py-4 border w-full md:w-1/2 border-transparent md:border-r-black">
          <div className="w-full">
            <motion.img src={product.image} className="w-full rounded-none" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="flex px-4 items-center border border-transparent py-4 md:border-b-black justify-between">
              <h2 className="text-3xl font-semibold">{product.title}</h2>
              <h3 className="text-xl font-semibold">{product.price}</h3>
            </div>
            <div className="px-4 space-y-4  py-4">
              <div>
                <span className="text-lg text-gray-800">Creator:</span>
                <span className="text-blue-600 ml-4">Ali Dawa</span>
              </div>
              <h3>Made in Italy</h3>
              <h3>Total views: 1.7k views</h3>
              <div className=" text-xl">
                <button
                  className="text-3xl font-semibold cursor-pointer"
                  onClick={() => {
                    if(unit > 1){
                      setUnit((unit) => unit - 1)
                    }
                  }}
                >
                  -
                </button>{" "}
                <span className="px-6">{unit}</span>
                <button
                  className="text-3xl font-semibold cursor-pointer"
                  onClick={() => setUnit((unit) => unit + 1)}
                >
                  +
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <Link to={"/cart"}>
                  <button
                    onClick={() => addToCartHandler(product, unit)}
                    className="bg-[#3341C1] text-white px-10 py-2"
                  >
                    Add to cart
                  </button>
                </Link>

                <Link>
                  <div className="h-10 w-12 border flex justify-center items-center border-black">
                    <motion.img width="30rem" src={like} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Details */}
          <div>
            <div className="px-4 space-y-4 border border-transparent py-4 border-t-black">
              <div
                onClick={() => {
                  setShowDetails(!showDetails);
                }}
                className="flex justify-between items-center cursor-pointer"
              >
                <h2 className="text-xl font-normal">Details</h2>
                <motion.img
                  className={`duration-500 ${
                    showDetails ? "rotate-180" : "rotate-0"
                  }`}
                  src={angle}
                />
              </div>
              <p className={`${showDetails ? "block" : "hidden"}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur nisi, voluptas magni possimus illo sunt fugit
                voluptatum fuga dignissimos eaque sequi, numquam esse impedit
                quos doloribus ut praesentium eligendi earum!
              </p>
            </div>
            {/* Listing */}
            <div className="px-4 space-y-4 border border-transparent py-4 border-t-black">
              <div
                onClick={() => {
                  setShowListing(!showListing);
                }}
                className="flex justify-between items-center cursor-pointer"
              >
                <h2 className="text-xl font-normal">Listing</h2>
                <motion.img
                  className={`duration-500 ${
                    showListing ? "rotate-180" : "rotate-0"
                  }`}
                  src={angle}
                />
              </div>
              <p className={`${showListing ? "block" : "hidden"}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            {/* Status */}
            <div className="px-4 space-y-4 border border-transparent py-4 border-t-black border-b-black md:border-b-transparent">
              <div
                onClick={() => {
                  setShowStatus(!showStatus);
                }}
                className="flex justify-between items-center cursor-pointer"
              >
                <h2 className="text-xl font-normal">Status</h2>
                <motion.img
                  className={`duration-500 ${
                    showStatus ? "rotate-180" : "rotate-0"
                  }`}
                  src={angle}
                />
              </div>
              <p className={`${showStatus ? "block" : "hidden"}`}>En route</p>
            </div>
          </div>
        </div>
      </div>
      {/* Explore */}
      <div className="p-4 my-12 shadow-lg flex justify-between">
        <h3 className="text-xl font-semibold">
          Explore more from this collection
        </h3>
        <div className="space-x-4"></div>
      </div>
      {/*Similar products Carousel mobile screen */}
      <Swiper
        // autoplay={{ delay: 3000 }}
        slidesPerView={"auto"}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mt-10 md:hidden cursor-pointer"
      >
        {products.map((product, i) => {
          return (
            <SwiperSlide>
              <Link key={i} to={`/marketplace/details/${product.id}`}>
                <div className="p-2 space-y-4 cursor-pointer  border border-black bg-white">
                  <div className="w-full">
                    <motion.img src={product.image} className="w-full" />
                  </div>
                  <div className="flex flex-row gap-y-3 pb-4 justify-between">
                    <h3>{product.title}</h3>
                    <h3>{product.price}</h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* swipper for desktop screen */}
      <Swiper
        // autoplay={{ delay: 3000 }}
        slidesPerView={4}
        spaceBetween={30}
        loop={false}
        pagination={{
          clickable: true,
        }}
        // modules={[Autoplay]}
        className="hidden mt-10 md:block cursor-pointer"
      >
        {products.map((product, i) => {
          return (
            <SwiperSlide>
              <Link key={i} to={`/marketplace/details/${product.id}`}>
                <div className="p-2 space-y-4 cursor-pointer  border border-black bg-white">
                  <div className="w-full flex justify-end">
                    <motion.img width="30rem" src={like1} />
                  </div>
                  <div className="w-full">
                    <motion.img src={product.image} className="w-full" />
                  </div>
                  <div className="flex flex-row gap-y-3 pb-4 justify-between">
                    <h3>{product.title}</h3>
                    <h3>{product.price}</h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* Explore all */}
      <div className="text-center my-10">
        <button className="px-4 py-2 border border-blue-300 text-gradient-to-r from-blue-500 to-red-500">
          Expolore all
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
