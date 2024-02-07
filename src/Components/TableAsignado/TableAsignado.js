import React from 'react'

const TableAsignado = ({handleAsignarHeroe, heroeAsignado, availableHeroes, emergencias, handleCloseHeroeAsignado}) => {
  return (
    <>
      {heroeAsignado && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
            <h2>Asigna tu súper Héroe</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', textAlign: 'center' }}>
              <div style={{ border: '1px solid #ccc', padding: '10px' }}>#</div>
              <div style={{ border: '1px solid #ccc', padding: '10px' }}>Héroe</div>
              <div style={{ border: '1px solid #ccc', padding: '10px' }}>Asignar</div>

              {availableHeroes.slice(1, 10).map((hero, index) => (
                <React.Fragment key={index}>
                  <div style={{ border: '1px solid #ccc', padding: '10px' }}>{index + 1}</div>
                  <div style={{ border: '1px solid #ccc', padding: '10px' }}>{hero}</div>
                  <div style={{ border: '1px solid #ccc', padding: '10px' }}>
                    <button onClick={() => handleAsignarHeroe(emergencias.findIndex(emergencia => emergencia.nombre === heroeAsignado), hero)} disabled={emergencias.find(emergencia => emergencia.nombre === heroeAsignado).heroe === hero}>
                      Asignar
                    </button>
                  </div>
                </React.Fragment>
              ))}

            </div>
            <button onClick={handleCloseHeroeAsignado}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  )
}

export default TableAsignado;