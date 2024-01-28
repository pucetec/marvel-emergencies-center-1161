import React, { useState } from "react";
import TextInput from "../../common/Text/TextInput";
import NormalButton from "../../common/Button/NormalButton";

const Header = ({onEmergencyChange, onButtonClick}) => {
  const [addEmergency, setAddEmergency] = useState("");
  
  const handleButtonClick = () => {
    onButtonClick();
    setAddEmergency("");
  };
  return (
    <div style={{textAlign:"center"}}>
      <h1>Central de Emergencia</h1>
      <div style={{display: "flex"}}>
      <TextInput text={"Emergencia"}
            onChange={(e) => {
            onEmergencyChange(e);
            setAddEmergency(e.target.value);
          }}
          value={addEmergency}></TextInput>
      <NormalButton variant={"contained"} text={"Ingresar"} onClick={handleButtonClick}></NormalButton>
      </div>
    </div>
  );
}

export default Header;