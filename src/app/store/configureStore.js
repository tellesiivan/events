import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./events/eventSlice";

const store = configureStore({
  reducer: { eventMain: eventSlice },
});

export default store;
