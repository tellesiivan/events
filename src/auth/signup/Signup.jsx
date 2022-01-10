import classes from "../usersession.module.css";
import LoadingButton from "@mui/lab/LoadingButton";
import GoogleIcon from "@mui/icons-material/Google";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

export default function Signup() {
  return (
    <div className={classes.box}>
      <LoadingButton
        className={classes.alphabetBtn}
        onClick={() => {}}
        loadingPosition="start"
        startIcon={<GoogleIcon />}
        variant="none"
      >
        Signup with Google
      </LoadingButton>
      <Divider className={classes.divider}>OR</Divider>
      <div className={classes.fiels}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          margin="dense"
          className="inheritFont"
          fullWidth
        />

        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          margin="dense"
          className="inheritFont"
          fullWidth
        />

        <TextField
          id="outlined-basic"
          className="inheritFont"
          label="Password"
          variant="outlined"
          margin="dense"
          fullWidth
        />
      </div>
      <LoadingButton
        className={classes.submitBtn}
        onClick={() => {}}
        loadingPosition="center"
        loading
        variant="none"
      >
        Create Account
      </LoadingButton>
    </div>
  );
}
