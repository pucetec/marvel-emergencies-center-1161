import React from "react";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import AssignmentInd from "@mui/icons-material/AssignmentInd";
import ModalMaterial from "../../commons/modal/ModalMaterial";

const ActionIconsEmergencyWithoutAssignment = ({ onClick, index, open, onClose, onClick2 }) => {

    return (
        <div>
            <AssignmentInd onClick={onClick2} sx={{ fontSize: 40 }} />
            <DeleteSharpIcon onClick={() => onClick(index)} sx={{ fontSize: 40 }} />
            <ModalMaterial open={open} onClose={onClose} />
        </div>
    );
};

export default ActionIconsEmergencyWithoutAssignment;