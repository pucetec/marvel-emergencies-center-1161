import React from "react";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import AssignmentInd from "@mui/icons-material/AssignmentInd";
import ModalMaterial from "../../commons/modal/ModalMaterial";
import { useEmergency } from "../../context/EmergencyContext";

const ActionIconsEmergencyWithoutAssignment = ({ index }) => {
  const { assignmentFonction, deleteEmergency } = useEmergency();

  return (
    <div>
      <AssignmentInd onClick={() => assignmentFonction(index)} sx={{ fontSize: 40 }} />
      <DeleteSharpIcon onClick={() => deleteEmergency(index)} sx={{ fontSize: 40 }} />
      <ModalMaterial />
    </div>
  );
};

export default ActionIconsEmergencyWithoutAssignment;
