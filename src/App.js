import TopAddEmergemcy from "./componentes/topAddEmergency/TopAddEmergency";
import EmergencyWithoutAsignation from "./componentes/emergencyWithoutAssignment/EmergencyWithoutAssignment";
import AsignatedEmergency from "./componentes/assignatedEmergency/AssignatedEmergency";

function App() {
  return (
    <div >
      <TopAddEmergemcy />
      <center>
        <EmergencyWithoutAsignation />
        <AsignatedEmergency />
      </center>
    </div>
  );
}

export default App;
