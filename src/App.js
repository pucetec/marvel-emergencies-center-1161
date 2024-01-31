import TextInput from './common/textinput/text';
import TextTitle from './common/texttitle/title';
import TableMarvel from './common/table/table';
import InsertButton from './common/button/button';
import { DeleteIcon,CheckIcon } from '@chakra-ui/icons';
import React,{useState} from'react';

const Public_keY="640d1a3f181daef1d461ca9e45431977";
const Private_key="6742d62f048eea0e5bba41006af05a1e7c8b4af6";
const Gateway="http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150";

const App=()=>{
  const [emergencies,setEmergencies]=useState([]);
  const [inputvalue,setInputValue]=useState('');
  
  const handleInputChange=(event)=>{
    setInputValue(event.target.value);
  }
  const handleAddEmergency=()=>{
    if(inputvalue.trim() !==''){
      const newEmergency = {
        id:emergencies.length+1,
        name:inputvalue.trim(),
      };
      setEmergencies([...emergencies,newEmergency]);
      setInputValue('');
    }
  };
  return(
    <div align='center'>
      <TextTitle/>
      Emergencias
      <TextInput value={inputvalue} onChange={handleInputChange}/>
      <InsertButton onClick={handleAddEmergency}/>
      <br></br>
      <strong>Emergencias sin Asignar</strong> 
      <br></br>
      <TableMarvel
      headers={["#","emergencias","Acciones"]}
      bodyRows={emergencies.map((emergencies)=>[emergencies.id,emergencies.name,])}>
        </TableMarvel>
        <br></br>
      <strong>Emergencias Asignadas</strong>
      <TableMarvel
      headers={[" #"," Emergencias "," Heroe "," Acciones "]}
      bodyRows={["nuevo","dato","thor",<div><DeleteIcon/><CheckIcon/></div>]}>
      </TableMarvel>
      
    </div>
  );
}


export default App;
