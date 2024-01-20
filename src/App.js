import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Central de Emergencias</h1>
      <br />
      <div style={{ textAlign: "center" }}>
        <label>
          Emergencia <input type="text" value="" />
        </label>
        <Button variant="contained">Ingresar</Button>
      </div>
      <br />
      <div>
        <h2 style={{ textAlign: "center" }}>Emergencias sin signar</h2>
        <table style={{ margin: "auto", textAlign: "center" }}>
          <td>#</td>
          <td>Emergencias</td>
          <td>Acciones </td>
          <Button variant="contained" startIcon={<DeleteIcon />}></Button>
        </table>
      </div>
      <br />
      <div>
        <h2 style={{ textAlign: "center" }}>Emergencias Asignadas</h2>
        <table style={{ margin: "auto", textAlign: "center" }}>
          <td>#</td>
          <td>Emergencias</td>
          <td>Héroe</td>
          <td>Acciones </td>
          <Button variant="contained" startIcon={<DeleteIcon />}></Button>
        </table>
      </div>
    </div>
  );
};

export default App;
