import React from "react";
import Typography from "../../commons/typography/Typography";
import AssignedTable from "../../commons/tables/AssignedTable";

const AsignatedEmergency = ({ headers, bodyContent }) => {
  return (
    <div>
      <Typography level={"h2"} text={"Emergencias Asignadas"} />
      <AssignedTable 
        headers={["#", "Emergencia", "Héroe", "Acciones"]}
        bodyContent={[{emergency: "Robo en Central Park", nombre: "Thor"}]}
      />
    </div>
  );
};

export default AsignatedEmergency;