import React, { useState } from 'react';

const EntradaEmergencia = ({ onAgregarEmergencia }) => {
  const [emergencia, setEmergencia] = useState('');

  const handleAgregarEmergencia = () => {
    if (emergencia.trim() !== '') {
      onAgregarEmergencia(`${emergencia}`);
      setEmergencia('');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1cm' }}>
      <h2 style={{ marginRight: '1cm' }}>Emergencia</h2>
      <div>
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
          onClick={handleAgregarEmergencia}
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
    </div>
  );
};

export default EntradaEmergencia;

