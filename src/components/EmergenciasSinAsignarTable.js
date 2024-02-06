import React from "react";
import { useAppContext } from "../Context";
import Table1 from "./Table/Table1";
import DeleteIcon from "../images/DeleteIcon";
import PersonIcon from "../images/PersonIcon";

const EmergenciasSinAsignarTable = () => {
  const { emergenciasSinAsignar, onDeleteEmergenciasSinAsignarRow, handleShow, setSelectedEmergency } = useAppContext();

  const showHeroSelectionModal = (emergency) => {
    setSelectedEmergency(emergency.descripcion);
    handleShow();
  };

  return (
    <>
      <h2>Emergencias sin asignar</h2>
      <Table1
        headers={["#", "Emergencia", "Acciones"]}
        bodies={emergenciasSinAsignar.map((row, index) => ({
          ...row,
          id: index + 1,
          acciones: (
            <div>
              <button className="btn btn-danger" onClick={() => onDeleteEmergenciasSinAsignarRow(index)}>
                <DeleteIcon />
              </button>
              <button className="btn btn-primary" onClick={() => showHeroSelectionModal(row)}>
                <PersonIcon />
              </button>
            </div>
          ),
        }))}
        keys={["id", "descripcion", "acciones"]}
      />
    </>
  );
};

export default EmergenciasSinAsignarTable;