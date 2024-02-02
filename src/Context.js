import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [emergencia, setEmergencia] = useState("");
  const [emergenciasSinAsignar, setEmergenciasSinAsignar] = useState([]);
  const [heroes, setHeroes] = useState([]);
  const [emergenciasAsignadas, setEmergenciasAsignadas] = useState([]);
  const [selectedHero, setSelectedHero] = useState("");
  const [selectedEmergency, setSelectedEmergency] = useState("");
  const [show, setShow] = useState(false);
  const [showHeroReassignmentModal, setShowHeroReassignmentModal] = useState(false);
  const [selectedEmergencyIndex, setSelectedEmergencyIndex] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseHeroReassignmentModal = () => setShowHeroReassignmentModal(false);
  const handleShowHeroReassignmentModal = () => setShowHeroReassignmentModal(true);

  const insertarHeroes = () => {
    if (selectedHero.trim() !== "") {
      setEmergenciasAsignadas((prevlist) => {
        return [
          ...prevlist,
          { heroe: selectedHero, descripcion: selectedEmergency }
        ];
      });

      setEmergenciasSinAsignar((prevlist) => {
        // Buscar el índice de la emergencia seleccionada
        const indexToRemove = prevlist.findIndex((emergency) => emergency.descripcion === selectedEmergency);

        if (indexToRemove !== -1) {
          // Si se encuentra, eliminar la emergencia seleccionada
          return [...prevlist.slice(0, indexToRemove), ...prevlist.slice(indexToRemove + 1)];
        }

        return prevlist;
      });

      setEmergencia("");
      setSelectedHero("");
      handleClose();
    }
  };

  const onDeleteEmergenciasSinAsignarRow = (index) => {
    setEmergenciasSinAsignar((prevlist) => {
      const updatedList = [...prevlist];
      updatedList.splice(index, 1); // Eliminar la fila en el índice especificado
      return updatedList;
    });
  };

  const onDeleteEmergenciasAsignadasRow = (index) => {
    setEmergenciasAsignadas((prevlist) => {
      const updatedList = [...prevlist];
      updatedList.splice(index, 1); // Eliminar la fila en el índice especificado
      return updatedList;
    });
  };

  const handleReassignHero = (index) => {
    setSelectedEmergency(emergenciasAsignadas[index].descripcion);
    setSelectedHero(emergenciasAsignadas[index].heroe);
    setSelectedEmergencyIndex(index); // Actualizar el índice al hacer clic en "Reasignar"
    handleShowHeroReassignmentModal();
  };



  return (
    <AppContext.Provider
      value={{
        emergencia,
        setEmergencia,
        emergenciasSinAsignar,
        setEmergenciasSinAsignar,
        heroes,
        setHeroes,
        emergenciasAsignadas,
        setEmergenciasAsignadas,
        selectedHero,
        setSelectedHero,
        selectedEmergency,
        setSelectedEmergency,
        show,
        setShow,
        handleClose,
        handleShow,
        insertarHeroes,
        onDeleteEmergenciasSinAsignarRow,
        onDeleteEmergenciasAsignadasRow,
        handleReassignHero,
        handleCloseHeroReassignmentModal,
        handleShowHeroReassignmentModal,
        selectedEmergencyIndex,
        setSelectedEmergencyIndex,
        showHeroReassignmentModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};