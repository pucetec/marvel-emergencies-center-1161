import TopAddEmergemcy from "./componentes/topAddEmergency/TopAddEmergency";
import EmergencyWithoutAsignation from "./componentes/emergencyWithoutAssignment/EmergencyWithoutAssignment";
import AsignatedEmergency from "./componentes/assignatedEmergency/AssignatedEmergency";
import { EmergencyContextManagementProvider } from "./context/EmergencyContextManagement";
import { useState } from "react";

const PUBLIC_KEY = "";
const PRIVATE_KEY = "";
const GATEWAY = "";


const App = () => {
  const [newEmergencyName, setNewEmergencyName] = useState("");
  const [emergency, setEmergency] = useState({});
  const [unassignedEmergencyList, setUnassignedEmergencyList] = useState([]);

  const handleClick = () => {
    const newEmergency = {
      emergency: newEmergencyName
    }
    setEmergency(newEmergency);
    setUnassignedEmergencyList((previousUnassignedEmergencyList) => {
      return [...previousUnassignedEmergencyList, newEmergency]
    });
  }

  return (
    <EmergencyContextManagementProvider>

      <div >
        <TopAddEmergemcy onChange={(e) => setNewEmergencyName(e.target.value)} value={newEmergencyName} onClick={handleClick}/>
        <center>
          <EmergencyWithoutAsignation bodyContent={unassignedEmergencyList}/>
          <AsignatedEmergency />
        </center>
      </div>
    </EmergencyContextManagementProvider>
  );
}

export default App;
