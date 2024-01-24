import React from "react";
import Typography from "../../commons/typography/Typography";
import TextInput from "../../commons/textInput/TextInput";
import ButtonMaterial from "../../commons/button/ButtonMaterial";

const TopAddEmergemcy = ({ value, onChange, onClick }) => {
  return (
    <div>
      <Typography level={"h1"} text={"Central de emergencias"} />
      <center style={{display: 'flex'}}>
        <Typography level={"p"} text={"Emergencia"} /><TextInput value={value} onChange={onChange} /><ButtonMaterial onClick={onClick} text={"Ingresar"} />
      </center>
    </div>
  )
};

export default TopAddEmergemcy;