import React, { useState,handleAssignButtonClick } from "react";
import { useEmergencyContext } from "./EmergencyContext";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  
} from "@mui/material";
import SquareWithDotIcon from "@mui/icons-material/RadioButtonUnchecked";
import TrashCanIcon from "@mui/icons-material/Delete";

const EmergencyList = ({ onAssignButtonClick }) => {
  const { emergencies, heroes, assignHeroToEmergency ,handleAssignButtonClick} = useEmergencyContext();
  const [selectedHeroId, setSelectedHeroId] = useState("");
 

  
  const handleAssignHero = (emergencyId) => {
    console.log("Selected Hero ID:", selectedHeroId); // Verificar el ID del héroe seleccionado
    console.log("Emergency ID:", emergencyId); // Verificar el ID de la emergencia
    if (selectedHeroId) {
      assignHeroToEmergency(emergencyId, selectedHeroId);
      setSelectedHeroId("");
      if (onAssignButtonClick) {
        onAssignButtonClick(emergencyId);
        handleAssignButtonClick(emergencyId);
      }
    }
  };

  const handleRemoveAssignment = (emergencyId) => {
    assignHeroToEmergency(emergencyId, null);
  };

 

  const unassignedEmergencies = emergencies.filter((e) => !e.hero);
  const assignedEmergencies = emergencies.filter((e) => e.hero);

  return (
    <div>
      <h2>Emergencias Sin Asignar</h2>
      <List>
        {unassignedEmergencies.map((emergency) => (
          <ListItem key={emergency.id}>
            <ListItemText
              primary={`#${emergency.id} - ${emergency.description}`}
            />
            {!emergency.hero && (
              <div>
                <Button
  variant="contained"
  color="primary"
  onClick={() => {
    handleAssignHero(emergency.id);
    onAssignButtonClick(emergency); 
  }}
>
  <SquareWithDotIcon />
</Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleRemoveAssignment(emergency.id)}
                >
                  <TrashCanIcon />
                </Button>
              </div>
            )}
          </ListItem>
        ))}
      </List>
      <h2>Emergencias Asignadas</h2>
      <List>
        {assignedEmergencies.map((emergency) => (
          <ListItem key={emergency.id}>
            <ListItemText
              primary={`#${emergency.id} - ${emergency.description}`}
              secondary={`Asignado a: ${
                heroes.find((hero) => hero.id === emergency.hero)?.name
              }`}
            />
             <Button
  variant="contained"
  color="primary"
  onClick={() => handleAssignButtonClick(emergency.id)}
>
  Cambiar Héroe
</Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleRemoveAssignment(emergency.id)}
            >
              <TrashCanIcon />
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default EmergencyList;