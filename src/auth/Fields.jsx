import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./usersession.module.css";
import LoadingButton from "@mui/lab/LoadingButton";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

function Fields({ path, setLoginCred, loginCred, submitting }) {
  const [showLogin, setShowLogin] = useState(Boolean);
  const hstry = useHistory();

  useEffect(() => {
    path === "/login" ? setShowLogin(true) : setShowLogin(false);
  }, [path]);

  function formTypeLink() {
    hstry.push(`${path === "/login" ? "/signup" : "/login"}`);
  }
  function getValues(e) {
    setLoginCred({ ...loginCred, [e.target.id]: e.target.value });
  }

  return (
    <div className={classes.box}>
      <LoadingButton
        className={classes.alphabetBtn}
        onClick={() => {}}
        loadingPosition="start"
        startIcon={<GoogleIcon />}
      >
        {showLogin ? "Login with Google" : " Signup with Google"}
      </LoadingButton>
      <Divider className={classes.divider}>OR</Divider>
      <div className={classes.fiels}>
        {!showLogin && (
          <TextField
            type="text"
            id="name"
            label="Name"
            variant="outlined"
            margin="dense"
            className="inheritFont"
            onChange={getValues}
            fullWidth
          />
        )}
        <TextField
          id="email"
          label="Email Address"
          variant="outlined"
          margin="dense"
          type="email"
          className="inheritFont"
          onChange={getValues}
          fullWidth
        />
        <TextField
          id="password"
          className="inheritFont"
          label="Password"
          type="password"
          variant="outlined"
          margin="dense"
          onChange={getValues}
          fullWidth
        />
      </div>
      <LoadingButton
        type="submit"
        className={classes.submitBtn}
        loading={submitting}
        loadingPosition="end"
        endIcon={<ArrowRightOutlinedIcon />}
      >
        {showLogin ? "Login" : " Signup"}
      </LoadingButton>
      <p className={classes.toggle} onClick={formTypeLink}>
        {showLogin
          ? "Don't have an account? Sign up."
          : "Already have an account? Login."}
      </p>
    </div>
  );
}

export default Fields;
