import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import axios from 'axios';
import md5 from 'md5';
const PUBLIC_KEY = "d11896174cefa95a248c5619c4cee6cf"
const PRIVATE_KEY = "8de69697b2c5ddf579ace1af6e2da229dbe681b5"
const GATEWAY = "https://gateway.marvel.com:443/v1/public/characters?"


const App = () => {
  const [emergenciasSinAsignar, setEmergenciasSinAsignar] = useState([]);
  const [emergenciasAsignadas, setEmergenciasAsignadas] = useState([]);
  const [nuevaEmergencia, setNuevaEmergencia] = useState('');
  
  const bringMarvelInfo = async () => {
    const currentTimestamp = Date.now().toString();
    const hash = currentTimestamp + PRIVATE_KEY + PUBLIC_KEY;
    const md5hash = md5(hash);

    const response = await axios.get(
      GATEWAY +"&ts=" + currentTimestamp + "&apikey="+ PUBLIC_KEY + "&hash=" + md5hash,
    );
        console.log({response});

  }
  bringMarvelInfo();

  const handleChange = (e) => {
    setNuevaEmergencia(e.target.value);
  };

  const handleIngresar = () => {
    if (nuevaEmergencia.trim() !== '') {
      setEmergenciasSinAsignar([...emergenciasSinAsignar, nuevaEmergencia]);
      setNuevaEmergencia('');
    }
  };

  const handleAcciones = (numeroEmergencia, tipoEmergencia) => {
    console.log(`Realizando acciones para la emergencia ${numeroEmergencia} (${tipoEmergencia})`);
  };

  const handleEliminar = (numeroEmergencia, tipoEmergencia) => {
    if (tipoEmergencia === 'sinAsignar') {
      setEmergenciasSinAsignar(emergenciasSinAsignar.filter((_, index) => index + 1 !== numeroEmergencia));
    } else {
      setEmergenciasAsignadas(emergenciasAsignadas.filter((_, index) => index + 1 !== numeroEmergencia));
    }
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
            onChange={handleChange}
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
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {emergenciasSinAsignar.map((emergencia, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{emergencia}</td>
                <td>
                  <button
                    className="btn btn-secondary mr-2"
                    onClick={() => handleAcciones(index + 1, 'sinAsignar')}
                  >
                    Acciones
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleEliminar(index + 1, 'sinAsignar')}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>EMERGENCIAS ASIGNADAS</h3>
        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Emergencia</th>
              <th scope="col">Héroe</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {emergenciasAsignadas.map((emergencia, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{emergencia}</td>
                <td>
                  <button
                    className="btn btn-secondary mr-2"
                    onClick={() => handleAcciones(index + 1, 'asignada')}
                  >
                    Acciones
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleEliminar(index + 1, 'asignada')}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
