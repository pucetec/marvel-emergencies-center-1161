// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import EmergencyTitle from "./components/EmergencyTitle";
import EmergencyForm from "./components/EmergencyForm";
import EmergencyTable from "./common/table/EmergencyTable";
import AssignedEmergenciesTable from "./common/table/AssignedEmergenciesTable";
import { bringMarvelInfo } from "./services/marvelService";

const App = () => {
  const [emergencies, setEmergencies] = useState([]);
  const [assignedEmergencies, setAssignedEmergencies] = useState([]);
  const [marvelCharacters, setMarvelCharacters] = useState([]);

  useEffect(() => {
    const fetchMarvelCharacters = async () => {
      const characters = await bringMarvelInfo();
      setMarvelCharacters(characters);
    };

    fetchMarvelCharacters();
  }, []);

  const handleAddEmergency = (newEmergency) => {
    setEmergencies([...emergencies, newEmergency]);
  };

  const handleDeleteEmergency = (emergencyToDelete) => {
    setAssignedEmergencies((prevAssigned) =>
      prevAssigned.filter(
        (assigned) => assigned.emergency !== emergencyToDelete
      )
    );

    setEmergencies(
      emergencies.filter((emergency) => emergency !== emergencyToDelete)
    );
  };

  const handleAssignEmergency = (emergency, heroId) => {
    const selectedHero = marvelCharacters.find(
      (character) => character.id === heroId
    );
    const heroName = selectedHero ? selectedHero.name : "Desconocido";

    const assignedEmergency = { emergency, heroName };
    setAssignedEmergencies([...assignedEmergencies, assignedEmergency]);

    setEmergencies((prevEmergencies) =>
      prevEmergencies.filter((prevEmergency) => prevEmergency !== emergency)
    );
  };

  const tableHeaders = ["#", "Emergencia", "Acciones"];

  return (
    <div className="App">
      <EmergencyTitle />
      <EmergencyForm onAddEmergency={handleAddEmergency} />
      <EmergencyTable
        headers={tableHeaders}
        emergencies={emergencies}
        onDeleteEmergency={handleDeleteEmergency}
        onAssignEmergency={handleAssignEmergency}
        marvelCharacters={marvelCharacters}
      />
      <AssignedEmergenciesTable assignedEmergencies={assignedEmergencies} />
    </div>
  );
};

export default App;
