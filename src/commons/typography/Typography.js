import React from "react";

const Typography = ({ level, text }) => {
  if (level === "h1") {
    return (
      <h1>
        <center>{text}</center>
      </h1>
    )
  } else if (level === "h2") {
    return (
      <h2>
        <center>{text}</center>
      </h2>
    )
  } else if (level === "p") {
    return (
      <p>{text}</p>
    )
  }
};

export default Typography;