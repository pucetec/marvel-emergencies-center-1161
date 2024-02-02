import React, { useEffect, useState } from "react";
import axios from "axios";
import md5 from "md5";

import Header from "./Components/Header/Header";
import TableNoAsignar from "./Components/TableNoAsignar/TableNoAsignar";
import TableAsignado from "./Components/TableAsignado/TableAsignado";
import EmergenciasNoAsignadas from "./Components/EmergenciasNoAsignadas/EmergenciasNoAsignadas";

const EmergencyControl = () => {

  const timestamp = new Date().getTime();
  const hash = md5(timestamp + "648eb6efd72e54591cc25c9c990a01cc04ea9c50" + "45e8d28c6966b67be2f6fe9f5abfd86b");

  const url = `${"http://gateway.marvel.com/v1/public/characters?"}ts=${timestamp}&apikey=${"45e8d28c6966b67be2f6fe9f5abfd86b"}&hash=${hash}`;

  const [heroList, setHeroList] = useState([]);
  const [availableHeroes, setAvailableHeroes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const igual = await axios.get(url);
      const heroes = igual.data.data.results.map((hero) => hero.name);
      setHeroList(heroes);
      setAvailableHeroes(heroes);
    };

    fetchData();
  }, []);

  const [emergencias, setEmergencias] = useState([]);
  const [emergenciasNoAsignadas, setEmergenciasNoAsignadas] = useState([]);
  const [nuevaEmergencia, setNuevaEmergencia] = useState('');
  const [heroeAsignado, setHeroeAsignado] = useState(null);

  const handleChange = (e) => {
    setNuevaEmergencia(e.target.value);
  };

  const handleIngresar = () => {
    if (nuevaEmergencia.trim() !== '') {
      const nuevaEmergenciaObj = { nombre: nuevaEmergencia, asignada: false, heroe: null };
      setEmergencias([...emergencias, nuevaEmergenciaObj]);
      setNuevaEmergencia('');
    }
  };

  const handleAsignar = (index) => {
    const emergency = emergencias[index];

    if (!emergency.asignada) {
      const nuevasEmergencias = [...emergencias];
      nuevasEmergencias[index].asignada = true;
      setEmergencias(nuevasEmergencias);
      setHeroeAsignado(nuevasEmergencias[index].nombre);

      const emergenciaAsignada = nuevasEmergencias[index];
      setEmergenciasNoAsignadas((prevEmergenciasNoAsignadas) => [...prevEmergenciasNoAsignadas, emergenciaAsignada]);
    }
  };


  const handleBorrar = (index) => {
    const nuevasEmergencias = [...emergencias];
    const emergenciaEliminada = nuevasEmergencias.splice(index, 1)[0];

    setEmergencias(nuevasEmergencias);
    setEmergenciasNoAsignadas((prevEmergenciasNoAsignadas) =>
      prevEmergenciasNoAsignadas.filter((emergencia) => emergencia.nombre !== emergenciaEliminada.nombre)
    );
  };

  const handleCloseHeroeAsignado = () => {
    setHeroeAsignado(null);
  };

  const handleAsignarHeroe = (index, heroe) => {
    const nuevasEmergencias = [...emergencias];
    nuevasEmergencias[index].heroe = heroe;
    setEmergencias(nuevasEmergencias);

    // Remove the assigned hero from the available heroes list
    setAvailableHeroes((prevAvailableHeroes) => prevAvailableHeroes.filter((hero) => hero !== heroe));
  };


  const handleDesasignarHeroe = (index) => {
    const emergenciaDesasignada = emergenciasNoAsignadas[index];
    const nuevasEmergenciasNoAsignadas = [...emergenciasNoAsignadas];
    nuevasEmergenciasNoAsignadas.splice(index, 1);

    const nuevasEmergencias = [...emergencias];
    const emergenciaIndex = nuevasEmergencias.findIndex((emergencia) => emergencia.nombre === emergenciaDesasignada.nombre);
    nuevasEmergencias[emergenciaIndex].asignada = false;
    nuevasEmergencias[emergenciaIndex].heroe = null;

    setEmergenciasNoAsignadas(nuevasEmergenciasNoAsignadas);
    setEmergencias(nuevasEmergencias);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>

      <Header
        handleChange={handleChange}
        handleIngresar={handleIngresar}
        nuevaEmergencia={nuevaEmergencia}
      />

      <TableNoAsignar
        emergencias={emergencias}
        handleAsignar={handleAsignar}
        handleBorrar={handleBorrar}
      />  

      <TableAsignado
        availableHeroes={availableHeroes}
        emergencias={emergencias}
        handleAsignarHeroe={handleAsignarHeroe}
        heroeAsignado={heroeAsignado}
        handleCloseHeroeAsignado={handleCloseHeroeAsignado}
      />

      <EmergenciasNoAsignadas
        emergenciasNoAsignadas={emergenciasNoAsignadas}
        handleDesasignarHeroe={handleDesasignarHeroe}
      />

    </div>
  );
};

export default EmergencyControl;