import React, { useState } from "react";

const GET_WAY = "http://gateway.marvel.com/v1/public/comics?ts=1&";

const HeroesNom = ["Spider-Man", "Iron Man", "Thor", "Hulk", "Captain America", "Black Widow", "Doctor Strange", "Black Panther"];

const EmergencyControl = () => {
  const [emergencias, setEmergencias] = useState([]);
  const [emergenciasNoAsignadas, setEmergenciasNoAsignadas] = useState([]);
  const [nuevaEmergencia, setNuevaEmergencia] = useState('');
  const [heroeAsignado, setHeroeAsignado] = useState(null);

  const handleChange = (e) => {
    setNuevaEmergencia(e.target.value);
  };

  const handleIngresar = () => {
    if (nuevaEmergencia.trim() !== '') {
      setEmergencias([...emergencias, { nombre: nuevaEmergencia, asignada: false, heroe: null }]);
      setEmergenciasNoAsignadas([...emergenciasNoAsignadas, { nombre: nuevaEmergencia, asignada: false, heroe: null }]);
      setNuevaEmergencia('');
    }
  };

  const handleAsignar = (index) => {
    const nuevasEmergencias = [...emergencias];
    nuevasEmergencias[index].asignada = true;
    setEmergencias(nuevasEmergencias);
    setHeroeAsignado(nuevasEmergencias[index].nombre);

    const emergenciaAsignada = nuevasEmergencias[index];
    setEmergenciasNoAsignadas((prevEmergenciasNoAsignadas) => [...prevEmergenciasNoAsignadas, emergenciaAsignada]);
  };

  const handleBorrar = (index) => {
    const nuevasEmergencias = [...emergencias];
    const emergenciaEliminada = nuevasEmergencias.splice(index, 1)[0];

    setEmergencias(nuevasEmergencias);
    setEmergenciasNoAsignadas((prevEmergenciasNoAsignadas) =>
      prevEmergenciasNoAsignadas.filter((emergencia) => emergencia.nombre !== emergenciaEliminada.nombre)
    );
  };

  const handleCloseHeroeAsignado = () => {
    setHeroeAsignado(null);
  };

  const handleAsignarHeroe = (index, heroe) => {
    const nuevasEmergencias = [...emergencias];
    nuevasEmergencias[index].heroe = heroe;
    setEmergencias(nuevasEmergencias);
    handleCloseHeroeAsignado();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Control de emergencias - Centro Marvel</div>
      <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ marginRight: '10px' }}>Emergencias:</span>
        <div style={{ border: '1px solid #ccc', padding: '10px', display: 'inline-block' }}>
          <input type="text" placeholder="Escribir aquí" value={nuevaEmergencia} onChange={handleChange} />
        </div>
        <button
          style={{
            marginLeft: '10px',
            padding: '8px 16px',
            fontSize: '16px',
            backgroundColor: '#5499c7',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={handleIngresar}
        >
          Ingresar
        </button>
      </div>

      <div style={{ fontSize: '20px' }}>Emergencias sin asignar</div>

      <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', textAlign: 'center' }}>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>#</div>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>Emergencias</div>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>Acciones</div>

        {emergencias.map((emergencia, index) => (
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
        ))}
      </div>

      {heroeAsignado && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
            <h2>Asigna tú súper Héroe</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', textAlign: 'center' }}>
              <div style={{ border: '1px solid #ccc', padding: '10px' }}>#</div>
              <div style={{ border: '1px solid #ccc', padding: '10px' }}>Héroe</div>
              <div style={{ border: '1px solid #ccc', padding: '10px' }}>Asignar</div>

              {HeroesNom.map((hero, index) => (
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

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <div style={{ fontSize: '20px' }}>Emergencias no asignadas</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', textAlign: 'center' }}>
          <div style={{ border: '1px solid #ccc', padding: '10px' }}>#</div>
          <div style={{ border: '1px solid #ccc', padding: '10px' }}>Emergencias</div>
          <div style={{ border: '1px solid #ccc', padding: '10px' }}>Heroe</div>
        </div>
        {emergenciasNoAsignadas.map((emergencia, index) => (
          <div key={index} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', textAlign: 'center' }}>
            <div style={{ border: '1px solid #ccc', padding: '10px' }}>{index + 1}</div>
            <div style={{ border: '1px solid #ccc', padding: '10px' }}>{emergencia.nombre}</div>
            <div style={{ border: '1px solid #ccc', padding: '10px' }}>{emergencia.heroe}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default EmergencyControl;
