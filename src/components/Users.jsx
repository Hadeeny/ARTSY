import user2 from "../assets/user2.png";
import { motion } from "framer-motion";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useRef } from "react";
const Users = ({ bid, textFocus }) => {
  //   const textFocus = useRef();
  return (
    <>
      <div className="space-y-8 py-2 h-[24rem] overflow-y-auto">
        {bid.map((chat) => {
          return (
            <div key={chat.id} className="flex items-center space-x-4">
              <div>
                <motion.img src={user2} />
              </div>
              <div>
                <h3 className="font-semibold">Ella Flynn</h3>
                <p>{chat.text}</p>
              </div>
            </div>
          );
        })}
        <div ref={textFocus}></div>
      </div>
    </>
  );
};

export default Users;
