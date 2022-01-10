import { ButtonGroup, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NewUserNav({ setAuth }) {
  return (
    <ButtonGroup variant="none" aria-label="contained button group">
      <Link to="/login">
        <Button size="small" className="inheritFont" onClick={() => {}}>
          Login
        </Button>
      </Link>
      <Link to="/signup">
        <Button size="small" className="inheritFont">
          Create Account
        </Button>
      </Link>
    </ButtonGroup>
  );
}
