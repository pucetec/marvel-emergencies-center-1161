import React from "react";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import AssignmentInd from "@mui/icons-material/AssignmentInd";
import { useEmergency } from "../../context/EmergencyContextManagement";

const ActionIconsAssignateEmergency = ({ index }) => {
  const { deleteAssignedEmergency, handleOpenNewAssignation } = useEmergency();
  return (
      <div>
          <DeleteSharpIcon onClick={() => deleteAssignedEmergency(index)} sx={{ fontSize: 40 }} />
          <AssignmentInd onClick={() => handleOpenNewAssignation(index)} sx={{ fontSize: 40 }} />
      </div>
  );
};

export default ActionIconsAssignateEmergency;