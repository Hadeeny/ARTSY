import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";

export const signinUser = createAsyncThunk(
  "userSignin",
  async (credentials, thunkAPI) => {
    try {
      const { auth, email, password } = credentials;
      await signInWithEmailAndPassword(auth, email, password);
      // return credentials;
    } catch (error) {
      const message =
        error.respose && error.response.data.message
          ? error.response.data.message
          : error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  userDetails: null,
  errorMessage: "",
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    resetMessage: (state) => {
      state.errorMessage = "";
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
    builder
      .addCase(signinUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.loading = false;
        state.signedUser = action.payload;
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { userDetails, resetMessage, currentUser, signoutUser } =
  userSlice.actions;
export default userSlice.reducer;
