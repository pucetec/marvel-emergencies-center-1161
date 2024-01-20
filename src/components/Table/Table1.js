import { Table } from "react-bootstrap";
const Table1 = ({ headers, bodies }) => {
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
            {headers.map((element) => (
              <th style={cellStyle}>{element}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {bodies.map((element) => (
              <td style={cellStyle}>{element}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Table1;
