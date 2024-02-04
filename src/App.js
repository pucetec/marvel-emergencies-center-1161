import React, { useState, createContext, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import axios from 'axios';
import md5 from 'md5';
import { Button, Modal, Table } from "react-bootstrap";

const MarvelContext = createContext();

const PUBLIC_KEY = "d11896174cefa95a248c5619c4cee6cf";
const PRIVATE_KEY = "8de69697b2c5ddf579ace1af6e2da229dbe681b5";
const GATEWAY = "https://gateway.marvel.com:443/v1/public/characters?";

const App = () => {
  const [emergenciasSinAsignar, setEmergenciasSinAsignar] = useState([]);
  const [emergenciasAsignadas, setEmergenciasAsignadas] = useState([]);
  const [nuevaEmergencia, setNuevaEmergencia] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [marvelData, setMarvelData] = useState(null);

  const handleCloseModal = () => setShowModal(false);

  const handleIngresar = () => {
    if (nuevaEmergencia.trim() !== '') {
      const nuevaEmergenciaConNumero = {
        numero: emergenciasSinAsignar.length + 1,
        descripcion: nuevaEmergencia,
      };

      setEmergenciasSinAsignar([...emergenciasSinAsignar, nuevaEmergenciaConNumero]);
      setNuevaEmergencia('');
    }
  };

  const handleAsignar = () => {
    axios.get(
      GATEWAY + "&ts=" + Date.now().toString() + "&apikey=" + PUBLIC_KEY + "&hash=" + md5(Date.now().toString() + PRIVATE_KEY + PUBLIC_KEY),
    )
      .then(response => {
        console.log('Respuesta de Marvel API:', response.data);
        setMarvelData(response.data);
        setShowModal(true);
      })
      .catch(error => {
        console.error('Error al obtener datos de Marvel API', error);
      });
  };
  

  const handleElegirHeroe = (heroe) => {
    const emergenciaAsignada = {
      numero: emergenciasSinAsignar.length + 1,
      descripcion: nuevaEmergencia,
      heroe: heroe.name,
    };

    setEmergenciasAsignadas([...emergenciasAsignadas, emergenciaAsignada]);
    setEmergenciasSinAsignar(emergenciasSinAsignar.filter((e) => e.numero !== emergenciaAsignada.numero));
    setNuevaEmergencia('');
    setShowModal(false);
  };

  const handleEliminarSinAsignar = (numeroEmergencia) => {
    setEmergenciasSinAsignar(emergenciasSinAsignar.filter((e) => e.numero !== numeroEmergencia));
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Central de Emergencia</h1>
      <div className="mt-4 d-flex flex-column align-items-center">
        <div className="d-flex align-items-center mb-2">
          <label className="mr-2">Emergencia</label>
          <input
            type="text"
            value={nuevaEmergencia}
            onChange={(e) => setNuevaEmergencia(e.target.value)}
            className="form-control form-control-sm mr-2"
            placeholder="Ingrese texto..."
          />
          <button className="btn btn-primary" type="button" onClick={handleIngresar}>
            Ingresar
          </button>
        </div>

        <h3>EMERGENCIAS SIN ASIGNAR</h3>
        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Emergencia</th>
              <th scope="col">Asignar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {emergenciasSinAsignar.map((emergencia) => (
              <tr key={emergencia.numero}>
                <th scope="row">{emergencia.numero}</th>
                <td>{emergencia.descripcion}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => handleAsignar(emergencia.numero)}
                  >
                    Asignar
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleEliminarSinAsignar(emergencia.numero)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>EMERGENCIAS ASIGNADAS</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Emergencia</th>
              <th>Héroe</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {emergenciasAsignadas.map((emergencia) => (
              <tr key={emergencia.numero}>
                <td>{emergencia.numero}</td>
                <td>{emergencia.descripcion}</td>
                <td>{emergencia.heroe}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => console.log(`Realizar acciones para ${emergencia.heroe}`)}
                  >
                    Acciones
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Asigna tu superhéroe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {marvelData && marvelData.results && marvelData.results.length > 0 ? (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Asignar</th>
                  </tr>
                </thead>
                <tbody>
                  {marvelData.results.map((superheroe, index) => (
                    <tr key={superheroe.id}>
                      <td>{index + 1}</td>
                      <td>{superheroe.name}</td>
                      <td>
                        <button className="btn btn-primary" onClick={() => handleElegirHeroe(superheroe)}>
                          Asignar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p>No se encontraron datos de superhéroes.</p>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default App;
