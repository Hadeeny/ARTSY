// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cartItems: [],
// };

// export const cartSlice = createSlice({
//   name: "cartslice",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const itemExist = state.cartItems.find((item) => {
//         return item.id === action.payload.id;
//       });
//     },
//   },
//   extraReducers: () => {},
// });

// export const { addToCart } = cartSlice.actions;
// export default cartSlice.reducer;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxC0j1Q4GTom937gSPu2_WrK3rvS0vRxY",
  authDomain: "http://artsy-e0e2f.firebaseapp.com",
  projectId: "artsy-e0e2f",
  storageBucket: "http://artsy-e0e2f.appspot.com",
  messagingSenderId: "106500282608",
  appId: "1:106500282608:web:9e05578f94104f33044a35",
  measurementId: "G-9Q0S6Q66CX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
