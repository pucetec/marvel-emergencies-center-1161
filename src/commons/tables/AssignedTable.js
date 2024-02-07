import React from "react";
import ActionIconsAssignateEmergency from "../../componentes/actionIcons/ActionIconAssignatedEmergency";
import { useEmergency } from "../../context/EmergencyContext";

const AssignedTable = () => {
  const { assignedList } = useEmergency();
  const headerAssignedEmergency = ["#", "Emergencia", "Héroe", "Acciones"];
  
  return (
    <table>
      <thead>
        <tr>
          {headerAssignedEmergency.map((rowTitle, rowIndex) => (
            <td key={rowIndex}>{rowTitle}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {assignedList.map((cellContent, index) => {
          return (
            <tr key={index}>
              <td key={`${index}-cell1`} scope="row">
                {index + 1}
              </td>
              <td key={`${index}-cell2`}>{cellContent.emergency}</td>
              <td key={`${index}-cell3`}>{cellContent.heroe}</td>
              <td key={`${index}-cell4`}>
                <ActionIconsAssignateEmergency indexAssigned={index} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AssignedTable;
