// common/EmergencyTable.js
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
} from "@mui/material";
import TableHeader from "./TableHeader";
import TableRowComponent from "./TableRow";
import axios from "axios";

const EmergencyTable = ({ headers, emergencies, onDeleteEmergency }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEmergency, setSelectedEmergency] = useState(null);
  const [marvelHeroes, setMarvelHeroes] = useState([]);
  const [selectedHeroes, setSelectedHeroes] = useState([]);

  useEffect(() => {
    const fetchMarvelHeroes = async () => {
      try {
        // Reemplaza 'TU_PUBLIC_KEY' con tu clave pública de Marvel API
        const publicKey = "b84229fc4ccb924a9974daa633543fcd";

        const response = await axios.get(
          "https://gateway.marvel.com/v1/public/characters",
          {
            params: {
              apikey: publicKey,
            },
          }
        );

        // Extrae la lista de superhéroes de la respuesta de la API
        const heroes = response.data?.data?.results || [];
        setMarvelHeroes(heroes);
      } catch (error) {
        console.error("Error al obtener la lista de superhéroes:", error);
      }
    };

    fetchMarvelHeroes();
  }, []); // Se ejecuta una vez al montar el componente

  const handleDelete = (index) => {
    onDeleteEmergency(emergencies[index]);
  };

  const handleAssign = (index) => {
    setSelectedEmergency(emergencies[index]);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConfirmAssign = () => {
    console.log("Asignar emergencia:", selectedEmergency);
    console.log("Superhéroes seleccionados:", selectedHeroes);
    setModalOpen(false);
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

  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" component="div" gutterBottom>
        Emergencias sin asignar
      </Typography>
      <Table>
        <TableHeader headers={headers} />
        <TableBody>
          {emergencies.map((emergency, index) => (
            <TableRowComponent
              key={index}
              cells={[
                index + 1,
                emergency,
                <>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(index)}
                  >
                    Eliminar
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAssign(index)}
                  >
                    Asignar
                  </Button>
                </>,
              ]}
            />
          ))}
        </TableBody>
      </Table>

      <Dialog open={modalOpen} onClose={handleCloseModal}>
        <DialogTitle>Asignar Superhéroes</DialogTitle>
        <DialogContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {marvelHeroes.map((hero) => (
                <TableRow key={hero.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedHeroes.includes(hero.id)}
                      onChange={() => handleHeroCheckboxChange(hero.id)}
                    />
                  </TableCell>
                  <TableCell>{hero.id}</TableCell>
                  <TableCell>{hero.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmAssign} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
};

export default EmergencyTable;
