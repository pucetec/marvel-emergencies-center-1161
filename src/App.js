import * as React from "react";
import './App.css';
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AppModal from "./Modal/Modal";
import TextField from "@mui/material/TextField";
import marvelService from "./MarvelService/marvelService";

const App = () => {
  const [emergencyText, setEmergencyText] = useState("");
  const [emergencies, setEmergencies] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [heroes, setHeroes] = useState([]);
  const [assignedEmergencies, setAssignedEmergencies] = useState([]);

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

  const handleDeleteAssigned = (id) => {
    setAssignedEmergencies((prevAssignedEmergencies) =>
      prevAssignedEmergencies.filter((assignedEmergency) => assignedEmergency.id !== id)
    );
  };
  


  useEffect(() => {
    marvelService.getHeroes()
      .then((heroesData) => setHeroes(heroesData))
      .catch((error) => console.error("Error fetching heroes", error));
  }, []);

  const handleAssignHero = (emergency, selectedHero) => {
    const assignedEmergency = {
      id: assignedEmergencies.length + 1,
      text: emergency.text,
      hero: selectedHero.name,
    };
    setAssignedEmergencies((prevAssignedEmergencies) => [
      ...prevAssignedEmergencies,
      assignedEmergency,
    ]);
    setEmergencies((prevEmergencies) =>
      prevEmergencies.filter((e) => e.id !== emergency.id)
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
            <thead>
              <tr>
                <th>#</th>
                <th>Emergencias</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
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
                      <AppModal
                        heroes={heroes}
                        onAssignHero={(selectedHero) =>
                          handleAssignHero(emergency, selectedHero)
                        }
                        />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
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
    <thead>
      <tr>
        <th>#</th>
        <th>Emergencias</th>
        <th>Heroe</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {assignedEmergencies.map((assignedEmergency) => (
        <tr key={assignedEmergency.id}>
          <td>{assignedEmergency.id}</td>
          <td>{assignedEmergency.text}</td>
          <td>{assignedEmergency.hero}</td>
          <td>
            <div style={{ display: "flex", textAlign: "center" }}>
              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                onClick={() => handleDeleteAssigned(assignedEmergency.id)}></Button>
              <AppModal
                heroes={heroes}
                onAssignHero={(selectedHero) =>
                  handleAssignHero(assignedEmergency, selectedHero)
                }
              />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </>
  );
};

export default App;
