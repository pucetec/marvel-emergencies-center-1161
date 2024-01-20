import React, { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [emergencias, setEmergencias] = useState([]);

  const agregarEmergencia = () => {
    if (inputValue.trim() !== "") {
      setEmergencias([...emergencias, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="centrado">
      <h1>Tu Título</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={agregarEmergencia}>Agregar Emergencia</button>

      <table>
        <thead>
          <tr>
            <th>Emergencias</th>
          </tr>
        </thead>
        <tbody>
          {emergencias.map((emergencia, index) => (
            <tr key={index}>
              <td>{emergencia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
