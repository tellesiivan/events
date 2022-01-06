import classes from "./sidebar.module.css";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

export default function Sidebar({ attendees }) {
  return (
    <div>
      <div className={classes.heading}>
        <span>
          <Chip
            label={attendees.length}
            className={classes.chip}
            size="small"
          />
          People are going
        </span>
      </div>
      <div className={classes.going}>
        {attendees.map((attendee) => (
          <div className={classes.goingItem} key={attendee.id}>
            <Avatar alt={attendee.name} src={attendee.photoURL} />
            <p>{attendee.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
