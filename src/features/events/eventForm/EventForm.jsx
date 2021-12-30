import classes from "./eventForm.module.css";
import TextField from "@mui/material/TextField";
import { ButtonGroup, Button } from "@mui/material";

export default function EventForm({ formIsOpen }) {
  return (
    <form className={classes.form}>
      <div className={classes.addEventHeader}>
        <span>Add new event</span>
      </div>
      <TextField
        id="outlined-basic"
        label="Event Title"
        placeholder="Event Title"
        variant="outlined"
        margin="dense"
        className="inheritFont"
      />

      <TextField
        id="outlined-basic"
        label="Category"
        placeholder="Category"
        variant="outlined"
        margin="dense"
        className="inheritFont"
      />

      <TextField
        id="outlined-basic"
        label="Description"
        placeholder="Description"
        variant="outlined"
        margin="dense"
        className="inheritFont"
      />

      <TextField
        id="outlined-basic"
        label="City"
        placeholder="Long Beach, CA..."
        variant="outlined"
        margin="dense"
        className="inheritFont"
      />

      <TextField
        id="outlined-basic"
        label="Venue"
        placeholder="Venue"
        variant="outlined"
        margin="dense"
        className="inheritFont"
      />
      <ButtonGroup
        variant="outlined"
        aria-label="contained button group"
        fullWidth
        className={classes.btns}
      >
        <Button
          size="medium"
          className="inheritFont csmBtns"
          onClick={() => {
            formIsOpen(false);
          }}
        >
          Cancel
        </Button>
        <Button size="medium" className="inheritFont csmBtns">
          Submit
        </Button>
      </ButtonGroup>
    </form>
  );
}
