import React, { useState } from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./nav.module.css";
import logo from "../../assets/logo.svg";
import ExistingUserNav from "./ExistingUserNav";
import NewUserNav from "./NewUserNav";

export default function NavBar({ setFormOpen }) {
  const { isAuthenticated } = useSelector((store) => store.authMain);

  return (
    <div className={classes.nav}>
      <div className={classes.navLeft}>
        <div className="nav-left-item">
          <NavLink to="/" activeClassName="activeNav">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="nav-left-item">
          <NavLink to="/events" activeClassName="activeNav" exact>
            <Button size="small" variant="none" className="inheritFont">
              Events
            </Button>
          </NavLink>
          {isAuthenticated && (
            <NavLink to="/create" activeClassName="activeNav">
              <Button size="small" variant="none" className="inheritFont">
                Create Event
              </Button>
            </NavLink>
          )}
        </div>
      </div>
      <div className="nav-right">
        {isAuthenticated ? <ExistingUserNav /> : <NewUserNav />}
      </div>
    </div>
  );
}
