import React from 'react'

const EmergenciasNoAsignadas = ({emergenciasNoAsignadas, handleDesasignarHeroe}) => {
  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <div style={{ fontSize: '20px' }}>Emergencias no asignadas</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', textAlign: 'center' }}>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>#</div>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>Emergencias</div>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>Heroe</div>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>Acciones</div>
      </div>

      {emergenciasNoAsignadas.map((emergencia, index) => (
        <div key={index} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', textAlign: 'center' }}>
          <div style={{ border: '1px solid #ccc', padding: '10px' }}>{index + 1}</div>
          <div style={{ border: '1px solid #ccc', padding: '10px' }}>{emergencia.nombre}</div>
          <div style={{ border: '1px solid #ccc', padding: '10px' }}>{emergencia.heroe}</div>
          <div style={{ border: '1px solid #ccc', padding: '10px' }}>
            <button onClick={() => handleDesasignarHeroe(index)}>Desasignar</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EmergenciasNoAsignadas;