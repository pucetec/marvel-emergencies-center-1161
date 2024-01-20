import { Table } from '@mui/material';
import './App.css';
import NormalButton from './common/Button/NormalButton';
import React from 'react';
import TableEdit from './common/Table/Table';
import TextInput from './common/Text/TextInput';

const App = () => {
  return (
    <div className="App">
      <h1>Central de Emergemcia</h1>
      <TextInput text={"Emergencia"}></TextInput>
      <NormalButton variant={"contained"} text={"Ingresar"}></NormalButton>
      <Table></Table>
      <TableEdit headers={["#", "Emergencia", "Acciones"]} bodyRows={["1", "Robo en San Pedro", "Eliminar"]}></TableEdit>
    </div>
  );
}

export default App;
