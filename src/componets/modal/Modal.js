import React from 'react';

const Modal = ({ visible, onClose }) => {
  return (
    visible && (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-content">
            <h2>Agregar a tu super</h2>
            {/* Contenido del modal */}
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <button className="close-button" onClick={onClose}>
              X
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;





