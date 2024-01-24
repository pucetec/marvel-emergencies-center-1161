import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CropFreeIcon from "@mui/icons-material/CropFree";

const Public_key = "162bf646746d2cfe7d66d6a27b6a90dc";
const Private_key = "68979345d9ee3d74351b46edfdb64e657db8c73a";
const Gateway = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=";

const App = () => {
  const [emergencyText, setEmergencyText] = useState("");
  const handleInputChange = (event) => {
    setEmergencyText(event.target.value);
  };
  const handleButtonClick = () => {
    console.log("Valor del input:", emergencyText);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Central de Emergencias</h1>
      <br />
      <div style={{ textAlign: "center" }}>
        <label>
          Emergencia{" "}
          <input
            type="text"
            value={emergencyText}
            onChange={handleInputChange}
          ></input>
        </label>
        <Button variant="contained" onClick={handleButtonClick}>
          Ingresar
        </Button>
      </div>
      <br />
      <div>
        <h2 style={{ textAlign: "center" }}>Emergencias sin signar</h2>
        <table
          style={{
            margin: "auto",
            textAlign: "center",
            borderCollapse: "collapse",
            width: "50%",
          }}
        >
          <td>#</td>
          <td>Emergencias</td>
          <td>
            Acciones
            <div>
              <Button variant="contained" startIcon={<DeleteIcon />}></Button>
              <Button variant="text" startIcon={<CropFreeIcon />}></Button>
            </div>
          </td>
        </table>
      </div>
      <br />
      <div>
        <h2 style={{ textAlign: "center" }}>Emergencias Asignadas</h2>
        <table
          style={{
            margin: "auto",
            textAlign: "center",
            borderCollapse: "collapse",
            width: "50%",
          }}
        >
          <td>#</td>
          <td>Emergencias</td>
          <td>Héroe</td>
          <td>
            Acciones
            <div>
              <Button variant="contained" startIcon={<DeleteIcon />}></Button>
              <Button variant="text" startIcon={<CropFreeIcon />}></Button>
            </div>
          </td>
        </table>
      </div>
    </div>
  );
};

export default App;
