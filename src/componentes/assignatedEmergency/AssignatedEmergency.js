import React from "react";
import Typography from "../../commons/typography/Typography";
import AssignedTable from "../../commons/tables/AssignedTable";
import { useEmergency } from "../../context/EmergencyContext";

const AsignatedEmergency = () => {
  const { selectedHeroe } = useEmergency();
  console.log(selectedHeroe);

  return (
    <div>
      <Typography level={"h2"} text={"Emergencias Asignadas"} />
      <AssignedTable />
      {selectedHeroe}
    </div>
  );
};

export default AsignatedEmergency;