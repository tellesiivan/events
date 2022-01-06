import { useState } from "react";
import DatePicker from "react-datepicker";
import classes from "./eventForm.module.css";
import DateTimeFormat from "../../../helpers/general/DateTimeFormat";
import "react-datepicker/dist/react-datepicker.css";

export default function DateTime({ value, getDateTime }) {
  const initial = value instanceof Date ? new Date() : new Date(value);

  const [date, setDate] = useState(initial);

  function onChangeHandler(date) {
    setDate(date);

    const formatted = DateTimeFormat(date);

    getDateTime({
      date: formatted.toString(),
      name: "date",
    });
  }

  return (
    <div className={classes.dateSep}>
      <DatePicker
        className={classes.date}
        selected={date}
        onChange={onChangeHandler}
        showTimeSelect
        timeFormat="h:mm aa"
        timeIntervals={30}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>
  );
}
