import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxC0j1Q4GTom937gSPu2_WrK3rvS0vRxY",
  authDomain: "artsy-e0e2f.firebaseapp.com",
  projectId: "artsy-e0e2f",
  storageBucket: "artsy-e0e2f.appspot.com",
  messagingSenderId: "106500282608",
  appId: "1:106500282608:web:9e05578f94104f33044a35",
  measurementId: "G-9Q0S6Q66CX",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
