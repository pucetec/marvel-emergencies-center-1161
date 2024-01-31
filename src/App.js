import React, { useState } from "react";
import "./App.css";
import EmergencyTitle from "./components/EmergencyTitle";
import EmergencyForm from "./components/EmergencyForm";
import EmergencyTable from "./common/table/EmergencyTable";
import { bringMarvelInfo } from "./services/marvelService";

const App = () => {
  const [emergencies, setEmergencies] = useState([]);

  const handleAddEmergency = (newEmergency) => {
    setEmergencies([...emergencies, newEmergency]);
    // Enviar la emergencia a la API.
  };

  const handleDeleteEmergency = (emergencyToDelete) => {
    console.log("Eliminar emergencia:", emergencyToDelete);
    setEmergencies(
      emergencies.filter((emergency) => emergency !== emergencyToDelete)
    );
  };

  // Llama a bringMarvelInfo si es necesario
  bringMarvelInfo();

  const tableHeaders = ["#", "Emergencia", "Acciones"];

  return (
    <div className="App">
      <EmergencyTitle />
      <EmergencyForm onAddEmergency={handleAddEmergency} />
      <EmergencyTable
        headers={tableHeaders}
        emergencies={emergencies}
        onDeleteEmergency={handleDeleteEmergency}
      />
    </div>
  );
};

export default App;
