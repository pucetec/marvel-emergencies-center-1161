import React from 'react';
import MarvelCharacters from './services';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';

const MarvelModal = ({ show, handleClose, heroes }) => {
    
    return (
        <Modal isOpen={show} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Asigna tu superhéroe aquí</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <MarvelCharacters heroes={heroes} /> 
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default MarvelModal;
