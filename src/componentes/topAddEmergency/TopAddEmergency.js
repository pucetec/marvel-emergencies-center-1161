import React from "react";
import Typography from "../../commons/typography/Typography";
import TextInput from "../../commons/textInput/TextInput";
import ButtonMaterial from "../../commons/button/ButtonMaterial";
import { useEmergency } from "../../context/EmergencyContext";

const TopAddEmergemcy = () => {
  const {
    setNewEmergencyName,
    newEmergencyName,
    handleNewEmergencyClick,
  } = useEmergency();

  return (
    <div>
      <Typography level={"h1"} text={"Central de emergencias"} />
      <center style={{ display: "flex" }}>
        <Typography level={"p"} text={"Emergencia"} />
        <TextInput
          value={newEmergencyName}
          onChange={(e) => setNewEmergencyName(e.target.value)}
        />
        <ButtonMaterial onClick={handleNewEmergencyClick} text={"Ingresar"} />
      </center>
    </div>
  );
};

export default TopAddEmergemcy;
