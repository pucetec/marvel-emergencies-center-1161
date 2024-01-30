import React from "react";
import TopAddEmergemcy from "./componentes/topAddEmergency/TopAddEmergency";
import EmergencyWithoutAsignation from "./componentes/emergencyWithoutAssignment/EmergencyWithoutAssignment";
import AsignatedEmergency from "./componentes/assignatedEmergency/AssignatedEmergency";
import { EmergencyContextManagementProvider } from "./context/EmergencyContextManagement";


const PUBLIC_KEY = "6886c73f7ae3a94939d49422fc355212";
const PRIVATE_KEY = "45e6b8fe4c50b2ec285efc449bed72f256ad909d";
const GATEWAY = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=";


const App = () => {
    
  return (
    <EmergencyContextManagementProvider>
      <div >
        <TopAddEmergemcy />
        <center>
          <EmergencyWithoutAsignation />
          <AsignatedEmergency />
        </center>
      </div>
    </EmergencyContextManagementProvider>
  );
}

export default App;
