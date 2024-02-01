import React, { useState } from 'react';
import TitleEmerge from './common/texttitle/title';
import TextInput from './common/textinput/text';
import InsertButton from './common/button/button';
import TableMarvel from './common/table/table';
import { DeleteIcon, CheckIcon } from '@chakra-ui/icons';
import MarvelModalContainer from './common/servicios/poput';

const App = () => {
    const [emergencies, setEmergencies] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [idCounter, setIdCounter] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedEmergency, setSelectedEmergency] = useState(null);


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleAddEmergency = () => {
        if (inputValue.trim() !== '') {
            const newEmergency = {
                id: idCounter,
                name: inputValue.trim(),
            };
            setEmergencies([...emergencies, newEmergency]);
            setInputValue('');
            setIdCounter(idCounter + 1); // Incrementa el contador de ID
        }
    };

    const handleDeleteEmergency = (id) => {
        const updatedEmergencies = emergencies.filter(emergency => emergency.id !== id);
        setEmergencies(updatedEmergencies);
        // Encuentra el ID más alto existente
        const highestId = Math.max(...updatedEmergencies.map(emergency => emergency.id), 0);
        // Reinicia el contador de ID al siguiente número después del más alto
        setIdCounter(highestId + 1);
    };

    const handleCheckIconClick = (emergencyId) => {
        setSelectedEmergency(emergencyId);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setSelectedEmergency(null);
    };

    return (
        <div align='center'>
            <TitleEmerge />
            Emergencias
            <TextInput value={inputValue} onChange={handleInputChange} />
            <InsertButton onClick={handleAddEmergency} />
            <br />
            <strong>Emergencias sin Asignar</strong>
            <br />
            <TableMarvel
                headers={["#", "Emergencias", "Acciones"]}
                bodyRows={emergencies.map(emergency => [
                    <span>{emergency.id}</span>,
                    <span>{emergency.name}</span>,
                    <div>
                        <button onClick={() => handleDeleteEmergency(emergency.id)}>
                            <DeleteIcon />
                        </button>
                        <button onClick={() => handleCheckIconClick(emergency.id)}> 
                            <CheckIcon />
                        </button>
                    </div>,
                ])}
            />
            <br></br>
            <br></br>
            <br></br>
            <strong>Emergencias Asignadas</strong>
            <TableMarvel
                headers={["#", "Emergencias", "Heroe", "Acciones"]}
                bodyRows={[
                    ["nuevo", "dato", "thor", <div><DeleteIcon /><CheckIcon /></div>]
                ]}
            />
            {/* Agregar el Popup */}
            <MarvelModalContainer handleClose={handleClosePopup} show={showPopup}>
                Contenido del Popup
            </MarvelModalContainer>
        </div>
    );
}

export default App;
