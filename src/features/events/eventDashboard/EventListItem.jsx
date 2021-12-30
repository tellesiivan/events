import { Avatar, Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import Chip from "@mui/material/Chip";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem({ data }) {
  console.log(data);

  return (
    <div className="event-item">
      <div className="event-item-left">
        <Avatar
          alt="Remy Sharp"
          src="https://d23abykesh9wm6.cloudfront.net/t_smart_auto_crop/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/7af6cdd758419cf989a0ada620b0981ab5e3dc8965194a5d75d18573.jpg"
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
            label={`${data.venue}`}
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
          <Button size="small" className="inheritFont mainColor">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
