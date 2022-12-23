import {useEffect} from 'react'
import woman from "../assets/woman.png";
import smallman from "../assets/smallman.png";
import bigman from "../assets/bigman.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { EffectFade, Autoplay } from "swiper";

const TopCreators = () => {

  let i = 0
  const images = []
  images[0]= woman
  images[1]= bigman
  images[2]= smallman
 
  const switchImage = ()=>{
    
  }
  
  // useEffect(() => {
  //   setInterval(()=>{
  //     if (i<images.length - 1){
  //       console.log(i+=1)
  //       return i+=1
  //     } else {
  //       console.log(i)
  //      return i = 0
  //     } 
       
  //   }, 3000)
  //   // return ()=> clearTimeout(timeout)  
  // },[])
  

  return (
    <section className="w-full bg-[#E2E2E2] h-[27rem] md:h-[40rem] my-10 px-2 md:px-28 py-10 relative">
      {/* typography */}
      <div className="flex flex-col w-full gap-y-10 md:gap-y-24">
        <h2 className="text-4xl md:text-6xl font-bold max-w-md">
          Top creators of the week
        </h2>
        <p className="md:max-w-3x max-w-max text-sm md:text-2xl z-[100]">
          “Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with colour
          photography. Everything looks more exciting.”– Jack Lowden
        </p>
      </div>
      {/* gray rectangle */}
      {/* <div className="md:w-[50%] w-[73%] md:h-[35rem] h-[30rem]  z-[0] absolute bg-[#D9D9D9] right-[12%] md:right-[10%] -bottom-10"></div> */}
      <div className="absolute right-4 z-[1000] md:right-[10%] -bottom-10">
        <img className="bg-contain w-[23rem] md:w-[35rem]" src={images[i]} />
      </div>
      
      {/* list items */}
      <ul className="hidden md:block absolute z-[400]  top-[5rem] right-[8rem] space-y-8">
        <li className="border-4 px-8 border-transparent cursor-pointer active:border-l-black">
          <div className="text-xl">Editorials</div>
        </li>
        <li className="border-4 px-8 border-transparent cursor-pointer active:border-l-black">
          <div className="text-xl">Fashion</div>
        </li>
        <li className="border-4 px-8 border-transparent cursor-pointer active:border-l-black">
          <div className="text-xl">Lifestyle</div>
        </li>
        <li className="border-4 px-8 flex border-transparent cursor-pointer active:border-l-black">
          <div className="text-xl">Blueprint</div>
        </li>
      </ul>
      <div className="hidden md:block w-1 h-[15rem] rounded-full absolute z-0 top-[5rem] right-[17.25rem] bg-gray-400" />
      <div className="absolute bottom-0 md:bottom-14 right-3 md:right-20">
        <h3 className="text-5xl font-bold">Circa</h3>
        <h3 className="text-[5rem] font-bold">1985</h3>
      </div>
    </section>
  );
};

export default TopCreators;
