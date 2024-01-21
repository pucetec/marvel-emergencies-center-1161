import React from "react";
import EmergencyTable from "../../common/EmergencyTable/EmergencyTable";
import { Container } from "@mui/material";
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEmergencyManagement } from "../../contexts/EmergencyManagementContext/EmergencyManagementContext";

const AssignedEmergencies = () => {
  const headers = ["id", "Emergencia", "Heroe", "Acciones"];
  
  const { assignedEmergencies } = useEmergencyManagement();

  return (
    <Container
      style={{
        textAlign: "center",
        margin: "auto",
        maxWidth: "800px",
        paddingTop: "20px",
        paddingBottom: "100px",
      }}
    >
      <EmergencyTable headers={headers} data={assignedEmergencies} />
    </Container>
  );
};

export default AssignedEmergencies;
