import img1 from "../assets/Rectangle1.jpg";
import img2 from "../assets/egyptian.png";
import img3 from "../assets/ramses.png";
import user1 from "../assets/user11.jpg";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import user5 from "../assets/user5.png";
import smallcircle from "../assets/smallcircle.svg";
import arrow from "../assets/arrow.svg";

const Featured = () => {
  return (
    <section className="md:px-14 px-2 mt-[22rem] md:mt-8 relative z-[100]">
      <h2 className="text-xl px-4 md:text-2xl font-bold py-2 md:py-4">Featured products</h2>
      {/* first section */}
      <div
        className="flex flex-col border-transparent 
        md:border-t md:border-black md:flex-row 
             justify-center md:py-10 pt-1 pb-4 px-4 relative"
      >
        <div className="w-full md:w-1/2">
          <img className="relative" src={img1} />
        </div>
        <div className="w-full md:w-1/2 md:px-8 px-0 flex flex-col md:justify-between">
        <div className='absolute top-[10%] md:static flex justify-center w-11/12 '>
         <h3 className=" md:text-black text-white font-bold text-2xl">
            The boolean Egyptian
          </h3>
         </div>
          <p className="text-left max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur dolore reiciendis quibusdam architecto voluptates sed
            obcaecati veritatis ipsam quo incidunt
          </p>
          <div className="flex md:border-none border-b border-black pb-4 space-x-4 mt-4 items-center">
            <div className="flex w-[2rem] mr-[3rem]">
              <img src={user1} />
              <img className="-ml-4" src={user2} />
              <img className="-ml-4" src={user3} />
              <img className="-ml-4" src={user4} />
              <img className="-ml-4" src={user5} />
            </div>
            <div className='px-2 w-[10rem]'><h4 className=''>64 major creators</h4></div>
            <div
              className="flex md:relative absolute top-[30%] md:left-10 
            md:-top-1 right-10 cursor-pointer"
            >
              <img width="50rem" className="md:fill-white" src={smallcircle} />
              <img
                width="30rem"
                className="absolute md:fill-white left-2 top-4 "
                src={arrow}
              />
            </div>
          </div>
        </div>
      </div>
      {/* second section */}
      <div
        className="flex flex-col border-transparent 
        md:border-t md:border-black md:flex-row-reverse 
             justify-center md:py-10 pt-1 pb-4 px-4 my-8 md:my-0 relative"
      >
        <div className="w-full md:w-1/2">
          <img className="relative" src={img2} />
        </div>
        <div className="w-full md:w-1/2 md:px-8 px-0 flex flex-col md:justify-between">
        <div className='absolute top-[10%] md:static flex justify-center w-11/12'>
         <h3 className=" md:text-black text-white font-bold text-2xl">
            Are we there yet
          </h3>
         </div>
          <p className="text-left max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur dolore reiciendis quibusdam architecto voluptates sed
            obcaecati veritatis ipsam quo incidunt
          </p>
          <div className="flex space-x-4 md:border-none border-b border-black pb-4 mt-4 items-center">
            <div className="flex w-[2rem] mr-[3rem]">
              <img src={user1} />
              <img className="-ml-4" src={user2} />
              <img className="-ml-4" src={user3} />
              <img className="-ml-4" src={user4} />
              <img className="-ml-4" src={user5} />
            </div>
            <div className='px-2 w-[10rem]'><h4 className=''>64 major creators</h4></div>
            <div
              className="flex md:relative absolute top-[30%] md:left-10 
            md:-top-1 right-10 cursor-pointer"
            >
              <img width="50rem" className="md:fill-white" src={smallcircle} />
              <img
                width="30rem"
                className="absolute md:fill-white left-2 top-4 "
                src={arrow}
              />
            </div>
          </div>
        </div>
      </div>
      {/* third section */}
      <div
        className="flex flex-col border-transparent 
        md:border-t md:border-black md:flex-row 
             justify-center md:py-10 pt-1 pb-4 px-4 relative"
      >
        <div className="w-full md:w-1/2">
          <img className="relative" src={img3} />
        </div>
        <div className="w-full md:w-1/2 md:px-8 px-0 flex flex-col md:justify-between">
         <div className='absolute top-[10%] md:static flex justify-center w-11/12'>
         <h3 className=" md:text-black text-white font-bold text-2xl">
            Oloibiri 1997
          </h3>
         </div>
          <p className="text-left max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur dolore reiciendis quibusdam architecto voluptates sed
            obcaecati veritatis ipsam quo incidunt
          </p>
          <div className="flex space-x-4 mt-4 md:border-none border-b border-black pb-4 items-center">
            <div className="flex w-[2rem] mr-[3rem]">
              <img src={user1} />
              <img className="-ml-4" src={user2} />
              <img className="-ml-4" src={user3} />
              <img className="-ml-4" src={user4} />
              <img className="-ml-4" src={user5} />
            </div>
            <div className='px-2 w-[10rem]'><h4 className=''>64 major creators</h4></div>
            <div
              className="flex md:relative absolute top-[30%] md:left-10 
            md:-top-1 right-10 cursor-pointer"
            >
              <img width="50rem" className="md:fill-white" src={smallcircle} />
              <img
                width="30rem"
                className="absolute md:fill-white left-2 top-4 "
                src={arrow}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
