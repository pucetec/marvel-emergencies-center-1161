import React from "react";
import "@fontsource/roboto/300.css";
import MatTypography from "../../common/MatTypography/MatTypography";
import MatTextField from "../../common/MatTextField/MatTextField";
import MatButton from "../../common/MatButton/MatButton";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const HeaderBar = () => {
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
          <MatTextField label="Ingrese una emergencia" variant="outlined" />
        </Grid>
        <Grid item>
          <MatButton text="Buscar" variant="contained" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeaderBar;
