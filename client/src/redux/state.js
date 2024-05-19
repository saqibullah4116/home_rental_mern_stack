import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  listing: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
    setListing: (state, action) => {
      state.listing = action.payload.listing;
    },
  },
});

export const { setLogin, setLogOut, setListing } = userSlice.actions;
export default userSlice.reducer;
