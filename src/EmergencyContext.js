import React, { createContext, useContext, useState } from "react";

export const EmergencyContext = createContext();

export const EmergencyProvider = ({ children }) => {
  const [emergencies, setEmergencies] = useState([]);
  const [heroes, setHeroes] = useState([]);

  const contextValue = { emergencies, setEmergencies, heroes, setHeroes };

  return (
    <EmergencyContext.Provider value={contextValue}>
      {children}
    </EmergencyContext.Provider>
  );
};

export const useEmergencyContext = () => {
  return useContext(EmergencyContext);
};
