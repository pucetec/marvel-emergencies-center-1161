import React from "react";

const EmergencyControl = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Control de emergencias - Centro Marvel</div>

      <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ marginRight: '10px' }}>Emergencias:</span>
        <div style={{ border: '1px solid #ccc', padding: '10px', display: 'inline-block' }}>
          <input type="text" placeholder="Escribir aquí" />
        </div>
        <button style={{ marginLeft: '10px', padding: '8px 16px', fontSize: '16px', backgroundColor: '#5499c7', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Ingresar
        </button>
      </div>
      <div style={{ fontSize: '20px'}}>Emergencias sin asignar</div>
    </div>
  );
};

export default EmergencyControl;

