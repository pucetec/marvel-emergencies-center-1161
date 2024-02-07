import React from 'react'

const TableNoAsignar = ({emergencias, handleAsignar, handleBorrar}) => {
  return (
    <>
      <div style={{ fontSize: '20px' }}>Emergencias sin asignar</div>
      <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', textAlign: 'center' }}>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>#</div>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>Emergencias</div>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>Acciones</div>
        {
          emergencias.map((emergencia, index) => (
            <React.Fragment key={index}>
              <div style={{ border: '1px solid #ccc', padding: '10px' }}>{index + 1}</div>
              <div style={{ border: '1px solid #ccc', padding: '10px' }}>{emergencia.nombre}</div>
              <div style={{ border: '1px solid #ccc', padding: '10px' }}>
                <button onClick={() => handleAsignar(index)} disabled={emergencia.asignada}>
                  Asignar
                </button>
                <button onClick={() => handleBorrar(index)}>Borrar</button>
              </div>
            </React.Fragment>
          ))
        }
      </div>
    </>
  )
}

export default TableNoAsignar;