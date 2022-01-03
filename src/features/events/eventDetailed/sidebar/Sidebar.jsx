import classes from "./sidebar.module.css";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

export default function Sidebar() {
  return (
    <div>
      <div className={classes.heading}>
        <span>
          <Chip label="2" className={classes.chip} /> People Going.
        </span>
      </div>
      <div className={classes.going}>
        <div className={classes.goingItem}>
          <Avatar
            alt="Natacha"
            src="https://uploads.carandclassic.co.uk/uploads/cars/porsche/12122809.jpg"
          />
          <p>Wes911</p>
        </div>
        <div className={classes.goingItem}>
          <Avatar
            alt="Natacha"
            src="https://wheelfront.com/wp-content/uploads/formidable/8/bmw-f80-m3-with-bbs-rs-wheels-3.jpg"
          />
          <p>BlueF80M3</p>
        </div>
      </div>
    </div>
  );
}
