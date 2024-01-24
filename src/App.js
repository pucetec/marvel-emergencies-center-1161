// App.js
import React, { useState } from 'react';
import EntradaEmergencia from './componets/EntradaEmergencias/EntradaEmergencias';
import ListaEmergencias from './componets/ListaEmergencias/ListaEmergencias';
import Modal from './componets/modal/Modal'; // Asegúrate de importar el componente Modal

const App = () => {
  const [emergenciasList, setEmergenciasList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const agregarEmergencia = (nuevaEmergencia) => {
    setEmergenciasList([...emergenciasList, nuevaEmergencia]);
  };

  const handleMasClick = () => {
    setModalVisible(true);
  };

  const handleBasuraClick = (index) => {
    const nuevasEmergenciasList = [...emergenciasList];
    nuevasEmergenciasList.splice(index, 1);
    setEmergenciasList(nuevasEmergenciasList);
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
          onMasClick={handleMasClick}
          onBasuraClick={handleBasuraClick}
        />
      )}

      <Modal visible={modalVisible} onClose={closeModal} />
    </div>
  );
}

export default App;


