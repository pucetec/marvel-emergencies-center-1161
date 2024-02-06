import React from 'react';
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import DeleteIcon from "@mui/icons-material/Delete";

const IconSet = ({ onClickDataSaver, onClickDelete }) => (
  <>
    <DataSaverOnIcon
      sx={{
        color: "#756f4b",
        "&:hover": {
          color: "#a9a27c",
          transform: "scale(1.1)",
        },
      }}
      onClick={onClickDataSaver}
    />{" "}
    <DeleteIcon
      sx={{
        color: "#756f4b",
        "&:hover": {
          color: "#a9a27c",
          transform: "scale(1.1)",
        },
      }}
      onClick={onClickDelete}
    />{" "}
  </>
);

export default IconSet;
