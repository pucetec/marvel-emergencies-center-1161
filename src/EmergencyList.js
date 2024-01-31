import React, { useState } from "react";
import { useEmergencyContext } from "./EmergencyContext";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import SquareWithDotIcon from "@mui/icons-material/RadioButtonUnchecked";
import TrashCanIcon from "@mui/icons-material/Delete";

const EmergencyList = ({ onAssignButtonClick }) => {
  const { emergencies, heroes, assignHeroToEmergency } = useEmergencyContext();
  const [selectedHeroId, setSelectedHeroId] = useState("");

  const handleAssignHero = (emergencyId) => {
    onAssignButtonClick();

    if (selectedHeroId) {
      assignHeroToEmergency(emergencyId, selectedHeroId);
      setSelectedHeroId("");
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
                <Select
                  value={selectedHeroId}
                  onChange={(e) => setSelectedHeroId(e.target.value)}
                  displayEmpty
                  fullWidth
                  variant="outlined"
                >
                  <MenuItem value="" disabled>
                    Asigna tu super Héroe
                  </MenuItem>
                  {heroes.map((hero) => (
                    <MenuItem key={hero.id} value={hero.id}>
                      {hero.name}
                    </MenuItem>
                  ))}
                </Select>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAssignHero(emergency.id)}
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
