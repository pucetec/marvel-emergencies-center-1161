import * as React from "react";
import { Box, TextField, Button } from "@mui/material";
import { left } from "@popperjs/core";

function App() {
  return (
    <div className="App">
      <Box>
        <h1>Central de Emergencias</h1>
        <Box sx={{ display: "flex", width: "80%", margin: "auto", justifyContent: "center" }}>
          <TextField label="Emergencia" variant="outlined" sx={{ mx: "20px" }} />
          <Button variant="contained"> Submit </Button>
        </Box>
      </Box>
    </div>
  );
}

export default App;
