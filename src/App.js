import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Central de Emergencia</h1>
      <div className="mt-4 d-flex flex-column align-items-center">
        <div className="d-flex align-items-center mb-2">
          <label className="mr-2">Emergencia</label>
          <input
            type="text"
            className="form-control form-control-sm mr-2"
            placeholder="Ingrese texto..."
          />
          <button className="btn btn-primary" type="button">Ingresar</button>
        </div>
      </div>
    </div>
  );
};

export default App;
