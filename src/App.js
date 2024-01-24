import { useState, useEffect } from "react";
import md5 from 'md5';
import axios from 'axios';

// Components
import Button from "./Components/Button/Button";

function App() {


  const PUBLIC_KEY = "758b39b923384db09734503e705b0481";
  const PRIVATE_KEY = "064eeabf0a9554f2bf531ff4af173aadc955957b";
  const GATEWAY = "http://gateway.marvel.com/v1/public/characters?";

  const timestamp = new Date().getTime();
  const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

  const url = `${GATEWAY}ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;

  const [heroList, setHeroList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const heroes = response.data.data.results.map((hero) => ({
          name: hero.name,
          status: true,
        }));
        setHeroList(heroes);
      } catch (error) {
        console.error("Error en la API: ", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array


  const [emergencia, setEmergencia] = useState("");
  const [selectedUser, setSelectedUser] = useState(null); // Nuevo estado para almacenar el usuario seleccionado
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

  const handleModalOpen = (user) => {
    setSelectedUser(user); // Al abrir el modal, guarda el usuario seleccionado
  };

  const handleHeroAsignarClick = (hero) => {
    if (selectedUser) {
      // Verifica que el héroe tenga un nombre antes de asignarlo
      const heroeAsignado = hero.name;

      // Recorre la lista de héroes
      const updatedHeroList = heroList.map((h) => {
        // Verifica si el nombre del héroe coincide con el héroe asignado
        if (h.name === heroeAsignado) {
          // Al asignar un héroe, cambia el estado (status) a false
          return { ...h, status: false };
        } else {
          return h;
        }
      });

      // Al asignar un héroe, agrega el usuario y el héroe asignado a la segunda tabla
      const emergenciaAsignada = {
        ...selectedUser,
        heroe: heroeAsignado,
      };

      setEmergenciasAsignadas([...emergenciasAsignadas, emergenciaAsignada]);
      setEmergenciasSinAsignar(emergenciasSinAsignar.filter((e) => e.id !== selectedUser.id));
      setSelectedUser(null);
      setHeroList(updatedHeroList); // Actualiza la lista de héroes con el estado cambiado
    }
  };

  const handleEliminarAsignadoClick = (emergencia) => {
    // Cambiar el estado del héroe a true en la lista de héroes
    const updatedHeroList = heroList.map((h) => {
      if (h.name === emergencia.heroe) {
        return { ...h, status: true };
      } else {
        return h;
      }
    });

    // Agregar el usuario nuevamente a la lista de emergencias sin asignar
    setEmergenciasSinAsignar([...emergenciasSinAsignar, emergencia]);

    // Eliminar el usuario de la lista de emergencias asignadas
    setEmergenciasAsignadas(emergenciasAsignadas.filter((e) => e.id !== emergencia.id));

    // Actualizar la lista de héroes
    setHeroList(updatedHeroList);
  };

  const handleEliminarSinAsignarClick = (emergencia) => {
    setEmergenciasSinAsignar(emergenciasSinAsignar.filter((e) => e.id !== emergencia.id));
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
          <Button
            className={"btn btn-primary"}
            onClick={handleIngresarClick}
            text={"Ingresar"}
          />
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
                  <Button
                    className={"btn btn-link"}
                    dataBsTarget={"#exampleModal2"}
                    dataBsToggle={"modal"}
                    onClick={() => handleModalOpen(emergencia)}
                    text={<i className="bi bi-app-indicator"></i>}
                  />

                  <Button
                    className={"btn btn-link"}
                    onClick={() => handleEliminarSinAsignarClick(emergencia)}
                    text={<i className="bi bi-trash"></i>}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="my-5">
        <h4 className="my-5">Emergencias asignadas</h4>
        <table className="table">
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
                <td>{emergencia.heroe}</td>
                <td>
                  <Button
                    className={"btn btn-link"}
                    onClick={() => handleEliminarAsignadoClick(emergencia)}
                    text={<i className="bi bi-trash"></i>}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="modal fade" id="exampleModal2" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
