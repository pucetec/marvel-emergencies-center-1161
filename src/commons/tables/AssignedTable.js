import React from "react";
import ActionIconsAssignateEmergency from "../../componentes/actionIcons/ActionIconAssignatedEmergency";

const AssignedTable = ({ headers, bodyContent, onClick, open, onClick2, onClose }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((rowTitle, rowIndex) => (
            <td key={rowIndex}>{rowTitle}</td>
          ))}
        </tr>
      </thead>
      <tbody>
      {bodyContent.map((cellContent, index) => {
      return <tr key={index}>
              <td key={`${index}-cell1`}  scope="row">{index + 1}</td>
              <td key={`${index}-cell2`}>{cellContent.emergency}</td>
              <td key={`${index}-cell2`}>{cellContent.nombre}</td>
              <td key={`${index}-cell3`}><ActionIconsAssignateEmergency onClick={onClick} index={index} open={open} onClick2={onClick2} onClose={onClose} /></td>
            </tr> 
})
}
        
      </tbody>
    </table>
  );
};

export default AssignedTable;