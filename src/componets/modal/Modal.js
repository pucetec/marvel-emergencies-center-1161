// Modal.js
import React from 'react';
import './Modal.css';
import GetMarvelData from '../Marvel/Marvel';

const Modal = ({ visible, onClose, onAsignarHeroe }) => {
  const [superheroes, setSuperheroes] = React.useState([]);

  React.useEffect(() => {
    // Obtiene los datos de Marvel cuando el modal se muestra por primera vez
    if (visible) {
      fetchMarvelCharacters();
    }
  }, [visible]);

  const fetchMarvelCharacters = async () => {
    try {
      const data = await GetMarvelData();
      const characters = data.data.results.map(character => ({
        id: character.id,
        name: character.name,
      }));
      setSuperheroes(characters);
    } catch (error) {
      console.error('Error al obtener datos de Marvel API:', error);
    }
  };

  const handleAsignarClick = (superheroName) => {
    // Llama a la función onAsignarHeroe con la emergencia seleccionada y el héroe correspondiente
    onAsignarHeroe(superheroName);
  };

  return (
    visible && (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <h2>Agregar a tu super</h2>
            <button className="close-button" onClick={onClose}>
              X
            </button>
          </div>
          <div className="modal-content">
            <p>Héroe:</p>
            <ul>
              {superheroes.map(superhero => (
                <li key={superhero.id}>
                  {superhero.name}
                  <button onClick={() => handleAsignarClick(superhero.name)}>Asignar</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;






