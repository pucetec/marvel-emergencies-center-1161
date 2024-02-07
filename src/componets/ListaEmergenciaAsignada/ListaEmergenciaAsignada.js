// ListaEmergenciaAsignada.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const ListaEmergenciaAsignada = ({ assignments, onMasClick, onBasuraClick }) => {
  return (
    <div>
      <h2>Emergencias Asignadas</h2>
      <table>
        <thead>
          <tr>
            <th>Emergencia</th>
            <th>Héroe Asignado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment, index) => (
            <tr key={index}>
              <td>{assignment.emergency}</td>
              <td>{assignment.hero}</td>
              <td>
                <button onClick={() => onMasClick(index)}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button onClick={() => onBasuraClick(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaEmergenciaAsignada;
