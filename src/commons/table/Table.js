import React from "react";
import ActionIcons from "../../componentes/actionIcons/ActionIconsEmergencyWithoutAssignment";
import { useEmergency } from "../../context/EmergencyContextManagement";

const Table = ({ headers, bodyContent }) => {
  const { unassignedEmergencyList } = useEmergency();
  return (
    <table>
      <thead>
        <tr>
          {headers.map((rowTitle) => (
            <td>{rowTitle}</td>
          ))}
        </tr>
      </thead>
      <tbody>
      {unassignedEmergencyList.map((item, index) => {
      return <tr key={index}>
              <td scope="row">{index + 1}</td>
              <td>{item.emergency}</td>
              <td><ActionIcons /></td>
            </tr> 
})}
        
      </tbody>
    </table>
  );
};

export default Table;