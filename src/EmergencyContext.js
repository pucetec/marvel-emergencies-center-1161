import React, { createContext, useContext, useState } from "react";
import { addEmergency, assignHeroToEmergency } from "./api"; // Import the functions

export const EmergencyContext = createContext();

export const EmergencyProvider = ({ children }) => {
  const [emergencies, setEmergencies] = useState([]);
  const [heroes, setHeroes] = useState([]);

  const contextValue = {
    emergencies,
    heroes,
    addEmergency,
    assignHeroToEmergency,
  };

  return (
    <EmergencyContext.Provider
      value={[emergencies, heroes, addEmergency, assignHeroToEmergency]}
    >
      {children}
    </EmergencyContext.Provider>
  );
};

export const useEmergencyContext = () => {
  return useContext(EmergencyContext);
};
