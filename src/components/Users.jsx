import user2 from "../assets/user2.png";
import { motion } from "framer-motion";
const Users = ({ bid, textFocus }) => {
  return (
    <>
      <div className="space-y-8 text-white md:text-black py-2 h-[24rem] overflow-y-auto">
        {bid.map((chat, index) => {
          return (
            <div key={index} className="flex items-center space-x-4">
              <div>
                <motion.img src={user2} />
              </div>
              <div>
                <h3 className="font-semibold">{chat.username.split("@")[0]}</h3>
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
