import slide1 from "../assets/slideImg1.png";
import arrow from "../assets/arrow.svg";

const Upcoming = () => {
  return (
    <>
      <section className="w-full mt-10 px-8 py-4 bg-gradient-to-r from-[#70B9D8] to-[#C6A788] flex flex-col">
        <div className="">
          <h2 className="hidden md:block text-white text-2xl pb-4">
            See Upcoming Auctions and Exhibitions
          </h2>
          <div className="w-full relative">
            <img className="h-[17rem] md:h-max" src={slide1} />
            <div
              className="flex flex-col gap-y-4 md:px-10 px-2 w-full 
          text-white absolute md:top-[60%] top-3"
            >
              <div className="flex md:space-x-16 space-x-4 items-center">
                <div className="w-4 h-4 rounded-full bg-white" />
                <h3 className="uppercase text-sm md:text-2xl md:max-w-sm max-w-lg  ">
                  Monalisa Redefined in Style
                </h3>
              </div>
              <div className="flex flex-col gap-y-4 md:flex-row items-end justify-between">
                <div className="flex space-x-2 md:space-x-8">
                  <div className="text-md md:text-5xl">01</div>
                  <div className="md:max-w-xl max-w-full space-y-4">
                    <h4 className="uppercase text-sm">
                      starts on: 08:00 gts. Monday
                    </h4>
                    <p className="text-sm">
                      GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                      INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                      HIGHEST AND LOWEST BIDS.
                    </p>
                  </div>
                </div>
                <div className="space-x-8">
                  <a href="#" className="underline">
                    See more
                  </a>
                  <button className="px-6 py-2 border rounded-md border-white">
                    Set reminder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full my-14">
        <div className="px-4 md:px-10 cursor-pointer hover:px-16 duration-500 py-6 border border-transparent border-t-black border-b-black flex justify-between">
          <h2 className="text-2xl font-semibold">Explore marketplace</h2>
          <img src={arrow} />
        </div>
        <div className="px-4 md:px-10 cursor-pointer hover:px-16 duration-500 py-6 border border-transparent border-b-black flex justify-between">
          <h2 className="text-2xl font-semibold">Explore marketplace</h2>
          <img src={arrow} />
        </div>
      </section>
    </>
  );
};

export default Upcoming;
