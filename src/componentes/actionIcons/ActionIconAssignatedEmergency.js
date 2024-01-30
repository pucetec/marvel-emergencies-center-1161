import React from "react";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import AssignmentInd from "@mui/icons-material/AssignmentInd";
import { useEmergency } from "../../context/EmergencyContextManagement";

const ActionIconsAssignateEmergency = () => {
  const {  } = useEmergency();
  return (
      <div>
          <DeleteSharpIcon sx={{ fontSize: 40 }} />
          <AssignmentInd sx={{ fontSize: 40 }} />
      </div>
  );
};

export default ActionIconsAssignateEmergency;