import TopAddEmergemcy from "./componentes/topAddEmergency/TopAddEmergency";
import EmergencyWithoutAsignation from "./componentes/emergencyWithoutAssignment/EmergencyWithoutAssignment";
import AsignatedEmergency from "./componentes/assignatedEmergency/AssignatedEmergency";
import { EmergencyContextManagementProvider } from "./context/EmergencyContextManagement";

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
