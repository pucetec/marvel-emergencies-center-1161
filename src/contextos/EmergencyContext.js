import { createContext, useContext, useState } from 'react';

const EmergencyContext = createContext();

export const EmergencyContextProvider = ({ children }) => {
  const [emergencies, setEmergencies] = useState([]);

  const addEmergency = (emergency) => {
    setEmergencies((prevEmergencies) => [...prevEmergencies, emergency]);
  };

  const deleteEmergency = (id) => {
    setEmergencies((prevEmergencies) => prevEmergencies.filter((emergency) => emergency.id !== id));
  };

  return (
    <EmergencyContext.Provider value={{ emergencies, addEmergency, deleteEmergency }}>
      {children}
    </EmergencyContext.Provider>
  );
};

export const useEmergencyContext = () => {
  return useContext(EmergencyContext);
};