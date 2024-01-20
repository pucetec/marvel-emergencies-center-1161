
import './App.css';
import TextInput from './common/textinput/text';
import TextTitle from './common/texttitle/title';
import Table from './common/table/table';

const App=()=>{
  return(
    <div>
      <TextTitle/>
      <TextInput/>
      <br></br>
      <Table
      headers={["#","emergencias","Acciones"]}
      bodyRows={["1","Secuestro edificio"]}>
        </Table>
        <br></br>
      <Table
      headers={["#","Emergencias","Heroe","Acciones"]}
      bodyRows={["1","Robo en central parck","thor"]}>
      </Table>

      
    </div>
  );
}

export default App;
