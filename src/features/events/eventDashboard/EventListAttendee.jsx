import React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

export default function EventListAttendee({ data }) {
  return (
    <div>
      <Chip
        avatar={<Avatar alt="Natacha" src={data.photoURL} />}
        label={data.name}
        size="medium"
        className="inheritFont inheritBC attendee"
        onClick={() => {}}
      />
    </div>
  );
}
