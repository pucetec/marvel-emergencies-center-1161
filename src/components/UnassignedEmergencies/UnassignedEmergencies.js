import React from "react";
import EmergencyTable from "../../common/EmergencyTable/EmergencyTable";
import { Container } from "@mui/material";
import MatModal from "../../common/MatModal/MatModal";
import { useEmergencyManagement } from "../../contexts/EmergencyManagementContext/EmergencyManagementContext";

const UnassignedEmergencies = () => {
  const headers = ["id", "Emergencia", "Acciones"];

  const { unassignedEmergencies, open, handleClose} = useEmergencyManagement();

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
      <EmergencyTable headers={headers} data={unassignedEmergencies} />
      <MatModal open={open} handleClose={handleClose}/>
    </Container>
  );
};

export default UnassignedEmergencies;
