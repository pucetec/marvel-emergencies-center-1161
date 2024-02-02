import React from "react";
import Typography from "../../commons/typography/Typography";
import NoAssigneTable from "../../commons/tables/NoAssigneTable";
import { useEmergency } from "../../context/EmergencyContextManagement";

const EmergencyWithoutAsignation = () => {
  const {} = useEmergency();

  return (
    <div>
      <Typography level={"h2"} text={"Emergencias sin asignar"} />
      <NoAssigneTable />
    </div>
  );
};

export default EmergencyWithoutAsignation;
