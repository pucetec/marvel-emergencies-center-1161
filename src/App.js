import React, { useState, useEffect } from "react";
import { EmergencyContext } from "./EmergencyContext";
import { EmergencyContextProvider } from './EmergencyContext';
import EmergencyInput from "./EmergencyInput";
import EmergencyList from "./EmergencyList";
import EmergencyPaper from "./Components/EmergencyPaper";
import EmergencyGrid from "./Components/EmergencyGrid";
import EmergencyTypography from "./Components/EmergencyTypography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import axios from "axios";
import md5 from "md5";

function Marvel() {
  const PUBLICKEY = "d6717bcf70a8fd964311b88d3f0716d7";
  const PRIVATEKEY = "f80c80812cd776c7558de9566f69fc1dbf83de33";
  const gateway = "http://gateway.marvel.com/v1/public/characters";

  //const [heroList, setHeroList] = useState([]);
  const [emergencies, setEmergencies] = useState([]);
  const [heroes, setHeroes] = useState([]);
  //const [selectedUser, setSelectedUser] = useState(null);
  const [selectedEmergency, setSelectedEmergency] = useState(null);
  const [selectedHeroId, setSelectedHeroId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const YourApp = () => {
    return (
      <EmergencyContextProvider>
        {/* Your components go here */}
      </EmergencyContextProvider>
    );
  };
  
  export default YourApp;

  useEffect(() => {
    const fetchDataFromMarvel = async () => {
      const ts = new Date().getTime().toString();
      const hash = md5(`${ts}${PRIVATEKEY}${PUBLICKEY}`);

      const marvelURL = `${gateway}?ts=${ts}&apikey=${PUBLICKEY}&hash=${hash}`;

      try {
        const response = await axios.get(marvelURL);
        console.log("Datos de Marvel:", response.data);
      } catch (error) {
        console.error("Error al obtener datos de Marvel:", error);
      }
    };

    fetchDataFromMarvel();
  }, []);

  function addEmergency(description) {
    const newEmergency = {
      id: emergencies.length + 1,
      description,
      hero: null,
    };
    setEmergencies([...emergencies, newEmergency]);
  }

  const handleAssignButtonClick = (emergency) => {
    setSelectedEmergency(emergency);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedHeroId("");
  };
  const assignHeroToEmergency = (emergencyId, heroId) => {
    setEmergencies(
      emergencies.map((emergency) =>
        emergency.id === emergencyId
          ? { ...emergency, hero: heroId }
          : emergency
      )
    );
  };

  const handleAssignHero = () => {
    if (selectedEmergency) {
      assignHeroToEmergency(selectedEmergency.id, selectedHeroId);
      handleModalClose();
    } else {
      console.error("selectedEmergency is undefined");
    }
  };

  return (
    <EmergencyContext.Provider>
      <EmergencyPaper
        elevation={3}
        style={{ padding: "20px", width: "80%", margin: "auto" }}
      >
        <EmergencyTypography variant="h2" align="center" gutterBottom>
          Central de Emergencias
        </EmergencyTypography>
        <EmergencyGrid container justifyContent="center" spacing={3}>
          <EmergencyInput />
          <EmergencyList onAssignButtonClick={handleAssignButtonClick} />
        </EmergencyGrid>
      </EmergencyPaper>

      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={{ padding: "20px", width: "80%", margin: "auto" }}
      >
        <div>
          <FormControl fullWidth>
            <InputLabel id="hero-select-label">Seleccionar Héroe</InputLabel>
            <Select
              labelId="hero-select-label"
              id="hero-select"
              value={selectedHeroId}
              label="Seleccionar Héroe"
              onChange={(e) => setSelectedHeroId(e.target.value)}
            >
              {heroes.map((hero) => (
                <MenuItem key={hero.id} value={hero.id}>
                  {hero.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAssignHero}
          >
            Asignar Héroe
          </Button>
        </div>
      </Modal>
    </EmergencyContext.Provider>
  );
}

export default Marvel;
