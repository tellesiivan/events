import classes from "./details.module.css";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.headerImg}>
        <div className={classes.headerOverlay}></div>
        <div className={classes.headerImgAb}>
          <Chip
            avatar={
              <Avatar
                alt="Natacha"
                src="https://uploads.carandclassic.co.uk/uploads/cars/porsche/12122809.jpg"
              />
            }
            label="Mescudi01"
            size="medium"
            className="inheritFont inheritBC avatar"
            onClick={() => {}}
          />
        </div>
        <div className={classes.headerDetails}>
          <h4>Porsche Classic Event</h4>
          <span>01.14.2022</span>
        </div>
      </div>

      <div className={classes.headerActions}>
        <div>
          <Button size="small" variant="none" className=" inheritBCevent">
            Join Event
          </Button>
          <Button size="small" variant="none" className=" inheritBCevent">
            Calcel "Going" Status
          </Button>
        </div>
        <div>
          <Link to={`/manage/`}>
            <Button size="small" variant="none" className="inheritBCevent">
              Manage Event
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
