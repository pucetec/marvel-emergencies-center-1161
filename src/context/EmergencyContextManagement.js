import React, { createContext, useContext, useState, useEffect } from "react";

const EmergencyContextManagement = createContext();

export const EmergencyContextManagementProvider = ({ children }) => {
  const [newEmergencyName, setNewEmergencyName] = useState("");
  const [unassignedEmergencyList, setUnassignedEmergencyList] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedEmergency, setSelectedEmergency] = useState("");
  const [heroeList, setHeroeList] = useState ([{heroe: "IronMan"}, {heroe: "Thor"}, {heroe: "Spiderman"}])
  const [assignedList, setAssignedList] = useState([]);
  const [selectedHeroe, setSelectedHeroe] = useState("");
  
//------------------------------------------------------------------
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };  

//----------------------------------------------------------------------
//Fonctions

  const handleNewEmergencyClick = () => {
    const newEmergency = {
      emergency: newEmergencyName
    };
    setUnassignedEmergencyList((previousUnassignedEmergencyList) => {
      return [...previousUnassignedEmergencyList, newEmergency]
    });
  };

  const deleteEmergency = (position) => {
    const newUnassignedEmergencyList = unassignedEmergencyList.filter((item, index) => index !== position);
    setUnassignedEmergencyList(newUnassignedEmergencyList);
  };

  const deleteAssignedEmergency = (position) => {
    const newAssignedList = assignedList.filter((item, index) => index !== position);
    setAssignedList(newAssignedList);
  };

  const handleOpen = (position) => { 
    setOpen(true);
    setSelectedEmergency(unassignedEmergencyList[position].emergency);
    }

  const handleOpenNewAssignation = (position) => { 
    setOpen(true);
    setSelectedEmergency(assignedList[position].emergency);
    console.log("assignedList", ...assignedList)
    const newAssignedList = [...assignedList];
      newAssignedList[position] = { heroe: selectedHeroe };
      setAssignedList(newAssignedList);
      console.log("newAssignedList", ...newAssignedList)
    }; 

    
  const handleClose = () => setOpen(false);
//-------------------------------------------------------------------------------
  const handleSelectHeroe = (heroe) => {
    setSelectedHeroe(`${heroe}`)  
    }

    

  useEffect((position) => {
    console.log("Position : ", position)
    if (selectedHeroe) {
      setAssignedList((previousAssignedList) => {
        return [...previousAssignedList, {emergency: selectedEmergency, heroe: selectedHeroe}]
      }); 
    setOpen(false);
    }
  }, [selectedHeroe]);

  const assignmentFonction = (position) => {
    handleOpen(position)
    deleteEmergency(position);

  }

  const handleClickModal = () => {
    console.log("depuis click modal", selectedHeroe)  
  }

    return (
        <EmergencyContextManagement.Provider value={{ newEmergencyName, setNewEmergencyName, unassignedEmergencyList, setUnassignedEmergencyList, handleNewEmergencyClick, deleteEmergency, handleOpen, handleClose, heroeList, handleClickModal, open, assignedList, style, handleSelectHeroe, setSelectedHeroe, selectedHeroe, assignmentFonction, deleteAssignedEmergency, handleOpenNewAssignation }} >
            {children}
        </EmergencyContextManagement.Provider>
    );
};

export function useEmergency() {
    return useContext(EmergencyContextManagement);
}
