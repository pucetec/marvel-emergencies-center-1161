import { Form, Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Table1 from "./components/Table/Table1";
import { useState } from "react";
import DeleteIcon from "./images/DeleteIcon";
import axios from "axios";
import md5 from "md5";
import { Modal } from "react-bootstrap";

const PUBLIC_KEY = "958bc01f82c872a2e185e14294103a06";
const PRIVATE_KEY = "befc4e63a286e2158005c4e9a3f84c20c8ee1ae4";
const GATEWAY = "https://gateway.marvel.com:443/v1/public/characters?";

function App() {
  const [emergencia, setEmergencia] = useState("");
  const [emergenciasSinAsignar, setEmergenciasSinAsignar] = useState([]);
  const [heroes, setHeroes] = useState([]);

  const marvelInfo = async () => {
    const timeStamp = Date.now().toString();
    const hash = timeStamp + PRIVATE_KEY + PUBLIC_KEY;
    const md5Key = md5(hash);

    const response = await axios.get(
      GATEWAY + "ts=" + timeStamp + "&apikey=" + PUBLIC_KEY + "&hash=" + md5Key
    );
    console.log({ response: response.data.data.results });
    setHeroes(response.data.data.results);
  };
  marvelInfo();

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

  const onDeleteClick = (index) => {
    setEmergenciasSinAsignar((prevlist) => {
      const updatedList = [...prevlist];
      updatedList.splice(index, 1); // Eliminar la fila en el índice especificado
      return updatedList;
    });
  };

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
                  <Button variant="primary" onClick={handleShow}>
                    Heroes
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
                          acciones: "ingresar",
                        }))}
                        keys={["id", "heroe", "acciones"]}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
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
          bodies={[
            {
              id: "1",
              descripcion: "Robo en Central Park",
              superheroe: "Thor",
              accion: "Eliminar",
            },
            {
              id: "1",
              descripcion: "Robo en Central Park",
              superheroe: "Thor",
              accion: "Eliminar",
            },
          ]}
          keys={["id", "descripcion", "superheroe", "accion"]}
        />
      </Row>
    </Container>
  );
}

export default App;
