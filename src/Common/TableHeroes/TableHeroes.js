const TableHeroes = ({ heroList, handleHeroAsignarClick }) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Asignar</th>
        </tr>
      </thead>
      <tbody>
        {heroList.map((hero, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{hero.name}</td>
            <td>
              <button className={hero.status ? "btn btn-primary" : "btn btn-primary disabled"} onClick={() => handleHeroAsignarClick(hero)} data-bs-dismiss="modal">
                {hero.status ? "Asignar" : "Asignado"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableHeroes;