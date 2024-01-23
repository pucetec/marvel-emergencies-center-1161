import React from "react";
import Typography from "../../commons/typography/Typography";
import TextInput from "../../commons/textInput/TextInput";
import ButtonMaterial from "../../commons/button/ButtonMaterial";

const TopAddEmergemcy = () => {
  return (
    <div>
      <Typography level={"h1"} text={"Central de emergencias"} />
      <center style={{display: 'flex'}}>
        <Typography level={"p"} text={"Emergencia"} /><TextInput /><ButtonMaterial text={"Ingresar"} />
      </center>
    </div>
  )
};

export default TopAddEmergemcy;