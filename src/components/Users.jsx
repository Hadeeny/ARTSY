import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import user5 from "../assets/user5.png";
import user11 from "../assets/user11.jpg";
import { motion } from "framer-motion";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getChats } from "../features/productSlice";
const Users = () => {
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getChats());
  //   }, [dispatch]);
  //   const doSom = () => {
  //     const arr = [];
  //     arr.push(2);
  //     arr.push(4);
  //     return arr;
  //   };

  //   const seg = doSom();
  //   console.log(seg);

  const auth = getAuth(app);
  //   const db = getFirestore();

  //   const collRef = collection(db, "messages");

  //   var messages = [];
  //   getDocs(collRef).then((snapshot) => {
  //     snapshot.docs.forEach((doc) => {
  //       messages.push({ ...doc.data(), id: doc.id });
  //       return;
  //     });
  //   });
  //   console.log(messages);
  return (
    <div className="space-y-8 py-2 h-[77%] overflow-y-auto">
      {/* {messages.map((message, i) => {
        <div>
          <h2>Hello</h2>
        </div>;
      })} */}
    </div>
  );
};

export default Users;
{
  /* <div key={i} className="flex items-center space-x-4">
<div>
  <motion.img src={user2} />
</div>
<div>
  <h3 className="font-semibold">Ella Flynn</h3>
  <p>{message.text}</p>
</div>
</div> */
}
