import React from "react";
import EventListItem from "./EventListItem";
import { useSelector } from "react-redux";

export default function EventsList({ eventSelection }) {
  const events = useSelector((state) => state.eventMain.events);

  return (
    <div className="event_List">
      {events.map((event) => {
        return (
          <EventListItem
            key={event.id}
            data={event}
            eventSelection={eventSelection}
          />
        );
      })}
    </div>
  );
}
