import { Table } from "react-bootstrap";

const Table1 = ({ headers, bodies, keys }) => {
  const cellStyle = {
    textAlign: "center",
    verticalAlign: "middle",
    margin: "5px",
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {headers.map((element, index) => (
              <th key={index} style={cellStyle}>
                {element}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodies.length > 0 && (
            bodies.map((element, cellIndex) => (
              <tr>
                {keys.map((key, position) => (
                  <td key={cellIndex} style={cellStyle}>
                    {element[key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Table1;

