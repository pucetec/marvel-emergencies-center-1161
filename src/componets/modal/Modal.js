// Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ visible, onClose }) => {
  return (
    visible && (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <h2>Agrega a tu super</h2>
            <button className="close-button" onClick={onClose}>
              X
            </button>
          </div>
          <div className="modal-content">
            {/* Contenido del modal */}
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;






