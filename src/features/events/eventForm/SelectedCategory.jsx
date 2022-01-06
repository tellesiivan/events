import classes from "./eventForm.module.css";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { Chip } from "@mui/material";

export default function SelectedCategory({ event, setShowSelect }) {
  return (
    <div className={classes.ctgr}>
      <span>Event Category</span>
      <div>
        <Chip
          icon={<ModeEditOutlineOutlinedIcon fontSize="small" />}
          label={event.category}
          size="medium"
          className={`${classes.ctgrTag} inheritFont avatar`}
          onClick={() => {
            setShowSelect(true);
          }}
        />
      </div>
    </div>
  );
}
