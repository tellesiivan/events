import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../app/store/auth/authSlice";
import { useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import classes from "./nav.module.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";

export default function ExistingUserNav() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const { currentUser } = useSelector((store) => store.authMain);

  function logOut() {
    dispatch(authActions.logOutUser());
    setShow(false);
    history.push("/");
  }

  return (
    <div className={classes.userNavChip}>
      <Chip
        avatar={
          <Avatar
            alt="Natacha"
            src={
              currentUser.photoURL ||
              "https://images.opumo.com/wordpress/wp-content/uploads/2018/08/Opumo-Magazine-Banner-RETINA-1-10.jpg"
            }
          />
        }
        label={currentUser.email}
        size="medium"
        className="inheritFont existingBc"
        onClick={() => {
          setShow(!show);
        }}
      />
      {show && (
        <div className={classes.userMenu}>
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ManageAccountsOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                </ListItem>
                <Link to="/create">
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <ListItemIcon>
                        <AddCircleOutlineOutlinedIcon size="small" />
                      </ListItemIcon>
                      <ListItemText primary="Create Event" />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </List>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding className="inheritFont">
                  <ListItemButton>
                    <ListItemIcon>
                      <LogoutOutlinedIcon size="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Log out"
                      classes="inheritFont"
                      onClick={logOut}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </div>
      )}
    </div>
  );
}
