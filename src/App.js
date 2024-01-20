import logo from "./logo.svg";
import "./App.css";
import Table from "./common/Table/Table";
import axios from "axios";

const PUBLIC_KEY = "a528d3583ff453a4c854366f226ad322";
const PRIVATE_KEY = "cbb7acd7ade6d65c3e914b675cce68b2323bfef3";
function App() {
  const bringMarvelInfo = async () => {
    const response = await axios.get(
      "http://gateway.marvel.com/v1/public/comics?apikey=" +
        PUBLIC_KEY +
        "&ts=1705772894639" +
        "&hash=0d58b465845c2f34337547d82faad0a8",
      {
        headers: {
          Accept: "*/*",
        },
      }
    );
    console.log({ response });
  };

  bringMarvelInfo();

  return (
    <div className="App">
      <Table
        headers={["#", "Emergencia", "Acciones"]}
        bodyRows={["1", "Robo en Fake street 1234", "Eliminar"]}
      />
      <br></br>
      <Table
        headers={["#", "Nombre", "Asignar", "2", "34324"]}
        bodyRows={["1", "Spiderman", "boton", 1, 2]}
      />
    </div>
  );
}

export default App;
