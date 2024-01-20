import React, { useState, useContext } from "react";
import { EmergencyContext } from "./EmergencyContext";

function EmergencyInput() {
  const [inputValue, setInputValue] = useState("");
  const { addEmergency } = useContext(EmergencyContext);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    addEmergency(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Ingresar</button>
    </div>
  );
}

export default EmergencyInput;
