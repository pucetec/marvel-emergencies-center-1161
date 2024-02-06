import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { AppProvider, useAppContext } from "./Context";
import EmergencyForm from "./components/EmergencyForm";
import EmergenciasAsignadasTable from "./components/EmergenciasAsignadasTable";
import EmergenciasSinAsignarTable from "./components/EmergenciasSinAsignarTable";
import HeroSelectionModal from "./components/HeroSelectionModal";
import axios from "axios";
import md5 from "md5";

const PUBLIC_KEY = "7361da9998833a4fb0adfacf7144bc6e";
const PRIVATE_KEY = "6699a8eea6b425a1c2d14dfcce8b46c0c91b5817";
const GATEWAY = "https://gateway.marvel.com:443/v1/public/characters?";

function App() {
  const {
    heroes,
    setHeroes,
  } = useAppContext();

  useEffect(() => {
    const marvelInfo = async () => {
      const timeStamp = Date.now().toString();
      const hash = timeStamp + PRIVATE_KEY + PUBLIC_KEY;
      const md5Key = md5(hash);

      const response = await axios.get(
        GATEWAY +
        "ts=" +
        timeStamp +
        "&apikey=" +
        PUBLIC_KEY +
        "&hash=" +
        md5Key
      );
      console.log({ response: response });
      setHeroes(response.data.data.results);
    };

    if (heroes.length === 0) {
      marvelInfo();
    }
  }, [heroes, setHeroes]);

  return (
    <Container className="App">
      <Row>
        <h1>Central de Emergencias</h1>
      </Row>
      <Row>
        <EmergencyForm />
      </Row>
      <Row>
        <EmergenciasSinAsignarTable />
      </Row>
      <Row>
        <EmergenciasAsignadasTable />
      </Row>
      <HeroSelectionModal />
    </Container>
  );
}

export default function AppWithContext() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
