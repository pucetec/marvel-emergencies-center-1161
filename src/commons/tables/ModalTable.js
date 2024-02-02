import React from "react";
import ButtonMaterial from "../button/ButtonMaterial";
import { useEmergency } from "../../context/EmergencyContextManagement";

const ModalTable = () => {
  const { heroeList, handleSelectHeroe } = useEmergency();
  const headerModalTable = ["#", "Nombre", "Asignar"];

  return (
    <table>
      <thead>
        <tr>
          {headerModalTable.map((rowTitle, rowIndex) => (
            <td key={rowIndex}>{rowTitle}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {heroeList.map((cellContent, indexModal) => {
          return (
            <tr key={indexModal}>
              <td key={`${indexModal}-modalCell1`} scope="row">
                {indexModal + 1}
              </td>
              <td key={`${indexModal}-modalCell2`}>{cellContent.name}</td>
              <td key={`${indexModal}-modalCell3`}>
                <ButtonMaterial
                  text={"Asignar"}
                  onClick={() => handleSelectHeroe(cellContent.name)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ModalTable;
