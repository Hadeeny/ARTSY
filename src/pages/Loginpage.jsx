import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { currentUser } from "../features/productSlice";
import { app } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
const Loginpage = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const signinHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
  };
  const [user, loading, error] = useAuthState(auth);
  dispatch(currentUser(user));
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
        <div>
          {user && <h3 className="text-blue-500">Signed in as {user.email}</h3>}
          {error && <h3 className="text-red-500">{error}</h3>}
          {loading && <h3>Loading...</h3>}
        </div>
        <div className="flex flex-col gap-y-2 w-full  md:w-11/12">
          <label>Your Email</label>
          <input
            className=" py-3 px-4 outline-none rounded-md bg-gray-200"
            type="email"
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
