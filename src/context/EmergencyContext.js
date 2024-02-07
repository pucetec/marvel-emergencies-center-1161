// context/EmergencyContext.js
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const EmergencyContext = createContext();

export const EmergencyProvider = ({ children }) => {
  const [emergencies, setEmergencies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEmergency, setSelectedEmergency] = useState(null);
  const [marvelHeroes, setMarvelHeroes] = useState([]);
  const [selectedHeroes, setSelectedHeroes] = useState([]);

  useEffect(() => {
    const fetchEmergencies = () => {
      // Lógica para obtener la lista de emergencias (si es necesario)
    };

    const fetchMarvelHeroes = async () => {
      try {
        const response = await axios.get(
          "https://gateway.marvel.com/v1/public/characters",
          {
            params: {
              apikey: "a528d3583ff453a4c854366f226ad322",
            },
          }
        );

        const heroes = response.data?.data?.results || [];
        setMarvelHeroes(heroes);
      } catch (error) {
        console.error("Error al obtener la lista de superhéroes:", error);
      }
    };

    fetchEmergencies();
    fetchMarvelHeroes();
  }, []); // Se ejecuta una vez al montar el componente

  const handleDeleteEmergency = (index) => {
    // Lógica para eliminar la emergencia
  };

  const handleAssignEmergency = (index) => {
    setSelectedEmergency(emergencies[index]);
    setModalOpen(true);
  };

  const handleHeroCheckboxChange = (heroId) => {
    setSelectedHeroes((prevSelectedHeroes) => {
      if (prevSelectedHeroes.includes(heroId)) {
        return prevSelectedHeroes.filter((id) => id !== heroId);
      } else {
        return [...prevSelectedHeroes, heroId];
      }
    });
  };

  const handleConfirmAssign = () => {
    // Lógica para confirmar la asignación con los superhéroes seleccionados
    console.log("Asignar emergencia:", selectedEmergency);
    console.log("Superhéroes seleccionados:", selectedHeroes);
    setModalOpen(false);
  };

  return (
    <EmergencyContext.Provider
      value={{
        emergencies,
        setEmergencies,
        modalOpen,
        setModalOpen,
        selectedEmergency,
        setSelectedEmergency,
        marvelHeroes,
        selectedHeroes,
        handleDeleteEmergency,
        handleAssignEmergency,
        handleHeroCheckboxChange,
        handleConfirmAssign,
      }}
    >
      {children}
    </EmergencyContext.Provider>
  );
};

export const useEmergencyContext = () => {
  return useContext(EmergencyContext);
};
