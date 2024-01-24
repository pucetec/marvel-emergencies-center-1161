

import TextInput from './common/textinput/text';
import TextTitle from './common/texttitle/title';
import TableMarvel from './common/table/table';
import InsertButton from './common/button/button';

const Public_keY="640d1a3f181daef1d461ca9e45431977";
const Private_key="6742d62f048eea0e5bba41006af05a1e7c8b4af6";
const Gateway="http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150";

const App=()=>{
  return(
    <div align='center'>
      <TextTitle/>
      Emergencias
      <TextInput />
      <InsertButton />
      <br></br>
      <strong>Emergencias sin Asignar</strong> 
      <br></br>
      <TableMarvel
      headers={["#","emergencias","Acciones"]}
      bodyRows={["1","Secuestro edificio"]}>
        </TableMarvel>
        <br></br>
      <strong>Emergencias Asignadas</strong>
      <TableMarvel
      headers={[" #"," Emergencias "," Heroe "," Acciones "]}
      bodyRows={["1","Robo en central parck","thor",]}>
      </TableMarvel>

      
    </div>
  );
}


export default App;
