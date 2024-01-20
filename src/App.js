import React, { useState } from 'react';

function App() {
  const [emergencia, setEmergencia] = useState('');
  const [emergenciasList, setEmergenciasList] = useState([]);

  const agregarEmergencia = () => {
    if (emergencia.trim() !== '') {
      const nuevaEmergencia = `${emergenciasList.length + 1}. ${emergencia}`;
      setEmergenciasList([...emergenciasList, nuevaEmergencia]);
      setEmergencia('');
    }
  };

  return (
    <div>
      <h1>Central de Emergencia</h1>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1cm' }}>
        <h2 style={{ marginRight: '1cm' }}>Emergencia</h2>
        <input
          type="text"
          placeholder="Ingrese la emergencia"
          value={emergencia}
          onChange={(e) => setEmergencia(e.target.value)}
          style={{
            padding: '0.5cm',
            fontSize: '0.8em',
            border: '2px solid #ccc',
            borderRadius: '5px',
            marginRight: '1cm',
          }}
        />
        <button
          onClick={agregarEmergencia}
          style={{
            fontSize: '0.8em',
            padding: '0.5cm',
            border: '2px solid #ccc',
            borderRadius: '5px',
          }}
        >
          Agregar Emergencia
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Emergencia sin asignar</th>
          </tr>
        </thead>
        <tbody>
          {emergenciasList.map((emergencia, index) => (
            <tr key={index}>
              <td style={{ marginBottom: '1cm' }}>{emergencia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
