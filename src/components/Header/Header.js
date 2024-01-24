import React from "react";
import TextInput from "../../common/Text/TextInput";
import NormalButton from "../../common/Button/NormalButton";

const Header = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h1>Central de Emergencia</h1>
      <div style={{display: "flex"}}>
      <TextInput text={"Emergencia"}></TextInput>
      <NormalButton variant={"contained"} text={"Ingresar"}></NormalButton>
      </div>
    </div>
  );
}

export default Header;