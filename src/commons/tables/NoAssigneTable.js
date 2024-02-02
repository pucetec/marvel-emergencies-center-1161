import React from "react";
import ActionIconsEmergencyWithoutAssignment from "../../componentes/actionIcons/ActionIconsEmergencyWithoutAssignment";
import { useEmergency } from "../../context/EmergencyContextManagement";

const NoAssigneTable = () => {
  const { unassignedEmergencyList } = useEmergency();
  const header = ["#", "Emergencia", "Acciones"];

  return (
    <table>
      <thead>
        <tr>
          {header.map((rowTitle, rowIndex) => (
            <td key={rowIndex}>{rowTitle}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {unassignedEmergencyList.map((cellContent, index) => {
          return (
            <tr key={index}>
              <td key={`${index}-cell1`} scope="row">
                {index + 1}
              </td>
              <td key={`${index}-cell2`}>{cellContent.emergency}</td>
              <td key={`${index}-cell3`}>
                <ActionIconsEmergencyWithoutAssignment index={index} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default NoAssigneTable;
