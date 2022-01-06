import { createSlice } from "@reduxjs/toolkit";
import { sampleData } from "../../api/sampleData";

const eventSlice = createSlice({
  name: "event_main",
  initialState: {
    events: sampleData,
  },
  reducers: {
    createEvent(state, { payload }) {
      state.events = [payload.event, ...state.events];
    },
    updateEvent(state, { payload }) {
      // --> map through events already made & filter if any id of the the CURRENT events matches the UPDATED event passed as a parameter, if it does replace that event with the updated event (if changes have been made)
      state.events = state.events.map((event) =>
        event.id === payload.updateEvent.id ? payload.updateEvent : event
      );
    },
    deleteEvent(state, { payload }) {
      // --> filter through all evnets and return all events that do not EQUAL to eventId parameter
      state.events = state.events.filter((event) => event.id !== payload.id);
    },
  },
});

export default eventSlice.reducer;
export const eventActions = eventSlice.actions;
