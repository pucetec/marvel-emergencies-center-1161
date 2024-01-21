import "./App.css";
import MatModal from "./common/MatModal/MatModal";
import MatTypography from "./common/MatTypography/MatTypography";
import Divider from "@mui/material/Divider";
import AssignedEmergencies from "./components/AssignedEmergencies/AssignedEmergencies";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import UnassignedEmergencies from "./components/UnassignedEmergencies/UnassignedEmergencies";
import { EmergencyManagementContextProvider } from "./contexts/EmergencyManagementContext/EmergencyManagementContext";

function App() {
  return (
    <EmergencyManagementContextProvider>
      <div className="App">
        <MatTypography text="Central de Emergencias" variant="h3" />
        <HeaderBar />
        <Divider
          sx={{
            marginTop: "-40px",
            marginBottom: "60px",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <MatTypography text="Emergencias sin Asignar" variant="h4" />
        <UnassignedEmergencies />
        <Divider
          sx={{
            marginTop: "-40px",
            marginBottom: "60px",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <MatTypography text="Emergencias Asignadas" variant="h4" />
        <AssignedEmergencies />
        <MatModal />
      </div>
    </EmergencyManagementContextProvider>
  );
}

export default App;
