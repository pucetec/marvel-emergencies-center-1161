import React, { createContext, useContext, useState } from "react";

const EmergencyContextManagement = createContext();

export const EmergencyContextManagementProvider = ({ children }) => {
  const [newEmergencyName, setNewEmergencyName] = useState("");
  const [unassignedEmergencyList, setUnassignedEmergencyList] = useState([]);

  const newEmergencyClick = () => {
    if (newEmergencyName === "") {
      alert("No se puede ingresar una nueva emergencia sin nombre")
    } else if (unassignedEmergencyList.some(item => item.emergency === newEmergencyName)) {
      alert("No se puede ingresasr 2 veces la misma emergencia")
    } else {
      const newEmergency = {
        emergency: newEmergencyName
      };
      setUnassignedEmergencyList((previousUnassignedEmergencyList) => {
              return [...previousUnassignedEmergencyList,newEmergency];
          });
          setNewEmergencyName("");
      };
    };

    return (
        <EmergencyContextManagement.Provider value={{ setNewEmergencyName, newEmergencyClick, unassignedEmergencyList }} >
            {children}
        </EmergencyContextManagement.Provider>
    );
};

export function useEmergency() {
    return useContext(EmergencyContextManagement);
}
