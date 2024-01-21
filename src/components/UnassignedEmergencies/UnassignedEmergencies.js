import React from "react";
import EmergencyTable from "../../common/EmergencyTable/EmergencyTable";
import { Container } from "@mui/material";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import DeleteIcon from "@mui/icons-material/Delete";
import MatModal from "../../common/MatModal/MatModal";

const UnassignedEmergencies = () => {
  const headers = ["id", "Emergencia", "Acciones"];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const data = [
    {
      id: 1,
      Emergencia: "Emergencia 1",
      Acciones: (
        <div>
          <DeleteIcon /> <DataSaverOnIcon onClick={handleOpen}/>{" "}
        </div>
      ),
    },
    {
      id: 2,
      Emergencia: "Emergencia 2",
      Acciones: (
        <div>
          <DeleteIcon /> <DataSaverOnIcon onClick={handleOpen} />{" "}
        </div>
      ),
    },
    {
      id: 3,
      Emergencia: "Emergencia 3",
      Acciones: (
        <div>
          <DeleteIcon /> <DataSaverOnIcon onClick={handleOpen} />{" "}
        </div>
      ),
    },
  ];

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
      <MatModal open={open} handleClose={handleClose}/>
    </Container>
  );
};

export default UnassignedEmergencies;
