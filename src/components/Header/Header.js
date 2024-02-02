import React, { useState } from "react";
import TextInput from "../../common/Text/TextInput";
import NormalButton from "../../common/Button/NormalButton";
import TableEdit from "../../common/Table/Table";
import DeleteButton from "../../common/Button/DeleteButton";
import FloatButton from "../../common/Test/Tests";
import { useEmergencyContext } from "../../contextos/EmergencyContext";
import PopUpTable from "../HeroTable/PopUpTable";
import { HeroContextProvider } from "../../contextos/HeroContext";

const Header = () => {
  const { emergencies, addEmergency, deleteEmergency } = useEmergencyContext();
  const [addNewEmergency, setAddNewEmergency] = useState("");

  const handleButtonClick = () => {
    if (addNewEmergency.trim() !== "") {
      addEmergency({ id:emergencies.length+1, name:addNewEmergency });
      setAddNewEmergency("");
    }
  };

  return (
    <HeroContextProvider>
    <div style={{ textAlign: "center" }}>
      <h1>Central de Emergencia</h1>
      <div style={{ display: "flex" }}>
        <TextInput
          text={"Emergencia"}
          onChange={(e) => setAddNewEmergency(e.target.value)}
          value={addNewEmergency}
        />
        <NormalButton
          variant={"contained"}
          text={"Ingresar"}
          onClick={handleButtonClick}
        />
      </div>
      <TableEdit headers={["#", "Emergencia", "Acciones"]} bodyRows={emergencies.map((item, position) => [
        item.id,
        item.name,
        <div>
          <PopUpTable></PopUpTable>
          <DeleteButton key={position} onClick={() => deleteEmergency(item.id)}/>
        </div>
      ])}></TableEdit>
    </div>
    </HeroContextProvider>
  );
};

export default Header