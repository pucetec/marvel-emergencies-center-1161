import React from "react";
import EmergencyTable from "../../common/EmergencyTable/EmergencyTable";
import { Container } from "@mui/material";
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import DeleteIcon from '@mui/icons-material/Delete';

const headers = ["id", "Emergencia", "Heroe", "Acciones"];

const data = [
  {
    id: 1,
    Emergencia: "Emergencia 1",
    Heroe: "Heroe 1",
    Acciones: <div><DataSaverOnIcon/> <DeleteIcon/></div>,
  },
  {
    id: 2,
    Emergencia: "Emergencia 2",
    Heroe: "Heroe 2",
    Acciones: <div><DataSaverOnIcon/> <DeleteIcon/></div>,
  },
  {
    id: 3,
    Emergencia: "Emergencia 3",
    Heroe: "Heroe 3",
    Acciones: <div><DataSaverOnIcon/> <DeleteIcon/></div>,
  },
];

const AssignedEmergencies = () => {
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
      <EmergencyTable headers={headers} data={data} />
    </Container>
  );
};

export default AssignedEmergencies;
