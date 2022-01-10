import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../app/store/auth/authSlice";
import classes from "./usersession.module.css";
import Fields from "./Fields";

const validator = require("email-validator");

function UserSession() {
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();
  const history = useHistory();
  const [submitting, setSubmitting] = useState(false);

  const initialState =
    path === "/login"
      ? {
          email: "",
          password: "",
        }
      : {
          name: "",
          email: "",
          password: "",
        };

  const [loginCred, setLoginCred] = useState(initialState);

  const validateEmail = validator.validate(loginCred.email); // validate

  function submitHandler(e) {
    setSubmitting(true);
    e.preventDefault();

    if (!validateEmail) return console.log("Please enter a valid email");
    setSubmitting(false);
    dispatch(
      authActions.setCurrentUser({
        user: {
          email: loginCred.email,
        },
      })
    );
    history.replace("/events");
  }

  return (
    <div className={classes.lps}>
      <div className={classes.lpsImg}></div>
      <form className={classes.lpsForm} onSubmit={submitHandler}>
        <h4>{path === "/login" ? "Login." : "Sign up."}</h4>
        <Fields
          path={path}
          setLoginCred={setLoginCred}
          loginCred={loginCred}
          submitting={submitting}
        />
      </form>
    </div>
  );
}

export default UserSession;
