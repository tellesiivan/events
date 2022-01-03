import React from "react";
import EventListItem from "./EventListItem";

export default function EventsList({ events, eventSelection, deleteEvent }) {
  return (
    <>
      {events.map((event) => {
        return (
          <EventListItem
            key={event.id}
            data={event}
            deleteEvent={deleteEvent}
            eventSelection={eventSelection}
          />
        );
      })}
    </>
  );
}
