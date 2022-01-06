import classes from "./eventForm.module.css";
import EventForm from "./EventForm";

export default function FormPage() {
  return (
    <div className={classes.lpf}>
      <div className={classes.lpfImg}></div>
      <div className={classes.lpfForm}>
        <EventForm />
      </div>
    </div>
  );
}
