import React from "react";
import TopAddEmergemcy from "./componentes/topAddEmergency/TopAddEmergency";
import EmergencyWithoutAsignation from "./componentes/emergencyWithoutAssignment/EmergencyWithoutAssignment";
import AsignatedEmergency from "./componentes/assignatedEmergency/AssignatedEmergency";
import { EmergencyContextProvider } from "./context/EmergencyContextManagement";

const App = () => {
  
  return (
    <EmergencyContextProvider>
      <div >
        <TopAddEmergemcy />
        <center>
          <EmergencyWithoutAsignation />
          <AsignatedEmergency />
        </center>
      </div>
    </EmergencyContextProvider>
  );
}

export default App;
