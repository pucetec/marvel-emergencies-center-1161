import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import md5 from "md5";
import axios from "axios";
import Button from "@mui/material/Button";
import { useEmergencyManagement } from "../../contexts/EmergencyManagementContext/EmergencyManagementContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#f0ebd7",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const pageSize = 5;

const MatModal = ({ open, handleClose }) => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { manageAssignHeroButton } = useEmergencyManagement();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const publicKey = "c2e8a1af14c9d2096807a175bdb80ff0";
        const privateKey = "69390ac3d5e8479db5c6d9ca76517e2465d32d07";
        const timestamp = new Date().getTime();
        const hash = md5(timestamp + privateKey + publicKey);

        const offset = (currentPage - 1) * pageSize;
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${pageSize}&offset=${offset}`
        );

        const fetchedCharacters = response.data.data.results;
        setCharacters(fetchedCharacters);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (open) {
      fetchData();
    }
  }, [open, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Asigna tu superheroe
          </Typography>
          <TableContainer component={Paper} sx={{ marginTop: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Asignar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {characters.map((character, index) => (
                  <TableRow key={character.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{character.name}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#756f4b",
                          "&:hover": {
                            backgroundColor: "#756f4b",
                            transform: "scale(1.1)",
                          },
                        }}
                        onClick={() => manageAssignHeroButton(character.name)}
                      >
                        Asignar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{ marginTop: 10 }}>
            Pagina
            <Button
              disabled={currentPage === 1}
              sx={{ color: "#756f4b" }}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              {currentPage}
            </Button>
            <Button
              disabled={characters.length < pageSize}
              sx={{ color: "#756f4b" }}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              {currentPage + 1}
            </Button>
            <Button
              disabled={characters.length < pageSize}
              sx={{ color: "#756f4b" }}
              onClick={() => handlePageChange(currentPage + 2)}
            >
              {currentPage + 2}
            </Button>
            <Button
              disabled={characters.length < pageSize}
              sx={{ color: "#756f4b" }}
              onClick={() => handlePageChange(currentPage + 3)}
            >
              {currentPage + 3}
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "#756f4b",
                marginLeft: "180px",
                "&:hover": {
                  backgroundColor: "#756f4b",
                  transform: "scale(1.1)",
                },
              }}
              onClick={() => handleClose()}
            >
              Cancelar
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default MatModal;
