import { Tooltip, Chip } from "@mui/material";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

export default function Status() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Tooltip
      title="Click to update status"
      className="inheritFont"
      placement="right-start"
    >
      <Chip
        label="Going"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<CheckOutlinedIcon />}
        variant="none"
        size="small"
        className="inheritFont porscheC2Bc status"
      />
    </Tooltip>
  );
}
