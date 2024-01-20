import React, { useState } from "react";
import { EmergencyContext } from "./EmergencyContext";
import EmergencyInput from "./EmergencyInput";
import EmergencyList from "./EmergencyList";
import "./Marvel.css";

const initialEmergencies = [
  { id: 1, description: "Robo en Fake street 1234", hero: null },
  { id: 2, description: "Secuestro en edificio Empire States", hero: null },
];

const initialHeroes = [
  { id: 1, name: "Spiderman" },
  { id: 2, name: "Iron Man" },
  { id: 3, name: "Thor" },
];

function Marvel() {
  const [emergencies, setEmergencies] = useState(initialEmergencies);
  const [heroes, setHeroes] = useState(initialHeroes);

  function addEmergency(description) {
    const newEmergency = {
      id: emergencies.length + 1,
      description,
      hero: null,
    };
    setEmergencies([...emergencies, newEmergency]);
  }

  const assignHeroToEmergency = (emergencyId, heroId) => {
    setEmergencies(
      emergencies.map((emergency) =>
        emergency.id === emergencyId
          ? { ...emergency, hero: heroId }
          : emergency
      )
    );
  };

  const unassignedEmergencies = emergencies.filter((e) => !e.hero);
  const assignedEmergencies = emergencies.filter((e) => e.hero);

  return (
    <EmergencyContext.Provider
      value={{ emergencies, heroes, addEmergency, assignHeroToEmergency }}
    >
      <div className="Marvel">
        <center>Central de Emergencias</center>
        <EmergencyInput />
        <EmergencyList />
      </div>
    </EmergencyContext.Provider>
  );
}

export default Marvel;
