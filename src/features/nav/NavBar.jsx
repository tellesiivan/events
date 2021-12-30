import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import classes from "./nav.module.css";
import logo from "../../assets/logo.png";

export default function NavBar({ setFormOpen }) {
  return (
    <div className={classes.nav}>
      <div className={classes.navLeft}>
        <div className="nav-left-item">
          <img src={logo} alt="" />
        </div>
        <div className="nav-left-item">
          <Button
            size="small"
            variant="none"
            className="inheritFont"
            onClick={() => {
              setFormOpen(true);
            }}
          >
            Create Event
          </Button>
        </div>
      </div>
      <div className="nav-right">
        <ButtonGroup variant="none" aria-label="contained button group">
          <Button size="small" className="inheritFont">
            Login
          </Button>
          <Button size="small" className="inheritFont">
            Register
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
