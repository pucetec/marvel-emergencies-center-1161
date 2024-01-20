import TopAddEmergemcy from "./componentes/topAddEmergency/TopAddEmergency";
import Table from "./componentes/table/Table";

function App() {
  return (
    <div >
      <TopAddEmergemcy />
      <Table 
        headers={["#", "Emergencia", "Acciones"]}
        bodyContent={["1", "Robo en Fake Street 1234", "Asignar o suprimir"]}
      />
    </div>
  );
}

export default App;
