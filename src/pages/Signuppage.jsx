import { Link } from "react-router-dom";
import { useState } from "react";
import { signoutUser } from "../features/productSlice";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { app } from "../firebase";

const Signuppage = () => {
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const signupHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("userCreated", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const signoutHandler = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log("user signed out");
      })
      .catch((err) => {
        console.log(err.message);
      });
    dispatch(signoutUser());
  };
  return (
    <div>
      <form className="md:w-1/3 w-11/12 mx-auto px-4 space-y-6">
        <h2 className="uppercase text-3xl text-black/60 font-semibold">
          Sign up
        </h2>
        <div className="text-gray-400">
          Already have an account?{" "}
          <Link to={"/login"}>
            <span className="text-blue-600 opacity-100">Sign in</span>
          </Link>
        </div>
        <div className="flex flex-col gap-y-2 w-full md:w-11/12">
          <label>Your fullname</label>
          <input
            className=" py-3 px-4 outline-none rounded-md bg-gray-200"
            type="text"
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            placeholder="Oluwasegun Adeniyi"
          />
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          onClick={signupHandler}
          className="bg-blue-500 px-8 py-2 text-md rounded text-white"
        >
          Signup
        </button>
        <button className="ml-6 text-md text-black/50" onClick={signoutHandler}>
          Signout
        </button>
      </form>
    </div>
  );
};

export default Signuppage;
