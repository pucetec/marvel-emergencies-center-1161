// src/common/table/EmergencyTable.js
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

const AssignedEmergenciesTable = ({
  assignedEmergencies,
  marvelCharacters,
}) => {
  console.log("Assigned Emergencies:", assignedEmergencies);
  const tableHeaders = ["#", "Emergencia", "Héroe Asignado"];

  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" component="div" gutterBottom>
        Emergencias Asignadas
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            {tableHeaders.map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {assignedEmergencies.map((assigned, index) => {
            console.log("assigned:", assigned);
            // Verifica que marvelCharacters esté definido y no sea undefined
            const hero =
              marvelCharacters &&
              marvelCharacters.find(
                (character) => character.id === assigned.heroId
              );

            console.log("hero:", hero);

            return (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{assigned.emergency}</TableCell>
                <TableCell>{hero ? hero.name : assigned.heroId}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AssignedEmergenciesTable;
