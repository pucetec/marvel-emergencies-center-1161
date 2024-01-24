import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const ListaEmergencias = ({ emergenciasList, onMasClick, onBasuraClick }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Emergencia sin asignar</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {emergenciasList.map((emergencia, index) => (
          <tr key={index}>
            <td style={{ marginBottom: '1cm' }}>{emergencia}</td>
            <td>
              <button
                onClick={() => onMasClick(index)}
                style={{ marginLeft: '5cm' }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button
                onClick={() => onBasuraClick(index)}
                style={{ marginRight: '5cm' }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaEmergencias;

