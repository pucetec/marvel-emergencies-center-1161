import React, { useState } from "react";
import EmergencyForm from "./components/molecules/EmergencyForm";
import EmergencyTable from "./components/molecules/EmergencyTable";

const EmergencyCenterPage = () => {
  const [emergency, setEmergency] = useState("");
  const [emergencies, setEmergencies] = useState([]);

  const handleEmergencyChange = (event) => {
    setEmergency(event.target.value);
  };

  const handleAddEmergency = () => {
    setEmergencies([...emergencies, emergency]);
    setEmergency("");
  };
  const handleAssignHero = (emergencyNumber) => {};

  const handleDeleteEmergency = (emergencyNumber) => {
    const updatedEmergencies = emergencies.filter(
      (_, index) => index + 1 !== emergencyNumber
    );
    setEmergencies(updatedEmergencies);
  };

  return (
    <div>
      <EmergencyForm
        emergency={emergency}
        onEmergencyChange={handleEmergencyChange}
        onAddEmergency={handleAddEmergency}
      />
      <EmergencyTable
        emergencies={emergencies}
        onEmergencyChange={handleEmergencyChange}
        onDeleteEmergency={handleDeleteEmergency}
      />
    </div>
  );
};

export default EmergencyCenterPage;
