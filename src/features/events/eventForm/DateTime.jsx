import { useState } from "react";

export default function DateTime() {
  const [date, setDate] = useState(new Date("2018-01-01T00:00:00.000Z"));

  function getValue(e) {
    return e.target.value;
  }

  return <input type="datetime-local" name="" id="date" />;
}
