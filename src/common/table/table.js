
const Table=({headers,bodyRows})=>{
    return(
        <table>
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