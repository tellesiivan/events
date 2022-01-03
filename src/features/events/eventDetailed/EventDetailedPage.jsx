import classes from "./details.module.css";
import Header from "./Header";
import Chat from "./chat/Chat";
import EventInfo from "./info/EventInfo";
import Sidebar from "./sidebar/Sidebar";

export default function EventDetailedPage() {
  return (
    <div className={classes.details}>
      <div className={classes.content}>
        <Header />
        <EventInfo />
        <Chat />
      </div>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
    </div>
  );
}
