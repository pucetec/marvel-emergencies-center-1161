import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import md5 from "md5";
import { prettyFormat } from "@testing-library/react";

const PUBLIC_KEY = "6886c73f7ae3a94939d49422fc355212";
const PRIVATE_KEY = "45e6b8fe4c50b2ec285efc449bed72f256ad909d";
const GATEWAY = "https://gateway.marvel.com:443/v1/public/characters?";

const EmergencyContext = createContext();

export const EmergencyContextProvider = ({ children }) => {
  const [newEmergencyName, setNewEmergencyName] = useState("");
  const [unassignedEmergencyList, setUnassignedEmergencyList] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedEmergency, setSelectedEmergency] = useState("");
  const [heroeList, setHeroeList] = useState([]);
  const [assignedList, setAssignedList] = useState([]);
  const [selectedHeroe, setSelectedHeroe] = useState("");
// --------------------------------------------------------------------------
// Modal Style

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
// --------------------------------------------------------------------------
// API Marvel connection

  useEffect(() => {
    const marvelHeroesInformation = async () => {
      const timestamp = Date.now().toString();
      const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
      const response = await axios.get(
        GATEWAY + "ts=" + timestamp + "&apikey=" + PUBLIC_KEY + "&hash=" + hash
      );
      setHeroeList(response.data.data.results);
    };
    if (heroeList.length === 0) {
      marvelHeroesInformation();
    }
  }, [heroeList, setHeroeList]);
// --------------------------------------------------------------------------
// Functions

  const handleNewEmergencyClick = () => {
    const newEmergency = {
      emergency: newEmergencyName,
    };
    const emergencyExists = unassignedEmergencyList.some(
      (emergency) => emergency.emergency === newEmergencyName
    );
    if (emergencyExists) {
      alert("No se puede ingresar 2 veces la misma emrgencia")
    } else if (newEmergencyName === "") {
      alert("no se puede ingresar una emergencia sin nombre")
    } else  {
      setUnassignedEmergencyList((previousUnassignedEmergencyList) => {
        return [...previousUnassignedEmergencyList, newEmergency];
      });
    }
    setNewEmergencyName("");
  };

  const deleteEmergency = (position) => {
    const newUnassignedEmergencyList = unassignedEmergencyList.filter(
      (item, index) => index !== position
    );
    setUnassignedEmergencyList(newUnassignedEmergencyList);
  };

  const deleteAssignedEmergency = (position) => {
    const newAssignedList = assignedList.filter(
      (item, index) => index !== position
    );
    setAssignedList(newAssignedList);
  };

  const handleOpen = (position) => {
    setOpen(true);
    setSelectedEmergency(unassignedEmergencyList[position].emergency);
  };

  
  const handleOpenNewAssignation = (position) => {
    setOpen(true);
    setNewEmergencyName(assignedList[position].emergency)
    deleteAssignedEmergency(position) 
  };

  useEffect(() => {
    if (selectedHeroe) {
      setAssignedList((previousAssignedList) => {
        return [...previousAssignedList, { emergency: newEmergencyName, heroe: selectedHeroe }];
      });
      deleteAssignedEmergency(assignedList.length);
      setSelectedHeroe("");
    }
  },[selectedHeroe])
      
  const handleClose = () => setOpen(false);

  const handleSelectHeroe = (heroe) => {
    setSelectedHeroe(`${heroe}`);
  };

  useEffect(() => {
    if (selectedHeroe) {
      setAssignedList((previousAssignedList) => {
        return [
          ...previousAssignedList,
          { emergency: selectedEmergency, heroe: selectedHeroe },
        ];
      });
      setOpen(false);
    }
  }, [selectedHeroe]);

  const assignmentFonction = (position) => {
    handleOpen(position);
    deleteEmergency(position);
  };

  const handleClickModal = () => {
    console.log("depuis click modal", selectedHeroe);
  };

  return (
    <EmergencyContext.Provider
      value={{
        newEmergencyName,
        setNewEmergencyName,
        unassignedEmergencyList,
        setUnassignedEmergencyList,
        handleNewEmergencyClick,
        deleteEmergency,
        handleOpen,
        handleClose,
        heroeList,
        handleClickModal,
        open,
        assignedList,
        style,
        handleSelectHeroe,
        setSelectedHeroe,
        selectedHeroe,
        assignmentFonction,
        deleteAssignedEmergency,
        handleOpenNewAssignation,
      }}
    >
      {children}
    </EmergencyContext.Provider>
  );
};

export function useEmergency() {
  return useContext(EmergencyContext);
}