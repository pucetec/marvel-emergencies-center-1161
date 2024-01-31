import React from "react";
import Typography from "../../commons/typography/Typography";
import AssignedTable from "../../commons/tables/AssignedTable";
import { useEmergency } from "../../context/EmergencyContextManagement";

const AsignatedEmergency = () => {
  const { selectedHeroe } = useEmergency();

  return (
    <div>
      <Typography level={"h2"} text={"Emergencias Asignadas"} />
      <AssignedTable />
     
      {selectedHeroe}
    </div>
  );
};

export default AsignatedEmergency;