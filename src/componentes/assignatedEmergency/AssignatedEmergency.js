import React from "react";
import Typography from "../../commons/typography/Typography";
import Table from "../../commons/table/Table";
import ActionIconAssignatedEmergency from "../actionIcons/ActionIconAssignatedEmergency";

const AsignatedEmergency = () => {
    return (
        <div>
            <Typography level={"h2"} text={"Emergencias Asignadas"} />
            <Table
          headers={["#", "Emergencia", "Héroe", "Acciones"]}
          bodyContent={["1", "Robo en Central Park", "Thor", <ActionIconAssignatedEmergency />]}
        />
        </div>
    );
};

export default AsignatedEmergency;