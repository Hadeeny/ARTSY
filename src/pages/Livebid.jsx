import { useState, useRef } from "react";
import redlike from "../assets/redlike.svg";
import send from "../assets/sendbutton.svg";
import Users from "../components/Users";
import { motion } from "framer-motion";
import { addDoc } from "firebase/firestore";
import { useSelector } from "react-redux";

const Livebid = ({ selectedId, auction, handleClose, data }) => {
  const { user } = useSelector((state) => state.product);
  const [bids, setBids] = useState("");
  const som = auction.filter((auc) => auc.id == selectedId);

  const info = som[0];
  const sendBid = async () => {
    await addDoc(info.ref, {
      text: bids,
      createdAt: Date.now(),
      username: user.email,
    });
    textFocus.current.scrollIntoView({ behavior: "smooth" });
  };

  const textFocus = useRef();
  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 1, scale: 0 }}
        transition={{ duration: 0.4 }}
        className="md:px-16 z-[400] hidden md:block bg-white h-full w-full fixed top-0 left-0 px-4 my-4"
      >
        <motion.div className="flex border  mt-10 border-black">
          <div className="w-full md:w-1/2 relative">
            <div className="w-full">
              <motion.img src={info.image} className="w-screen h-[30rem]" />
            </div>
            <div className="absolute inset-y-40 w-full flex justify-center">
              <h3 className="text-white text-[3rem] font-semibold">
                Current bid $4500
              </h3>
            </div>
            <div className="absolute top-4 flex justify-between items-center px-8 w-full">
              <div
                onClick={handleClose}
                className="w-10 cursor-pointer h-10 bg-gray-400 flex rounded-full justify-center items-center"
              >
                X
              </div>
              <button className="bg-blue-500 px-4 py-1 text-sm rounded-full text-white">
                Live bid
              </button>
            </div>
            <div className="absolute w-full bottom-12 left-10">
              <h3 className="text-white text-xl">Tag: Lost or Wither</h3>
            </div>
          </div>
          <div className="hidden px-4 md:block relative md:w-1/2">
            {/* users */}
            <Users data={data} bid={info.bid} textFocus={textFocus} />

            <div className="absolute bottom-20">
              <p className="text-gray-500 italic">Creator: Stormy Rylie</p>
            </div>
            <div className="flex justify-between absolute w-11/12 bottom-4">
              <input
                onChange={(e) => {
                  setBids(e.target.value);
                }}
                type="text"
                placeholder="place a bid..."
                className="rounded-full relative px-6 w-10/12 py-2 outline-none border border-black"
              />
              <button onClick={sendBid} className="absolute right-[7rem] top-2">
                <img src={send} />
              </button>
              <div className="w-12 h-12 flex items-center justify-center border-black border rounded-full">
                <img src={redlike} />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
      {/* Mobile */}
      <section className="w-full md:hidden block z-[400] h-full fixed top-0 left-0">
        <div className="relative w-screen h-screen">
          <img src={info.image2} className="h-screen" />
        </div>
        <div className="absolute top-0 w-full">
          <div className="text-white pt-4 text-lg flex w-[20rem] justify-between mx-auto">
            <div>
              <h3>Tag lost or Wither</h3>
            </div>
            <div className="space-x-2">
              <button className="bg-blue-400 px-2 rounded-md">Live</button>
              <button className="bg-gray-400 px-2 rounded-md">Views</button>
              <button>X</button>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-4xl mt-[75%] text-white font-semibold">
              Current bid $400
            </h2>
          </div>
          <div className="fixed bottom-2 w-full px-6">
            <Users data={data} bid={info.bid} textFocus={textFocus} />
            <div className="flex relative justify-between mt-4 w-11/12">
              <input
                onChange={(e) => {
                  setBids(e.target.value);
                }}
                type="text"
                placeholder="place a bid..."
                className="rounded-full px-6 w-10/12 py-2 outline-none border border-black"
              />
              <button
                onClick={sendBid}
                className="absolute right-[5rem] md:right-[7rem] top-2"
              >
                <img src={send} />
              </button>
              <div className="w-12 h-12 flex items-center justify-center border-black border rounded-full">
                <img src={redlike} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Livebid;
