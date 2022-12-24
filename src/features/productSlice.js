import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { products } from "./products";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore();
const initialState = {
  products,
  cartItems: [],
  chat: [],
};

export const getChats = createAsyncThunk("get_charts", async (_, thunkAPI) => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.docs.forEach((doc) => {
      const messages = [];
      messages.push({ ...doc.data(), id: doc.id });
    });
    console.log(messages);
  } catch (error) {
    const message =
      error.respose && error.response.data.message
        ? error.response.data.message
        : error.message;

    return thunkAPI.rejectWithValue(message);
  }
});

export const productSlice = createSlice({
  name: "allproducts",
  initialState,
  reducers: {
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

    increaseItem: (state, action) => {
      // state.cartItems = state.cartItems.filter((item) => {
      //   return item.id !== action.payload;
      // });
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChats.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChats.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        // const querySnapshot = action.payload;
        // querySnapshot.forEach((doc) => {
        //   console.log(`${doc.id} => ${doc.data()}`);
        //   // state.chat.push({ ...doc.data(), id: doc.id });
        // });
      })
      .addCase(getChats.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      });
  },
});

export const { increment, decrement, addToCart, removeItem, increaseItem } =
  productSlice.actions;
export default productSlice.reducer;

// querySnapshot.forEach((doc) => {
//   return { ...doc.data(), id: doc.id };
// });
