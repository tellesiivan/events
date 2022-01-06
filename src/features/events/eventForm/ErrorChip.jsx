import Chip from "@mui/material/Chip";
import classes from "./eventForm.module.css";
export default function ErrorChip({label}) {
    return (
      <div >
        <Chip
        label={label}
        size="small" className="inheritFont event-h inheritBC" />
      </div>
    );
}
