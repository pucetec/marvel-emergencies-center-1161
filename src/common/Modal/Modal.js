import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const ModalComponent = ({ isOpen, closeModal, children }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Ejemplo"
      >
        {children}
        <button onClick={closeModal}>Assignar</button>
      </Modal>
    );
  };
  
  export default ModalComponent;
  