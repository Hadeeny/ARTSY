import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userDetails: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // getData: (state, action) => {
    //   state.chat = [...action.payload];
    // },
    userDetails: (state, action) => {
      state.userDetails = action.payload;
    },

    currentUser: (state, action) => {
      state.user = action.payload;
    },
    signoutUser: (state) => {
      state.user = null;
      state.userDetails = null;
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

export const { userDetails, currentUser, signoutUser } = userSlice.actions;
export default userSlice.reducer;
