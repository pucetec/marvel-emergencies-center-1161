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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Button as MUIButton } from "@mui/material";

const EmergencyTable = ({
  headers,
  emergencies,
  onDeleteEmergency,
  onAssignEmergency,
  marvelCharacters,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEmergency, setSelectedEmergency] = useState(null);
  const [selectedHero, setSelectedHero] = useState(null);

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

  const handleHeroSelect = (heroId) => {
    setSelectedHero(heroId);
  };

  const handleConfirmAssign = () => {
    onAssignEmergency(selectedEmergency, selectedHero);
    setModalOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" component="div" gutterBottom>
        Emergencias sin asignar
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {emergencies.map((emergency, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{emergency}</TableCell>
              <TableCell>
                <MUIButton
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(index)}
                >
                  Eliminar
                </MUIButton>
                <MUIButton
                  variant="contained"
                  color="primary"
                  onClick={() => handleAssign(index)}
                >
                  Asignar
                </MUIButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={modalOpen} onClose={handleCloseModal}>
        <DialogTitle>Asignar Superhéroe</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <Select
              value={selectedHero}
              onChange={(e) => handleHeroSelect(e.target.value)}
            >
              {marvelCharacters.map((hero) => (
                <MenuItem key={hero.id} value={hero.id}>
                  {hero.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <MUIButton onClick={handleCloseModal} color="secondary">
            Cancelar
          </MUIButton>
          <MUIButton onClick={handleConfirmAssign} color="primary">
            Confirmar
          </MUIButton>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
};

export default EmergencyTable;
