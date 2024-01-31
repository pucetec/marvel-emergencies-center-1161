import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppModal } from "./Modal/Modal";
import TextField from "@mui/material/TextField";

const App = () => {
  const [emergencyText, setEmergencyText] = useState("");
  const [emergencies, setEmergencies] = useState([]);
  const [nextId, setNextId] = useState(1);

  const handleInputChange = (event) => {
    setEmergencyText(event.target.value);
  };

  const handleButtonClick = () => {
    if (emergencyText.trim() !== "") {
      const newEmergency = {
        id: nextId,
        text: emergencyText,
      };
      setEmergencies((prevEmergencies) => [...prevEmergencies, newEmergency]);
      setNextId((prevId) => prevId + 1);
      setEmergencyText("");
    }
  };

  const handleDelete = (id) => {
    setEmergencies((prevEmergencies) =>
      prevEmergencies.filter((emergency) => emergency.id !== id)
    );
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Central de Emergencias</h1>
      <br />
      <div style={{ textAlign: "center" }}>
        <label>
          Emergencia
          <TextField
            label="Ingresa tu Emergencia"
            type="text"
            value={emergencyText}
            onChange={handleInputChange}
          />
        </label>
        <Button variant="contained" onClick={handleButtonClick}>
          Ingresar
        </Button>
      </div>
      <br />
      <div>
        <h2 style={{ textAlign: "center" }}>Emergencias sin asignar</h2>
        <div style={{ width: "50%", margin: "auto" }}>
          <table>
            <tr>
              <th>#</th>
              <th>Emergencias</th>
              <th>Acciones</th>
            </tr>

            {emergencies.map((emergency) => (
              <tr key={emergency.id}>
                <td>{emergency.id}</td>
                <td>{emergency.text}</td>
                <td>
                  <div style={{ display: "flex", textAlign: "center" }}>
                    <Button
                      variant="contained"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(emergency.id)}
                    />

                    <AppModal />
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
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
          {}
        </table>
      </div>
    </>
  );
};

export default App;
