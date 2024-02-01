import React, { useState } from 'react';
import TitleEmerge from './common/texttitle/title';
import TextInput from './common/textinput/text';
import InsertButton from './common/button/button';
import TableMarvel from './common/table/table';
import { DeleteIcon, CheckIcon } from '@chakra-ui/icons';
import MarvelModal from './common/servicios/poput';

const App = () => {
    const [emergencies, setEmergencies] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [idCounter, setIdCounter] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedEmergency, setSelectedEmergency] = useState(null);
    const [assignedEmergencies, setAssignedEmergencies] = useState([]);
    
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
        setShowPopup(true); // Mostrar el popup cuando se hace clic en el ícono de check
    };

    const handleClosePopup = (selectedHero) => {
        setShowPopup(false);
        if (selectedHero) {
            const selectedEmergencyItem = emergencies.find(emergency => emergency.id === selectedEmergency);
            if (selectedEmergencyItem) {
                setAssignedEmergencies([...assignedEmergencies, { ...selectedEmergencyItem, hero: selectedHero }]);
                setEmergencies(emergencies.filter(emergency => emergency.id !== selectedEmergencyItem.id));
            }
        }
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
                    <span key={emergency.id}>{emergency.id}</span>,
                    <span key={emergency.id + "-name"}>{emergency.name}</span>,
                    <div key={emergency.id + "-actions"}>
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
                bodyRows={assignedEmergencies.map(emergency => [
                    <span key={emergency.id}>{emergency.id}</span>,
                    <span key={emergency.id + "-name"}>{emergency.name}</span>,
                    <span key={emergency.id + "-hero"}>{emergency.hero}</span>,
                    <div key={emergency.id + "-actions"}>
                        <button>
                            <DeleteIcon />
                        </button>
                    </div>
                ])}
            />
            
            {showPopup && <MarvelModal show={showPopup} handleClose={handleClosePopup} />}
        </div>
    );
}

export default App;
