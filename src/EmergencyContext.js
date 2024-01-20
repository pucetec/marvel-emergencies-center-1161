import React, { createContext, useState } from "react";

export const EmergencyContext = createContext();

export const EmergencyProvider = ({ children }) => {
  const [emergencies, setEmergencies] = useState([
    { id: 1, description: "Robo en Fake street 1234", hero: null },
    { id: 2, description: "Secuestro en edificio Empire States", hero: null },
  ]);
  const [heroes, setHeroes] = useState([
    { id: 1, name: "Spiderman" },
    { id: 2, name: "Iron Man" },
    { id: 3, name: "Thor" },
  ]);

  const addEmergency = (description) => {
    setEmergencies((prevEmergencies) => [
      ...prevEmergencies,
      {
        id: prevEmergencies.length + 1,
        description,
        hero: null,
      },
    ]);
  };

  const updateEmergencyHero = (emergencyId, heroId) => {
    setEmergencies((prevEmergencies) =>
      prevEmergencies.map((emergency) =>
        emergency.id === emergencyId
          ? { ...emergency, hero: heroId }
          : emergency
      )
    );
  };

  return (
    <EmergencyContext.Provider
      value={{
        emergencies,
        heroes,
        addEmergency,
        updateEmergencyHero,
      }}
    >
      {children}
    </EmergencyContext.Provider>
  );
};
