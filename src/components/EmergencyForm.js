// EmergencyForm.js
import React from "react";
import { Col, Form, Button } from "react-bootstrap";
import { useAppContext } from "../Context";

const EmergencyForm = () => {
  const { emergencia, setEmergencia } = useAppContext();
  const { emergenciaSinAsignar, setEmergenciasSinAsignar } = useAppContext();

  const handleInsertarClick = () => {
    if (emergencia.trim() !== "") {
      setEmergenciasSinAsignar((prevlist) => {
        return [...prevlist, { descripcion: emergencia }];
      });
      setEmergencia("");
    }
  };

  return (
    <>
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
    </>
  );
};

export default EmergencyForm;
