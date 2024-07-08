import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  email: "",
  picture: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userInfo: (state, action) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.picture = action.payload.picture;
    },
    logout: (state) => {
      state.userName = "";
      state.email = "";
      state.picture = "";
    },
  },
});

export const { userInfo, logout } = userSlice.actions;

export default userSlice.reducer;
