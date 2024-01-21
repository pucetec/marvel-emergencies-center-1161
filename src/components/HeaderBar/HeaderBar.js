import React from "react";
import "@fontsource/roboto/300.css";
import MatTypography from "../../common/MatTypography/MatTypography";
import MatTextField from "../../common/MatTextField/MatTextField";
import MatButton from "../../common/MatButton/MatButton";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useEmergencyManagement } from "../../contexts/EmergencyManagementContext/EmergencyManagementContext";

const HeaderBar = () => {
  const { manageAddEmergencyButton, setEmergencies } = useEmergencyManagement();

  return (
    <Container
      style={{
        textAlign: "center",
        margin: "auto",
        maxWidth: "500px",
        paddingTop: "20px",
        paddingBottom: "100px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <MatTypography text="Emergencias" variant="subtitle1" />
        </Grid>
        <Grid item>
          <MatTextField label="Ingrese una emergencia" variant="outlined" onChange={(e) => setEmergencies(e.target.value)}/>
        </Grid>
        <Grid item>
          <MatButton text="Buscar" onClick={manageAddEmergencyButton} variant="contained" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeaderBar;
