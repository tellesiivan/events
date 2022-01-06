import { Grid } from "@mui/material";
import EventsList from "./EventsList";

export default function EventDashboard() {
  return (
    <Grid container spacing={2} justifyContent="space-between" className="dash">
      <Grid item md={8} xs={12} className="dash-left">
        <EventsList />
      </Grid>
      <Grid item md={4} xs={12} className="dash-right">
        <h3>event filters</h3>
      </Grid>
    </Grid>
  );
}
