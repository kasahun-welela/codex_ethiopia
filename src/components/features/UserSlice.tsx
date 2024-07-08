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
  },
});

export const { userInfo } = userSlice.actions;

export default userSlice.reducer;
