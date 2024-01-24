
const TableEdit = ({headers, bodyRows}) => {
  return (
    <div style={{textAlign:"center", margin: "30px"}}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {headers.map((element) => (
              <td style={{padding: "10px", border: "1px solid #ddd"}}>{element}</td>
            ))}
          </tr>
        </thead>
        <tr>
          {bodyRows.map((element) => (
              <td style={{padding: "10px", border: "1px solid #ddd"}}>{element}</td>
            ))}
        </tr>
      </table>
    </div>
  );
}
export default TableEdit;