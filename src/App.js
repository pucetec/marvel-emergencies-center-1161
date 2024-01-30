import { Form, Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Table1 from "./components/Table/Table1";
import { useEffect, useState } from "react";
import DeleteIcon from "./images/DeleteIcon";
import axios from "axios";
import md5 from "md5";
import { Modal } from "react-bootstrap";
import PersonIcon from "./images/PersonIcon";

const PUBLIC_KEY = "7361da9998833a4fb0adfacf7144bc6e";
const PRIVATE_KEY = "6699a8eea6b425a1c2d14dfcce8b46c0c91b5817";
const GATEWAY = "https://gateway.marvel.com:443/v1/public/characters?";

function App() {
  const [emergencia, setEmergencia] = useState("");
  const [emergenciasSinAsignar, setEmergenciasSinAsignar] = useState([]);
  const [heroes, setHeroes] = useState([]);
  const [emergenciasAsignadas, setEmergenciasAsignadas] = useState([]);
  const [selectedHero, setSelectedHero] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInsertarClick = () => {
    if (emergencia.trim() !== "") {
      setEmergenciasSinAsignar((prevlist) => {
        return [...prevlist, { descripcion: emergencia }];
      });
      setEmergencia("");
    }
  };

  const handleInsertarClick2 = () => {
    if (selectedHero !== "" && emergenciasSinAsignar.length > 0) {
      const emergenciaSeleccionada = emergenciasSinAsignar[0];

      setEmergenciasAsignadas((prevlist) => {
        return [
          ...prevlist,
          { descripcion: emergenciaSeleccionada.descripcion, heroe: selectedHero }
        ];
      });

      setEmergenciasSinAsignar((prevlist) => {
        return prevlist.slice(1);  // Remover la primera emergencia
      });

      setEmergencia("");  // Limpiar el campo de emergencia
      setSelectedHero("");  // Limpiar la selección de héroe
      handleClose();  // Cerrar el modal
    }
  };


  const onDeleteClick = (index) => {
    setEmergenciasSinAsignar((prevlist) => {
      const updatedList = [...prevlist];
      updatedList.splice(index, 1); // Eliminar la fila en el índice especificado
      return updatedList;
    });
  };

  const onDeleteClick2 = (index) => {
    setEmergenciasAsignadas((prevlist) => {
      const updatedList = [...prevlist];
      updatedList.splice(index, 1); // Eliminar la fila en el índice especificado
      return updatedList;
    });
  };

  useEffect(() => {
    const marvelInfo = async () => {
      const timeStamp = Date.now().toString();
      const hash = timeStamp + PRIVATE_KEY + PUBLIC_KEY;
      const md5Key = md5(hash);

      const response = await axios.get(
        GATEWAY +
        "ts=" +
        timeStamp +
        "&apikey=" +
        PUBLIC_KEY +
        "&hash=" +
        md5Key
      );
      console.log({ response: response });
      setHeroes(response.data.data.results);
    };
    if (heroes.length === 0) {
      marvelInfo();
    }
  }, []);

  return (
    <Container className="App">
      <Row>
        <h1>Central de Emergencias</h1>
      </Row>
      <Row>
        <Col>Emergencia</Col>
        <Col>
          <Form.Control
            value={emergencia}
            onChange={(e) => setEmergencia(e.target.value)}
          />
        </Col>
        <Col>
          <Button onClick={handleInsertarClick}>Ingresar</Button>
        </Col>
      </Row>
      <Row>
        {" "}
        <h2>Emergencias sin asignar</h2>
      </Row>
      <Row>
        <Table1
          headers={["#", "Emergencia", "Acciones"]}
          bodies={emergenciasSinAsignar.map((row, index) => ({
            ...row,
            id: index + 1,
            acciones: (
              <div>
                <>
                  <Button variant="primary" onClick={() => { handleShow() }}>
                    <PersonIcon />
                  </Button>
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
                            <Button onClick={() => { setSelectedHero(hero.name); handleInsertarClick2(); }}>
                              Asignar
                            </Button>
                          ),
                        }))}
                        keys={["id", "heroe", "acciones"]}
                      />
                    </Modal.Body>
                  </Modal>
                </>
                <Button variant="danger" onClick={() => onDeleteClick(index)}>
                  <DeleteIcon />
                </Button>
              </div>
            ),
          }))}
          keys={["id", "descripcion", "acciones"]}
        />
      </Row>
      <Row>
        {" "}
        <h2>Emergencias Asignadas</h2>
      </Row>
      <Row>
        <Table1
          headers={["#", "Emergencia", "Heroe", "Acciones"]}
          bodies={emergenciasAsignadas.map((row, index) => ({
            ...row,
            id: index + 1,
            accion: (
              <div>
                <Button variant="danger" onClick={() => onDeleteClick2(index)}>
                  <DeleteIcon />
                </Button>
                <Button variant="primary" onClick={() => { setSelectedHero(row.heroe); handleShow(); }}>
                  <PersonIcon />
                </Button>
              </div>
            ),
          }))}
          keys={["id", "descripcion", "heroe", "accion"]}
        />
      </Row>
    </Container>
  );
}

export default App;