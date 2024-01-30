import React from "react";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import AssignmentInd from "@mui/icons-material/AssignmentInd";
import ModalMaterial from "../../commons/modal/ModalMaterial";
import { useEmergency } from "../../context/EmergencyContextManagement";

const ActionIconsEmergencyWithoutAssignment = ({ index }) => {
    const { handleOpen, deleteEmergency } = useEmergency()
    
    return (
        <div>
            <AssignmentInd onClick={() => handleOpen(index)} sx={{ fontSize: 40 }} />
            <DeleteSharpIcon onClick={() => deleteEmergency(index)} sx={{ fontSize: 40 }} />
            <ModalMaterial />
        </div>
    );
};

export default ActionIconsEmergencyWithoutAssignment;