import { Table } from '@mui/material';
import './App.css';
import NormalButton from './common/Button/NormalButton';
import React, {useState} from 'react';
import TableEdit from './common/Table/Table';
import TextInput from './common/Text/TextInput';
import md5 from 'md5';
import axios from 'axios';
import ModalComponent from './common/Modal/Modal';

const GATEWAY = "https://gateway.marvel.com:443/v1/public/characters";
const PUBLIC_KEY = "006cabd20cdbdf4894ee560b396cf790";
const PRIVATE_KEY = "92c6fc7926af72efb60334467ad9441a011d40e9";



/* const marvelInfo = async () => { 
  const timeStamp = Date.now().toString();
  const hash = timeStamp + PRIVATE_KEY + PUBLIC_KEY;
  const md5Key = md5(hash);

  const response = await axios.get(
    GATEWAY + "ts=" + timeStamp + "&apikey=" + PUBLIC_KEY + "&hash=" + md5Key
  );
  console.log({ response: response });
  setHeroes(response.data.data.results);
  catch (error){
    console.error('Error al traer los superheroes', error);
    throw error;
  }
};
marvelInfo(); */



const App = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="App">
      
      <h1>Centro de emergencias</h1>
      <TextInput text={"Emergencia"}></TextInput>
      <NormalButton variant={"contained"} text={"Ingresar"}></NormalButton>
      <TableEdit headers={["#", "Emergencia", "Acciones"]} bodyRows={["1", "Robo en NY", "Eliminar"]}></TableEdit>
      <button onClick={openModal}>Abrir Modal</button>
      <ModalComponent isOpen={isModalOpen} closeModal={closeModal}>
        <h2>Asigna tu superhéroe</h2>
        <TableEdit headers={["#", "Nombre", "Asignar"]} bodyRows={[".", ".", "."]}></TableEdit>

      </ModalComponent>
    
    </div>
  );
}

export default App;