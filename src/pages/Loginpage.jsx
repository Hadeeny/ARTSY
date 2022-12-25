import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebase";
const db = getFirestore();

const collRef = collection(db, "Products");

getDocs(collRef).then((snapshot) => {
  let products = [];
  snapshot.docs.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });
});
const Loginpage = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user signed in", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <form className="md:w-1/3 w-11/12 mx-auto px-4 space-y-6">
        <h2 className="uppercase text-3xl text-black/60 font-semibold">
          Sign in
        </h2>
        <div className="text-gray-400">
          Don't have an account?{" "}
          <Link to={"/signup"}>
            <span className="text-blue-600 ">Sign up</span>
          </Link>
        </div>
        <div className="flex flex-col gap-y-2 w-full  md:w-11/12">
          <label>Your Email</label>
          <input
            className=" py-3 px-4 outline-none rounded-md bg-gray-200"
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="oluwasegunadeniyi064@gmail.com"
          />
        </div>

        <div className="flex flex-col gap-y-2 w-full md:w-11/12">
          <label>Enter your password</label>
          <input
            className=" py-3 px-4 outline-none rounded-md bg-gray-200"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={signinHandler}
          className="bg-blue-500 px-8 py-2 text-md rounded text-white"
        >
          Signin
        </button>
      </form>
    </div>
  );
};

export default Loginpage;
