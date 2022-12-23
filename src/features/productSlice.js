import { createSlice } from "@reduxjs/toolkit";
import { products } from "./products";

const initialState = {
  products,
  cartItems: [],
};

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
  extraReducers: () => {},
});

export const { increment, decrement, addToCart, removeItem, increaseItem } =
  productSlice.actions;
export default productSlice.reducer;
