import { useState } from "react";

function App() {

  const heroList = {
    name: "Thor",
    name: "Iron Man"
  }

  const [emergencia, setEmergencia] = useState("");
  const [emergenciasSinAsignar, setEmergenciasSinAsignar] = useState([]);
  const [emergenciasAsignadas, setEmergenciasAsignadas] = useState([]);

  const handleInputChange = (e) => {
    setEmergencia(e.target.value);
  };

  const handleIngresarClick = () => {
    if (emergencia.trim() === "") return;

    const nuevaEmergencia = {
      id: Date.now(),
      nombre: emergencia,
    };

    setEmergenciasSinAsignar([...emergenciasSinAsignar, nuevaEmergencia]);
    setEmergencia("");
  };

  return (
    <div className="App container">

      <h1 className="my-5">
        Central de Emergencias
      </h1>

      <div className="d-inline-flex gap-4 align-items-center my-5">
        <h5 className="m-0">Emergencia</h5>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Ingrese emergencia"
            value={emergencia}
            onChange={handleInputChange}
          />
          <label htmlFor="floatingInput">Emergencia</label>
        </div>
        <div>
          <button className="btn btn-primary" onClick={handleIngresarClick}>
            Ingresar
          </button>
        </div>
      </div>

      <div className="my-5">
        <h4 className="my-5">Emergencias sin asignar</h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Emergencia</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {emergenciasSinAsignar.map((emergencia, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{emergencia.nombre}</td>
                <td>
                  <button
                    className="btn btn-link"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    <i className="bi bi-app-indicator"></i>
                  </button>
                  <button className="btn btn-link">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="my-5">

        <h4 className="my-5">
          Emergencias asignadas
        </h4>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Emergencia</th>
              <th scope="col">Heroe</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {emergenciasAsignadas.map((emergencia, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{emergencia.nombre}</td>
                <td>
                  <button
                    className="btn btn-link"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    <i className="bi bi-app-indicator"></i>
                  </button>
                  <button className="btn btn-link">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Asignar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>
                      <button className="btn btn-primary">
                        Asignar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
