import { Table } from '@mui/material';
import './App.css';
import NormalButton from './common/Button/NormalButton';
import React from 'react';
import TableEdit from './common/Table/Table';
import TextInput from './common/Text/TextInput';
import md5 from 'md5';

const GATEWAY = "https://gateway.marvel.com:443/v1/public/characters";
const PUBLICKEY = "006cabd20cdbdf4894ee560b396cf790";
const PRIVATEKEY = "92c6fc7926af72efb60334467ad9441a011d40e9";




const App = () => {
  return (
    <div className="App">
      
      <h1>Emergency Center</h1>
      <TextInput text={"Emergencia"}></TextInput>
      <NormalButton variant={"contained"} text={"Ingresar"}></NormalButton>
      <Table></Table>
      <TableEdit headers={["#", "Emergencia", "Acciones"]} bodyRows={["1", "Robo en San Siro", "Eliminar"]}></TableEdit>
    </div>
  );
}

export default App;