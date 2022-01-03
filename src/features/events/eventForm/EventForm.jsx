import classes from "./eventForm.module.css";
import TextField from "@mui/material/TextField";
import DateTime from "./DateTime";
import { ButtonGroup, Button } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const generateUniqueId = require("generate-unique-id");

export default function EventForm({
  formIsOpen,
  setEvents,
  createNewEvent,
  selectedEvent,
  updateEvent,
}) {
  const id = generateUniqueId({
    length: 6,
    useLetters: false,
  });

  const history = useHistory();

  // --> if we have selected an event, use its values to set InitialState
  const initialState = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    address: "",
    date: "",
    id: "",
  };

  const [event, setEvent] = useState(initialState);

  function getFormInfo(e) {
    setEvent({ ...event, [e.target.id]: e.target.value });
  }

  function handleFormSubmit(e) {
    let cancel = false;
    e.preventDefault();

    // --> if theres a selected event, update event with current selected event values and overwrite with any updates made. ELSE create a new event

    if (selectedEvent) return updateEvent({ ...selectedEvent, ...event });
    // --> {...spread} the selected event values and replace if any with the changed event values
    else {
      setEvent({
        ...event,
        id,
        hostedBy: "mescudi911",
        attendees: [],
        hostPhotoURL:
          "https://d23abykesh9wm6.cloudfront.net/t_smart_auto_crop/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/7af6cdd758419cf989a0ada620b0981ab5e3dc8965194a5d75d18573.jpg",
      });

      for (const itemInput in event) {
        if (event[itemInput] === "") {
          cancel = true;
        }
      }

      if (cancel) return;
      console.log(event);
      createNewEvent(event);
    }
  }

  return (
    <form className={classes.form} onSubmit={handleFormSubmit}>
      <div className={classes.addEventHeader}>
        <span>{selectedEvent ? "Edit event details" : "Add new event"}</span>
      </div>
      <TextField
        id="title"
        label="Event Name"
        placeholder="Event Name"
        variant="outlined"
        margin="dense"
        value={event.title}
        className="inheritFont"
        onChange={getFormInfo}
      />
      <TextField
        id="category"
        label="Category tag"
        placeholder="Classic, JDM, Muscle..."
        variant="outlined"
        margin="dense"
        className="inheritFont"
        onChange={getFormInfo}
        value={event.category}
      />
      <TextField
        id="description"
        label="Description"
        placeholder="Short event description..."
        variant="outlined"
        margin="dense"
        className="inheritFont"
        onChange={getFormInfo}
        value={event.description}
      />
      <TextField
        id="city"
        label="City"
        placeholder="Long Beach, CA..."
        variant="outlined"
        margin="dense"
        className="inheritFont"
        onChange={getFormInfo}
        value={event.city}
      />
      <TextField
        id="address"
        label="Address"
        placeholder="Belmont Shore, Long Beach, CA 90803..."
        variant="outlined"
        margin="dense"
        className="inheritFont"
        onChange={getFormInfo}
        value={event.address}
      />
      <TextField
        id="date"
        placeholder="2022/01/01"
        variant="outlined"
        margin="dense"
        type="date"
        className="inheritFont"
        onChange={getFormInfo}
        value={event.date}
      />

      <ButtonGroup
        variant="outlined"
        aria-label="contained button group"
        fullWidth
        className={classes.btns}
      >
        <Button
          size="large"
          className="inheritFont csmBtns"
          onClick={() => {
            history.push("/events");
          }}
        >
          Cancel
        </Button>
        <Button
          size="large"
          className="inheritFont csmBtns"
          type="submit"
          onClick={handleFormSubmit}
        >
          {selectedEvent ? "Save" : "Create event"}
        </Button>
      </ButtonGroup>
    </form>
  );
}
