import { Grid } from "@mui/material";
import React, { useState } from "react";
import EventForm from "../eventForm/EventForm";
import EventsList from "./EventsList";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard({ formState }) {
  const [events, setEvents] = useState(sampleData);

  return (
    <Grid container spacing={2} justifyContent="space-between">
      <Grid item md={8} xs={12}>
        <EventsList events={events} />
      </Grid>
      <Grid item md={4} xs={12}>
        {formState.formOpen && <EventForm formIsOpen={formState.setFormOpen} />}
      </Grid>
    </Grid>
  );
}
