import React, { useContext } from "react";
import { EmergencyContext } from "./EmergencyContext";

function EmergencyList() {
  const { emergencies, assignHeroToEmergency } = useContext(EmergencyContext);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <center>Emergencia</center>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {emergencies.map((emergency, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{emergency.description}</td>
              <td>
                <button onClick={() => assignHeroToEmergency(emergency.id)}>
                  Asignar Héroe
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmergencyList;
