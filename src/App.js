import React from "react";
import TopAddEmergemcy from "./componentes/topAddEmergency/TopAddEmergency";
import EmergencyWithoutAsignation from "./componentes/emergencyWithoutAssignment/EmergencyWithoutAssignment";
import AsignatedEmergency from "./componentes/assignatedEmergency/AssignatedEmergency";
import { EmergencyContextManagementProvider } from "./context/EmergencyContextManagement";
import { useState } from "react";


const PUBLIC_KEY = "6886c73f7ae3a94939d49422fc355212";
const PRIVATE_KEY = "45e6b8fe4c50b2ec285efc449bed72f256ad909d";
const GATEWAY = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=";


const App = () => {
  // Variable
  const [newEmergencyName, setNewEmergencyName] = useState("");
  const [unassignedEmergencyList, setUnassignedEmergencyList] = useState([]);

  const [open, setOpen] = React.useState(false);



// Fonction
// --> Modal
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);



// --> Urgence non assignées 
const handleNewEmergencyClick = () => {
    const newEmergency = {
      emergency: newEmergencyName
    };
    setUnassignedEmergencyList((previousUnassignedEmergencyList) => {
      return [...previousUnassignedEmergencyList, newEmergency]
    });
  };

  const deleteEmergency = (position) => {
    const newUnassignedEmergencyList = unassignedEmergencyList.filter((item, index) => index !==position);
    setUnassignedEmergencyList(newUnassignedEmergencyList);
  };


  return (
    <EmergencyContextManagementProvider>

      <div >
        <TopAddEmergemcy onChange={(e) => setNewEmergencyName(e.target.value)} value={newEmergencyName} onClick={handleNewEmergencyClick}/>
        <center>
          <EmergencyWithoutAsignation bodyContent={unassignedEmergencyList} onClick={deleteEmergency} open={open} onClick2={handleOpen} onClose={handleClose} />
          <AsignatedEmergency />
        </center>
      </div>
    </EmergencyContextManagementProvider>
  );
}

export default App;
