import React from "react";

const Table = ({ headers, bodyContent }) => {
  return (
    <table>
      <tr>
        {headers.map((rowTitle) => (
          <td>{rowTitle}</td>
        ))}
      </tr>
      <tr>
        {bodyContent.map((cellContent) => (
          <td>{cellContent}</td>
        ))}
      </tr> 
    </table>
  );
};

export default Table;