import classes from "../details.module.css";
import Status from "./Status";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Header({ event }) {
  const headerImg = event.headerImg
    ? event.headerImg
    : "https://m1concourse.com/wp-content/uploads/2019/04/7E2A7742-e1555336421525.jpg";

  return (
    <div className={classes.header}>
      <div
        className={classes.headerImg}
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className={classes.headerOverlay}></div>
        <div className={classes.headerImgAb}>
          <Chip
            avatar={<Avatar alt="Natacha" src={event.hostPhotoURL} />}
            label={event.hostedBy}
            size="medium"
            className="inheritFont inheritBC avatar"
            onClick={() => {}}
          />
        </div>
        <div className={classes.headerDetails}>
          <h4>{event.title}</h4>
          <span>{event.date}</span>
        </div>
      </div>

      <div className={classes.headerActions}>
        <div>
          {/* <Button size="small" variant="none" className=" inheritBCevent">
            Join Event
          </Button> */}
          <Status />
          <Chip
            label={event.category}
            size="small"
            className="inheritFont inheritBC avatar"
            onClick={() => {}}
          />
        </div>
        <div>
          <Link to={`/manage/${event.id}`}>
            <Button size="small" variant="none" className="inheritBCevent">
              Manage Event
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
