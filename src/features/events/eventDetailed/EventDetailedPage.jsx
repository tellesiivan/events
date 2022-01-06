import classes from "./details.module.css";
import Header from "./header/Header";
import Chat from "./chat/Chat";
import EventInfo from "./info/EventInfo";
import Sidebar from "./sidebar/Sidebar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function EventDetailedPage() {
  const { events } = useSelector((state) => state.eventMain);
  const params = useParams();
  const selectedEvent = events.find((event) => event.id === params.id);

  return (
    <div className={classes.details}>
      <div className={classes.content}>
        <Header event={selectedEvent} />
        <EventInfo />
        <Chat />
      </div>
      <div className={classes.sidebar}>
        <Sidebar attendees={selectedEvent.attendees} />
      </div>
    </div>
  );
}
