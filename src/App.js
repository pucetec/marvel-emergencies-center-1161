import { Form, Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Table1 from "./components/Table/Table1";
import { useState } from "react";

function App() {
  const [emergencia, setEmergencia] = useState('');
  const [emergenciasSinAsignar, setEmergenciasSinAsignar] = useState([]);

  const handleInsertarClick = () => {
    if (emergencia.trim() !== '') {
      setEmergenciasSinAsignar((prevlist) => {
        const counter = prevlist.length + 1
        return [...prevlist, { id: counter, descripcion: emergencia, acciones: "eliminar" }]
      })
      setEmergencia('');
    }
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
          bodies={emergenciasSinAsignar}
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
          bodies={[{ id: "1", descripcion: "Robo en Central Park", superheroe: "Thor", accion: "Eliminar" }, { id: "1", descripcion: "Robo en Central Park", superheroe: "Thor", accion: "Eliminar" }]}
          keys={["id", "descripcion", "superheroe", "accion"]}
        />
      </Row>
    </Container>
  );
}

export default App;
