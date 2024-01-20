import React from "react";
import Typography from "../../commons/typography/Typography";
import TextInput from "../../commons/textInput/TextInput";
import Button from "../../commons/button/Button";

const TopAddEmergemcy = () => {
  return (
    <div>
      <Typography level={"h1"} text={"Central de emergencias"} />
      <center>
        <TextInput /><Button text={"Ingresar"} />
      </center>
    </div>
  )
};

export default TopAddEmergemcy;