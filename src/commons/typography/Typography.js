import React from "react";

const Typography = ({ level, text }) => {
  if (level === "h1") {
    return (
      <hi>
        <center>{text}</center>
      </hi>
    )
  } 
};

export default Typography;