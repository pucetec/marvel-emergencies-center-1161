import React, { useState, useEffect } from 'react';
import MarvelModal from './poput';
import { bringMarvelInfo } from './services';

const MarvelModalContainer = () => {
    const [showModal, setShowModal] = useState(false);
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        // Función para traer la información de Marvel y filtrar los superhéroes
        const fetchMarvelSuperheroes = async () => {
            try {
                const characters = await bringMarvelInfo();
                const superheroCharacters = characters.filter(character =>
                    character?.description && character.description.toLowerCase().includes('superhero')
                );
                setHeroes(superheroCharacters);
            } catch (error) {
                console.error("Error fetching Marvel superheroes:", error);
            }
        };

        fetchMarvelSuperheroes();
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    return (
        <>
            <button onClick={handleOpenModal}>Mostrar Modal</button>
            <MarvelModal show={showModal} handleClose={handleCloseModal} heroes={heroes} />
        </>
    );
};

export default MarvelModalContainer;
