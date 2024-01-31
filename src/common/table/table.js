
const Table=({headers,bodyRows,cellSpacing})=>{
    return(
        <table cellSpacing={cellSpacing}>
            <thead>
            <tr>
                {headers.map((element)=>(
                <td>{element}</td>
                ))}
            </tr>
            </thead>
            
            <tr>
                {bodyRows.map((element)=>(
                    <td>{element}</td>
                ))}
            </tr>
        </table>
    );
};
export default Table;