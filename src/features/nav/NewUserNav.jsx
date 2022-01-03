import { ButtonGroup, Button } from "@mui/material";

export default function NewUserNav({ setAuth }) {
  return (
    <ButtonGroup variant="none" aria-label="contained button group">
      <Button
        size="small"
        className="inheritFont"
        onClick={() => {
          setAuth(true);
        }}
      >
        Login
      </Button>
      <Button size="small" className="inheritFont">
        Create Account
      </Button>
    </ButtonGroup>
  );
}
