// HeroReassignmentModal.js
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useAppContext } from "../Context";
import Table1 from "./Table/Table1";

const HeroReassignmentModal = () => {
  const {
    showHeroReassignmentModal,
    handleCloseHeroReassignmentModal,
    heroes,
    selectedHero,
    setSelectedHero,
    selectedEmergencyIndex, // Asegúrate de tener esta variable en tu contexto
    setEmergenciasAsignadas, // Necesitamos esta función para actualizar las emergencias asignadas
  } = useAppContext();

  const handleHeroSelection = (heroName) => {
    setEmergenciasAsignadas((prevEmergenciasAsignadas) => {
      const updatedEmergenciasAsignadas = [...prevEmergenciasAsignadas];
      const selectedEmergency = updatedEmergenciasAsignadas[selectedEmergencyIndex];

      if (selectedEmergency) {
        // Modificar el héroe de la emergencia seleccionada
        selectedEmergency.heroe = heroName;
      }

      return updatedEmergenciasAsignadas;
    });

    setSelectedHero(""); // Limpiar el héroe seleccionado
    handleCloseHeroReassignmentModal(); // Cerrar el modal
  };

  return (
    <Modal show={showHeroReassignmentModal} onHide={handleCloseHeroReassignmentModal}>
      <Modal.Header closeButton>
        <Modal.Title>Selecciona un nuevo héroe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table1
          headers={["#", "Superhéroe", "Acción"]}
          bodies={heroes.map((hero, index) => ({
            id: index + 1,
            heroe: hero.name,
            acciones: (
              <Button onClick={() => handleHeroSelection(hero.name)}>
                Seleccionar
              </Button>
            ),
          }))}
          keys={["id", "heroe", "acciones"]}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseHeroReassignmentModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HeroReassignmentModal;