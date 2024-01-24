import React from "react";
import Typography from "../../commons/typography/Typography";
import Table from "../../commons/table/Table";
import ActionIcons from "../actionIcons/ActionIconsEmergencyWithoutAssignment";

const EmergencyWithoutAsignation = ({ bodyContent }) => {
  return (
    <div>
      <Typography level={"h2"} text={"Emergencias sin asignar"} />
      <Table 
        headers={["#", "Emergencia", "Acciones"]}
        bodyContent={bodyContent}
       />
    </div>
  );
};

export default EmergencyWithoutAsignation;