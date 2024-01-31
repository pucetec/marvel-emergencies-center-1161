import "./App.css";
import { useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

function App() {
  // EMERGENCIAS SIN ASIGNAR ----------------------------------------------------
  const [emergencias, setEmergencias] = useState([]);
  // END EMERGENCIAS SIN ASIGNAR ----------------------------------------------------
  const [nuevaEmergencia, setNuevaEmergencia] = useState("");
  const [contadorId, setContadorId] = useState(1);
  const handleButtonClick = () => {
    setEmergencias((prevEmergencia) => {
      const nuevaEmergenciaConId = {
        id: contadorId,
        emergencia: nuevaEmergencia,
      };
      setContadorId(contadorId + 1);
      if (eliminarEmergenciaAsignada == true) {
        setContadorId(contadorId - 1);
      }
      return [...prevEmergencia, nuevaEmergenciaConId];
    });
  };

  const [heroes, setHeroes] = useState([
    {
      id: 1,
      nombre: "Spiderman",
    },
    {
      id: 2,
      nombre: "Thor",
    },
    {
      id: 3,
      nombre: "Iron Man",
    },
  ]);

  // EMERGENCIAS ASIGNADAS ----------------------------------------------------
  const [emergenciasAsignadas, setEmergenciasAsignadas] = useState([]);
  // END EMERGENCIAS ASIGNADAS ----------------------------------------------------
  const [contadorIdEmergenciaAs, setContadorIdEmergenciaAs] = useState(1);
  const asignarHeroe = (heroe) => {
    const emergenciaSeleccionada = emergencias[emergencias.length - 1];
    if (emergenciaSeleccionada && heroe) {
      setEmergenciasAsignadas((prevEmergenciasAsignadas) => [
        ...prevEmergenciasAsignadas,
        {
          id: contadorIdEmergenciaAs,
          emergenciaAsignada: emergenciaSeleccionada.emergencia,
          heroe: heroe.nombre,
        },
      ]);
      setContadorIdEmergenciaAs(contadorIdEmergenciaAs + 1);
      handleClose();
    }
  };
  // Función para eliminar de Emergencias sin asignar
  const eliminarEmergenciaSinAsignar = (id) => {
    const nuevasEmergencias = emergencias.filter(
      (emergencia) => emergencia.id !== id
    );
    setEmergencias(nuevasEmergencias);
  };

  // Función para eliminar de Emergencias Asignadas
  const eliminarEmergenciaAsignada = (id) => {
    const nuevasEmergenciasAsignadas = emergenciasAsignadas.filter(
      (emergencia) => emergencia.id !== id
    );
    setEmergenciasAsignadas(nuevasEmergenciasAsignadas);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Central de Emergencias</h1>
      <br />
      <br />
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "420px" }}
      >
        <h2>Emergencia</h2>
        <input
          style={{
            marginLeft: "67px",
            width: "300px",
            height: "29px",
            borderRadius: "7PX",
          }}
          onChange={(event) => setNuevaEmergencia(event.target.value)}
        />
        <button
          style={{
            marginLeft: "60px",
            width: "120px",
            height: "36px",
            backgroundColor: "blue",
            border: "blue",
            borderRadius: "7px",
            color: "white",
          }}
          onClick={handleButtonClick}
        >
          Ingresar
        </button>
      </div>
      <br />
      <br />
      <div>
        <h2 style={{ textAlign: "center" }}>Emergencias sin asignar</h2>
        <table
          style={{ margin: "auto", textAlign: "left", borderSpacing: "20px" }}
        >
          <tr>
            <th>#</th>
            <th>Emergencia</th>
            <th>Acciones</th>
          </tr>
          {emergencias.map((emergencia) => (
            <tr>
              <td>{emergencia.id}</td>
              <td>{emergencia.emergencia}</td>
              <td>
                <IconButton onClick={handleOpen}>
                  <AddIcon />
                </IconButton>
                <IconButton
                  onClick={() => eliminarEmergenciaSinAsignar(emergencia.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <br />
      <br />
      <div>
        <h2 style={{ textAlign: "center" }}>Emergencias Asignadas</h2>
        <table
          style={{ margin: "auto", textAlign: "left", borderSpacing: "20px" }}
        >
          <tr>
            <th>#</th>
            <th>Emergencia</th>
            <th>Heroe</th>
            <th>Acciones</th>
          </tr>
          {emergenciasAsignadas.map((emergencia) => (
            <tr>
              <td>{emergencia.id}</td>
              <td>{emergencia.emergenciaAsignada}</td>
              <td>{emergencia.heroe}</td>
              <td>
                <IconButton
                  onClick={() => eliminarEmergenciaAsignada(emergencia.id)}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton onClick={handleOpen}>
                  <AddIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h2 style={{ textAlign: "center" }}>Asigna tu super heroe</h2>
            <table
              style={{
                margin: "auto",
                textAlign: "left",
                borderSpacing: "20px",
              }}
            >
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Asignar</th>
              </tr>
              {heroes.map((heroe) => (
                <tr>
                  <td>{heroe.id}</td>
                  <td>{heroe.nombre}</td>
                  <td>
                    <button
                      style={{
                        marginLeft: "5px",
                        width: "100px",
                        height: "30px",
                        backgroundColor: "blue",
                        border: "blue",
                        borderRadius: "7px",
                        color: "white",
                      }}
                      onClick={() => asignarHeroe(heroe)}
                    >
                      Asignar
                    </button>
                  </td>
                </tr>
              ))}
            </table>

            <Button onClick={handleClose}>Close</Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default App;
