import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: true,
    currentUser: {
      email: "mescudi@gmail.com",
      photoURL:
        "https://images.opumo.com/wordpress/wp-content/uploads/2018/08/Opumo-Magazine-Banner-RETINA-1-10.jpg",
    },
  },
  reducers: {
    setCurrentUser(state, { payload }) {
      state.isAuthenticated = true;
      state.currentUser = payload.user;
    },
    logOutUser(state) {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
  },
});
export default authSlice.reducer;
export const authActions = authSlice.actions;
