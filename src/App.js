// App.js
import React, { useState } from 'react';
import ListaEmergencias from './componets/ListaEmergencias/ListaEmergencias';
import Modal from './componets/modal/Modal';
import ListaEmergenciaAsignada from './componets/ListaEmergenciaAsignada/ListaEmergenciaAsignada'; // Importa el nuevo componente
import EntradaEmergencia from './componets/EntradaEmergencias/EntradaEmergencias';

const App = () => {
  const [emergenciasList, setEmergenciasList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [emergencyAssignments, setEmergencyAssignments] = useState([]);

  const agregarEmergencia = (nuevaEmergencia) => {
    setEmergenciasList([...emergenciasList, nuevaEmergencia]);
  };

  const handleMasClick1 = () => {
    setModalVisible(true);
  };

  const handleBasuraClick1 = (index) => {
    const nuevasEmergenciasList = [...emergenciasList];
    nuevasEmergenciasList.splice(index, 1);
    setEmergenciasList(nuevasEmergenciasList);
  };

  const handleAsignarHeroe = (superheroName) => {
    // Agregar lógica para obtener la emergencia seleccionada aquí
    const selectedEmergency = emergenciasList[0]; // Por ahora, seleccionamos la primera emergencia de la lista

    const hero = superheroName;
    const newAssignment = { emergency: selectedEmergency, hero }; // Pasar la emergencia seleccionada como parte de la asignación
    setEmergencyAssignments([...emergencyAssignments, newAssignment]);
    setModalVisible(false);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <h1>Central de Emergencia</h1>
      <EntradaEmergencia onAgregarEmergencia={agregarEmergencia} />
      {emergenciasList.length > 0 && (
        <ListaEmergencias
          emergenciasList={emergenciasList}
          onMasClick={handleMasClick1}
          onBasuraClick={handleBasuraClick1}
        />
      )}

      <Modal visible={modalVisible} onClose={closeModal} onAsignarHeroe={handleAsignarHeroe} />

      {/* Nueva tabla para mostrar emergencias asignadas */}
      <ListaEmergenciaAsignada assignments={emergencyAssignments} />
    </div>
  );
}

export default App;
