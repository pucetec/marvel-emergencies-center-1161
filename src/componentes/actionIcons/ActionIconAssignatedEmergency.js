import React from "react";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import AssignmentInd from "@mui/icons-material/AssignmentInd";
import { useEmergency } from "../../context/EmergencyContext";

const ActionIconsAssignateEmergency = ({ indexAssigned }) => {
  const { deleteAssignedEmergency, handleOpenNewAssignation } = useEmergency();

  return (
    <div>
      <DeleteSharpIcon onClick={() => deleteAssignedEmergency(indexAssigned)} sx={{ fontSize: 40 }} />
      <AssignmentInd onClick={() => handleOpenNewAssignation(indexAssigned)} sx={{ fontSize: 40 }} />
    </div>
  );
};

export default ActionIconsAssignateEmergency;
