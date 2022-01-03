import { Grid } from "@mui/material";
import React, { useState } from "react";
import EventsList from "./EventsList";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard() {
  const [events, setEvents] = useState(sampleData);

  // function createEventHandler(event) {
  //   setEvents([event, ...events]);
  // }

  // function updateEventHandler(eventUpdated) {
  //   // --> map through events already made & filter if any id of the the CURRENT events matches the UPDATED event passed as a parameter, if it does replace that event with the updated event (if changes have been made)
  //   setEvents(
  //     events.map((event) =>
  //       event.id === eventUpdated.id ? eventUpdated : event
  //     )
  //   );
  //   formState.setFormOpen(false);
  // }

  function deleteEventHandler(eventId) {
    // --> filter through all evnets and return all events that do not EQUAL to eventId parameter
    setEvents(events.filter((event) => event.id !== eventId));
  }

  return (
    <Grid container spacing={2} justifyContent="space-between">
      <Grid item md={8} xs={12}>
        <EventsList events={events} deleteEvent={deleteEventHandler} />
      </Grid>
      <Grid item md={4} xs={12}>
        <h3>event filters</h3>
      </Grid>
    </Grid>
  );
}
