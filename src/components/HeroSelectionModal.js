// HeroSelectionModal.js
import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useAppContext } from "../Context";
import Table1 from "./Table/Table1";

const HeroSelectionModal = () => {
  const { show, handleClose, heroes, setSelectedHero, insertarHeroes } = useAppContext();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Selecciona tu superheroe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table1
          headers={["#", "Superheroe", "Acción"]}
          bodies={heroes.map((hero, index) => ({
            id: index + 1,
            heroe: hero.name,
            acciones: (
              <Button onClick={() => {
                setSelectedHero(hero.name);
                insertarHeroes();
              }}>
                Asignar
              </Button>
            ),
          }))}
          keys={["id", "heroe", "acciones"]}
        />
      </Modal.Body>
    </Modal>
  );
};

export default HeroSelectionModal;
