import React from "react";
import EventListItem from "./EventListItem";

export default function EventsList({ events }) {
  return (
    <>
      {events.map((event) => {
        return <EventListItem key={event.id} data={event} />;
      })}
    </>
  );
}
