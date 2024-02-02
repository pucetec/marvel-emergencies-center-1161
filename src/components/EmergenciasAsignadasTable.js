import React from "react";
import { useAppContext } from "../Context";
import Table1 from "./Table/Table1";
import DeleteIcon from "../images/DeleteIcon";
import PersonIcon from "../images/PersonIcon";
import HeroReassignmentModal from "./HeroReasignedModal";

const EmergenciasAsignadasTable = () => {
  const {
    emergenciasAsignadas,
    onDeleteEmergenciasAsignadasRow,
    handleReassignHero,
    handleCloseHeroReassignmentModal,
    selectedEmergencyIndex,
  } = useAppContext();

  return (
    <>
      <h2>Emergencias Asignadas</h2>
      <Table1
        headers={["#", "Emergencia", "Heroe", "Acciones"]}
        bodies={emergenciasAsignadas.map((row, index) => ({
          ...row,
          id: index + 1,
          acciones: (
            <div>
              <button className="btn btn-danger" onClick={() => onDeleteEmergenciasAsignadasRow(index)}>
                <DeleteIcon />
              </button>
              <button className="btn btn-success" onClick={() => handleReassignHero(index)}>
                Reasignar
              </button>
            </div>
          ),
        }))}
        keys={["id", "descripcion", "heroe", "acciones"]}
      />

      <HeroReassignmentModal
        index={selectedEmergencyIndex} // Asegúrate de definir selectedEmergencyIndex en tu contexto
        handleClose={handleCloseHeroReassignmentModal}
      />
    </>
  );
};

export default EmergenciasAsignadasTable;