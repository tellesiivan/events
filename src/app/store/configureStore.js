import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./events/eventSlice";
import authSlice from "./auth/authSlice";

const store = configureStore({
  reducer: { eventMain: eventSlice, authMain: authSlice },
});

export default store;
