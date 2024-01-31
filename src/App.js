import { useState, useEffect } from "react";
import md5 from 'md5';
import axios from 'axios';

// Components
import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";

// Common
import Table from "./Common/Table/Table";
import TableHeroes from "./Common/TableHeroes/TableHeroes";


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
  const [selectedEmergencia, setSelectedEmergencia] = useState(null);

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

  const handleModalOpen = (emergencia) => {
    if (emergencia.heroe) {
      // Si la emergencia tiene un héroe asignado, es una reasignación
      setSelectedEmergencia(emergencia);
    } else {
      // Si no tiene héroe asignado, es una nueva asignación
      setSelectedUser(emergencia);
    }
  };

  const handleHeroAsignarClick = (hero) => {
    if (selectedUser || selectedEmergencia) {
      const heroeAsignado = hero.name;
      const updatedHeroList = heroList.map((h) => {
        if (h.name === heroeAsignado) {
          return { ...h, status: false };
        } else if (selectedEmergencia && h.name === selectedEmergencia.heroe) {
          // Si hay una emergencia seleccionada, y el héroe coincide con el héroe de la emergencia,
          // cambia el estado del héroe a true ya que se está reasignando
          return { ...h, status: true };
        } else {
          return h;
        }
      });
  
      if (selectedEmergencia) {
        const updatedEmergenciaAsignada = {
          ...selectedEmergencia,
          heroe: heroeAsignado,
        };
  
        setEmergenciasAsignadas(
          emergenciasAsignadas.map((e) =>
            e.id === selectedEmergencia.id ? updatedEmergenciaAsignada : e
          )
        );
  
        setSelectedEmergencia(null);
      } else {
        const emergenciaAsignada = {
          ...selectedUser,
          heroe: heroeAsignado,
        };
  
        setEmergenciasAsignadas([...emergenciasAsignadas, emergenciaAsignada]);
        setEmergenciasSinAsignar(emergenciasSinAsignar.filter((e) => e.id !== selectedUser.id));
        setSelectedUser(null);
      }
  
      setHeroList(updatedHeroList);
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

      <h1 className="my-5 text-center">
        Central de Emergencias
      </h1>

      <div className="d-inline-flex gap-4 align-items-center justify-content-center w-100 my-5">
        <h5 className="my-0">Emergencia</h5>

        <Input 
          className={"text"}
          id={"floatingInput"}
          onChange={handleInputChange}
          placeholder={"Ingrese emergencia"}
          type={"text"}
          value={emergencia}
        />

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

        <Table
          className={"btn btn-link"}
          dataBsTarget={"#exampleModal2"}
          dataBsToggle={"modal"}
          handleModalOpen={handleModalOpen}
          handleEliminarSinAsignarClick={handleEliminarSinAsignarClick}
          handleEliminarAsignadoClick={handleEliminarAsignadoClick}
          AddIcon={<i className="bi bi-app-indicator"></i>}
          DeleteIcon={<i className="bi bi-trash"></i>}
          emergenciasSinAsignar={emergenciasSinAsignar}
          emergenciasAsignadas={emergenciasAsignadas}
          columnas={["ID", "Nombre", "Acciones"]}
        />

      </div>

      <div className="my-5">
        <h4 className="my-5">Emergencias asignadas</h4>

        <Table
          className={"btn btn-link"}
          dataBsTarget={"#exampleModal2"}
          dataBsToggle={"modal"}
          handleModalOpen={handleModalOpen}
          handleEliminarSinAsignarClick={handleEliminarSinAsignarClick}
          handleEliminarAsignadoClick={handleEliminarAsignadoClick}
          AddIcon={<i className="bi bi-app-indicator"></i>}
          DeleteIcon={<i className="bi bi-trash"></i>}
          emergenciasSinAsignar={emergenciasSinAsignar}
          emergenciasAsignadas={emergenciasAsignadas}
          columnas={["ID", "Emergencia", "Heroes", "Acciones"]}
        />

      </div>

      <div className="modal fade" id="exampleModal2" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Lista de heroes</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <TableHeroes
                heroList={heroList}
                handleHeroAsignarClick={handleHeroAsignarClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
