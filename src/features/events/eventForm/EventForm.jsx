import { useState } from "react";
import classes from "./eventForm.module.css";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { ButtonGroup, Button } from "@mui/material";
import DateTime from "./DateTime";
import { useHistory, useParams } from "react-router-dom";
import { eventActions } from "../../../app/store/events/eventSlice";
import GenerateBCimg from "../../../helpers/form/GenerateBCimg";
import TagInput from "../../../helpers/form/TagInput";
import DateTimeFormat from "../../../helpers/general/DateTimeFormat";
import SelectedCategory from "./SelectedCategory";

const generateUniqueId = require("generate-unique-id");

export default function EventForm() {
  // -->
  const history = useHistory();
  const events = useSelector((state) => state.eventMain.events);
  const params = useParams();
  const selectedEvent = events.find((event) => event.id === params.id);
  const dispatch = useDispatch();
  // show errors
  const [empty, setEmpty] = useState(false);

  // state controls if user wants to change event category, if event was selected
  const [showSelect, setShowSelect] = useState(false);

  // --> if we have selected an event, use its values to set InitialState
  const initialState = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    address: "",
    paid: false,
    date: DateTimeFormat(new Date()).toString(),
    id: null,
    headerImg: null,
  };

  const [event, setEvent] = useState(initialState);

  function getFormInfo(e) {
    setEvent({ ...event, [e.target.name]: e.target.value });
    setEmpty(false);
  }

  function tagValue(value) {
    setEmpty(false);
    const img = GenerateBCimg(value.id);
    setEvent({ ...event, [value.name]: value.id, [value.itemType]: img });
    setShowSelect(false);
  }

  function dateTime(value) {
    setEmpty(false);
    setEvent({ ...event, [value.name]: value.date });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    let cancel = false;

    for (const item in event) {
      if (event[item] === "") {
        cancel = true;
      }
    }

    if (cancel) return setEmpty(true);

    // --> if theres a selected event, update event with current selected event values and overwrite with any updates made. ELSE create a new event
    if (selectedEvent) {
      dispatch(
        eventActions.updateEvent({
          updateEvent: { ...selectedEvent, ...event },
        })
      );
    } else {
      // dispatch new event into our event slice
      dispatch(
        eventActions.createEvent({
          event: {
            ...event,
            id: generateUniqueId({
              length: 8,
              useLetters: true,
            }),
            hostedBy: "mescudi911",
            hostPhotoURL:
              "https://d23abykesh9wm6.cloudfront.net/t_smart_auto_crop/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/7af6cdd758419cf989a0ada620b0981ab5e3dc8965194a5d75d18573.jpg",
            attendees: [],
          },
        })
      );
    }
    history.push("/events");
  }

  return (
    <>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <div className={classes.addEventHeader}>
          <span>
            {selectedEvent ? "Edit event details." : "Add new event."}
          </span>
        </div>
        <TextField
          error={event.title === "" && empty}
          name="title"
          label="Event Name"
          placeholder="Event Name"
          variant="outlined"
          margin="dense"
          value={event.title}
          className="inheritFont"
          onChange={getFormInfo}
        />
        {selectedEvent && !showSelect ? (
          <SelectedCategory event={event} setShowSelect={setShowSelect} />
        ) : (
          <TagInput
            info={{
              name: "category",
              changeHandler: tagValue,
              empty: empty,
            }}
          />
        )}
        <TextField
          name="description"
          label="Description"
          placeholder="Short event description..."
          variant="outlined"
          margin="dense"
          multiline
          rows={4}
          className="inheritFont"
          onChange={getFormInfo}
          value={event.description}
          error={event.description === "" && empty}
        />
        <TextField
          name="city"
          label="City"
          placeholder="Long Beach, CA..."
          variant="outlined"
          margin="dense"
          className="inheritFont"
          onChange={getFormInfo}
          value={event.city}
          error={event.city === "" && empty}
        />
        <TextField
          name="address"
          label="Address"
          placeholder="Belmont Shore, Long Beach, CA 90803..."
          variant="outlined"
          margin="dense"
          className="inheritFont"
          onChange={getFormInfo}
          value={event.address}
          error={event.address === "" && empty}
        />

        <DateTime value={event.date} getDateTime={dateTime} />

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
          <Button size="large" className="inheritFont csmBtns" type="submit">
            {selectedEvent ? "Save" : "Create event"}
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
}
