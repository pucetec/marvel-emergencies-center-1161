import React from "react";
import ButtonMaterial from "../button/ButtonMaterial"; 

const ModalTable = ({ headers, bodyContent, text, onClick }) => {
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
              <td key={`${index}-cell2`}>{cellContent.nombre}</td>
              <td key={`${index}-cell3`}><ButtonMaterial text={"Asignar"} /></td>
            </tr> 
})
}
        
      </tbody>
    </table>
  );
};

export default ModalTable;