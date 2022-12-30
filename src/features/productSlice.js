import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { products } from "./products";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore();
const initialState = {
  products,
  cartItems: [],
};

// export const getChats = createAsyncThunk(
//   "get_charts",
//   async (messages, thunkAPI) => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "messages"));
//       querySnapshot.forEach((doc) => {
//         messages.push({ ...doc.data(), id: doc.id });
//         return messages;
//       });
//     } catch (error) {
//       const message =
//         error.respose && error.response.data.message
//           ? error.response.data.message
//           : error.message;

//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

export const productSlice = createSlice({
  name: "allproducts",
  initialState,
  reducers: {
    // getData: (state, action) => {
    //   state.chat = [...action.payload];
    // },
    increment: (state, action) => {
      state.cartItems.map((prod) => {
        return prod.id === action.payload ? (prod.unit += 1) : "";
      });
    },
    decrement: (state, action) => {
      state.cartItems.map((prod) => {
        if (prod.id === action.payload) {
          if (prod.unit > 1) {
            return (prod.unit -= 1);
          } else return 1;
        }
      });
    },
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload;
      });
    },
    emptyCart: (state) => {
      state.cartItems = [];
    },

    currentUser: (state, action) => {
      state.user = action.payload;
    },
    signoutUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder;
    // .addCase(getChats.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(getChats.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.success = true;
    //   state.values = [...action.payload];
    // })
    // .addCase(getChats.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = true;
    //   state.message = action.payload;
    // });
  },
});

export const {
  increment,
  getData,
  decrement,
  addToCart,
  removeItem,
  emptyCart,
  currentUser,
  signoutUser,
} = productSlice.actions;
export default productSlice.reducer;

// querySnapshot.forEach((doc) => {
//   return { ...doc.data(), id: doc.id };
// });
