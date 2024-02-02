import React, { createContext, useContext, useState } from "react";

export const EmergencyContext = createContext();

export const EmergencyProvider = ({ children }) => {
  const [emergencies, setEmergencies] = useState([]);
  const [heroes, setHeroes] = useState([]);

  const addEmergency = (description) => {
    const newEmergency = {
      id: emergencies.length + 1,
      description,
      hero: null,
    };
    setEmergencies([...emergencies, newEmergency]);
  };

  const assignHeroToEmergency = (emergencyId, heroId) => {
    const updatedEmergencies = emergencies.map((emergency) =>
      emergency.id === emergencyId
        ? { ...emergency, hero: heroId }
        : emergency
    );
    setEmergencies(updatedEmergencies);
  };

  const contextValue = {
    emergencies,
    heroes,
    addEmergency,
    assignHeroToEmergency,
    setHeroes, // Esto lo incluí para que puedas utilizar setHeroes en otros lugares si es necesario.
  };

  return (
    <EmergencyContext.Provider value={contextValue}>
      {children}
    </EmergencyContext.Provider>
  );
};

export const useEmergencyContext = () => {
  return useContext(EmergencyContext);
};
