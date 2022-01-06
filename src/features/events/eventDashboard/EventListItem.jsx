import { Avatar, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import Chip from "@mui/material/Chip";
import EventListAttendee from "./EventListAttendee";
import { useDispatch } from "react-redux";
import { eventActions } from "../../../app/store/events/eventSlice";

export default function EventListItem({ data }) {
  const dispatch = useDispatch();

  return (
    <div className="event-item">
      <div className="event-item-left">
        <Avatar
          alt={`${data.hostedBy} Avatar Image`}
          src={data.hostPhotoURL}
          sx={{ width: 46, height: 46 }}
        />
      </div>
      <div className="event-item-right">
        <div className="event-item-right-title">{data.title}</div>
        <div className="event-item-right-desc">Hosted by {data.hostedBy}</div>
        <div className="event-item-right-info event-space">
          <Chip
            icon={<AccessTimeIcon />}
            label={data.date}
            size="small"
            className="inheritFont event-h inheritBC"
          />
          <Chip
            icon={<PlaceIcon />}
            onClick={() => {}}
            label={`${data.address}`}
            size="small"
            className="inheritFont inheritBC"
          />
        </div>
        {data.attendees && (
          <div className="event-item-right-attendees event-space">
            {data.attendees.map((attendee) => {
              return <EventListAttendee key={attendee.id} data={attendee} />;
            })}
          </div>
        )}
        <div className="event-item-act event-space">
          <span>{data.description}</span>
          <Link to={`events/${data.id}`}>
            <Button size="small" className="inheritFont mainColor">
              Details
            </Button>
          </Link>

          <IconButton
            aria-label="delete"
            size="small"
            className="inheritFont mainColor"
            onClick={() => {
              dispatch(eventActions.deleteEvent({ id: data.id }));
            }}
          >
            <DeleteIcon fontSize="small" className="accentColor" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
