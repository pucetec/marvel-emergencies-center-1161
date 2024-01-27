import React from "react";
import Typography from "../../commons/typography/Typography";
import NoAssigneTable from "../../commons/tables/NoAssigneTable";


const EmergencyWithoutAsignation = ({ bodyContent, onClick, open, onClick2, onClose }) => {
  
  return (
    <div>
      <Typography level={"h2"} text={"Emergencias sin asignar"} />
      <NoAssigneTable 
        headers={["#", "Emergencia", "Acciones"]}
        bodyContent={bodyContent}
        onClick={onClick}
        open={open}
        onClick2={onClick2}
        onClose={onClose}
       />
    </div>
  );
};

export default EmergencyWithoutAsignation;