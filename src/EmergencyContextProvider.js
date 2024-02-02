import React from "react";
import Marvel from "./Marvel";  // Agrega esta línea
import { EmergencyProvider } from "./EmergencyContext";

function App() {
  return (
    <EmergencyProvider>
      <Marvel />
    </EmergencyProvider>
  );
}

export default App;