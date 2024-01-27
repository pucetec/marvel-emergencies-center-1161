// Components
import Button from "../../Components/Button/Button";

const Table = ({
  className,
  dataBsToggle,
  dataBsTarget,
  handleModalOpen,
  handleEliminarSinAsignarClick,
  handleEliminarAsignadoClick,
  AddIcon,
  DeleteIcon,
  emergenciasSinAsignar,
  emergenciasAsignadas,
  columnas,
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columnas.map((titulo, index) => (
            <th key={index} scope="col">
              {titulo}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {columnas.length === 3 ?
          (
            emergenciasSinAsignar.map((emergencia, index) => (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{emergencia.nombre}</td>
                <td>
                  <Button
                    className={className}
                    dataBsTarget={dataBsTarget}
                    dataBsToggle={dataBsToggle}
                    onClick={() => handleModalOpen(emergencia)}
                    text={AddIcon}
                  />

                  <Button
                    className={className}
                    onClick={() => handleEliminarSinAsignarClick(emergencia)}
                    text={DeleteIcon}
                  />
                </td>
              </tr>
            ))
          )
          :
          (
            emergenciasAsignadas.map((emergencia, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{emergencia.nombre}</td>
                <td>{emergencia.heroe}</td>
                <td>
                  <Button
                    className={"btn btn-link"}
                    onClick={() => handleEliminarAsignadoClick(emergencia)}
                    text={<i className="bi bi-trash"></i>}
                  />
                </td>
              </tr>
            ))
          )
        }
      </tbody>
    </table>
  );
}

export default Table;