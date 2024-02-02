import React, { useState, useEffect } from "react";
import { EmergencyContext } from "./EmergencyContext";
//import { EmergencyContextProvider } from "./EmergencyContextProvider"; 
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
import { handleAssignButtonClick } from './Marvel';
//import Marvel from "./Marvel";

const initialEmergencies = [
  { id: 1, description: "Robo en Fake street 1234", hero: null },
  { id: 2, description: "Secuestro en edificio Empire States", hero: null },
];



function Marvel() {
  const PUBLICKEY = "d6717bcf70a8fd964311b88d3f0716d7";
  const PRIVATEKEY = "f80c80812cd776c7558de9566f69fc1dbf83de33";
  const gateway = "http://gateway.marvel.com/v1/public/characters";
  const pageSize = 20;

  const [emergencies, setEmergencies] = useState(initialEmergencies);
  const [heroes, setHeroes] = useState([]);
  const [selectedEmergency, setSelectedEmergency] = useState(null);
  const [selectedHeroId, setSelectedHeroId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [changeHeroEmergency, setChangeHeroEmergency] = useState(null);
  const [offset, setOffset] = useState(0);
  
  
  useEffect(() => {
    const fetchDataFromMarvel = async () => {
      const ts = new Date().getTime().toString();
      const hash = md5(`${ts}${PRIVATEKEY}${PUBLICKEY}`);
      const marvelURL = `${gateway}?ts=${ts}&apikey=${PUBLICKEY}&hash=${hash}&limit=${pageSize}&offset=${offset}`;

      try {
        const response = await axios.get(marvelURL);
        console.log("Datos de Marvel:", response.data);
        setHeroes((prevHeroes) => [...prevHeroes, ...response.data.data.results]);
      } catch (error) {
        console.error("Error al obtener datos de Marvel:", error);
      }
    };

    fetchDataFromMarvel();
  }, [offset]);

  const loadMoreHeroes = () => {
    setOffset((prevOffset) => prevOffset + pageSize);
  };

  const handleReassignHero = () => {
    if (selectedEmergency && selectedHeroId !== "") {
      assignHeroToEmergency(selectedEmergency.id, selectedHeroId);
      setSelectedEmergency(null);
      setSelectedHeroId("");
      setIsModalOpen(false);
    } else {
      console.error("Invalid selection for reassigning hero");
    }
  };

  const handleChangeHero = (emergencyId) => {
    setSelectedHeroId(""); 
    setChangeHeroEmergency(emergencyId);
    setIsModalOpen(false);
  };
  
  function addEmergency(description) {
    const newEmergency = {
      id: emergencies.length + 1,
      description,
      hero: null,
    };
    setEmergencies([...emergencies, newEmergency]);
  }

  const assignHeroToEmergency = (emergencyId, heroId) => {
    console.log("Asignando Héroe a Emergencia...");
    const updatedEmergencies = emergencies.map((emergency) =>
      emergency.id === emergencyId
        ? { ...emergency, hero: heroId }
        : emergency
    );
    setEmergencies(updatedEmergencies);
    return updatedEmergencies;
  };
  
  const handleAssignButtonClick = (emergency) => {
    console.log("Selected Emergency:", emergency);
    setSelectedEmergency(emergency);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedHeroId("");
  };

  const handleAssignHero = () => {
    console.log("Selected Emergency:", selectedEmergency);
    console.log("Selected Hero ID:", selectedHeroId);
    if (selectedEmergency && (selectedHeroId !== "" || changeHeroEmergency !== null)) {
      console.log(
        "Assigning Hero to Emergency:",
        selectedEmergency,
        "Hero ID:",
        selectedHeroId
      );
  
      if (changeHeroEmergency !== null) {
    
        const updatedEmergencies = assignHeroToEmergency(
          changeHeroEmergency,
          selectedHeroId
        );
        setEmergencies(updatedEmergencies);
        setChangeHeroEmergency(null);
      } else {
        const updatedEmergencies = assignHeroToEmergency(
          selectedEmergency.id,
          selectedHeroId
        );
        setEmergencies(updatedEmergencies);
        handleModalClose();
        setSelectedEmergency(null);
        setSelectedHeroId("");
      }
    } else {
      console.error("Invalid selection for assigning hero");
    }
  };
  return (
    <EmergencyContext.Provider
      value={{ emergencies, heroes, addEmergency, assignHeroToEmergency, setHeroes,handleChangeHero,handleReassignHero}}
    >
      <EmergencyPaper elevation={3} style={{ padding: "20px", width: "80%", margin: "auto" }}>
        <EmergencyTypography variant="h2" align="center" gutterBottom>
          Central de Emergencias de Marvel
        </EmergencyTypography>
        <EmergencyGrid container justifyContent="center" spacing={3}>
          <EmergencyInput />
          <EmergencyList onAssignButtonClick={(emergency) => handleAssignButtonClick(emergency)} />        </EmergencyGrid>
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
    <Button variant="contained" color="primary" onClick={loadMoreHeroes}>
            Ver mas Heroes
          </Button>
  </div>
      </Modal>
    </EmergencyContext.Provider>
  );
}
export default Marvel;