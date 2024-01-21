import React, { createContext, useContext, useState } from "react";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import DeleteIcon from "@mui/icons-material/Delete";

const EmergencyManagementContext = createContext();

let idCounter = 1;

const generateSequentialId = () => {
  return idCounter++;
};
export const EmergencyManagementContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [emergencies, setEmergencies] = useState("");
  const [emergencySelected, setEmergencySelected] = useState("");
  const [assignedEmergencies, setAssignedEmergencies] = useState([]);
  const [unassignedEmergencies, setUnassignedEmergencies] = useState([]);

  const manageDeleteEmergencyButton = (id, isAssigned) => {
    if (isAssigned) {
      setAssignedEmergencies((prevEmergencies) =>
        prevEmergencies.filter((emergency) => emergency.id !== id)
      );
    } else {
      setUnassignedEmergencies((prevEmergencies) =>
        prevEmergencies.filter((emergency) => emergency.id !== id)
      );
    }
  };

  const manageEmergencySelected = (id) => {
    handleOpen();
    setEmergencySelected(id);
  };

  const manageAddEmergencyButton = () => {
    if (emergencies === "") {
      alert("Debe Ingresar una Emergencia");
      return;
    } else {
      const newEmergency = {
        id: generateSequentialId(),
        Emergencia: emergencies,
        Heroe: "",
        isAssigned: false,
        Acciones: (
          <div>
            <DeleteIcon
              onClick={() =>
                manageDeleteEmergencyButton(
                  newEmergency.id,
                  newEmergency.isAssigned
                )
              }
            />{" "}
            <DataSaverOnIcon
              onClick={() => manageEmergencySelected(newEmergency.id)}
            />{" "}
          </div>
        ),
      };
      setEmergencies("");
      setUnassignedEmergencies((prevEmergencies) => [
        ...prevEmergencies,
        newEmergency,
      ]);
    }
  };

  const manageAssignHeroButton = (hero) => {
    const existingEmergency = unassignedEmergencies.find(
      (emergency) => emergency.id === emergencySelected
    );

    if (existingEmergency) {
      const newEmergency = {
        ...existingEmergency,
        isAssigned: true,
        Heroe: hero,
        Acciones: (
          <div>
            <DataSaverOnIcon
              onClick={() => manageEmergencySelected(newEmergency.id)}
            />{" "}
            <DeleteIcon
              onClick={() =>
                manageDeleteEmergencyButton(
                  newEmergency.id,
                  newEmergency.isAssigned
                )
              }
            />{" "}
          </div>
        ),
      };
      setAssignedEmergencies((prevEmergencies) => [
        ...prevEmergencies,
        newEmergency,
      ]);
      setUnassignedEmergencies((prevEmergencies) =>
        prevEmergencies.filter((emergency) => emergency.id !== newEmergency.id)
      );
    } else {
      const newEmergency = {
        ...assignedEmergencies.find(
          (emergency) => emergency.id === emergencySelected
        ),
        isAssigned: true,
        Heroe: hero,
        Acciones: (
          <div>
            <DataSaverOnIcon
              onClick={() => manageEmergencySelected(newEmergency.id)}
            />{" "}
            <DeleteIcon
              onClick={() =>
                manageDeleteEmergencyButton(
                  newEmergency.id,
                  newEmergency.isAssigned
                )
              }
            />{" "}
          </div>
        ),
      };
      setAssignedEmergencies((prevEmergencies) =>
        prevEmergencies.filter((emergency) => emergency.id !== newEmergency.id)
      );
      setAssignedEmergencies((prevEmergencies) => [
        ...prevEmergencies,
        newEmergency,
      ]);
      setUnassignedEmergencies((prevEmergencies) =>
        prevEmergencies.filter((emergency) => emergency.id !== newEmergency.id)
      );
    }

    setEmergencySelected("");
    handleClose();
  };

  return (
    <EmergencyManagementContext.Provider
      value={{
        manageAddEmergencyButton,
        manageAssignHeroButton,
        unassignedEmergencies,
        assignedEmergencies,
        setEmergencies,
        open,
        setOpen,
        handleClose,
        handleOpen,
      }}
    >
      {children}
    </EmergencyManagementContext.Provider>
  );
};

export function useEmergencyManagement() {
  return useContext(EmergencyManagementContext);
}
