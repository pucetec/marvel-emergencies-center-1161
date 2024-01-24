import './App.css';
import React, { useEffect, useState } from 'react';
import TableEdit from './common/Table/Table';
import Header from './components/Header/Header';
import md5 from 'md5';
import axios from 'axios';

const PUBLIC_KEY = "916623a213e8ba738f6a24edd1ee93c0";
const PRIVATE_KEY = "4b532143f4231452f7a3767e6baaadc4542d81dc";
const GATEWAY = "http://gateway.marvel.com/v1/public/characters";

const App = () => {
  
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    bringMarvelInfo();
  }, []);

  const bringMarvelInfo = async () => {
    try{
    const curretTimestamp = Date.now().toString();
    const joinedKey = curretTimestamp + PRIVATE_KEY + PUBLIC_KEY; 
    const md5Key = md5(joinedKey);

    const response = await axios.get(
      GATEWAY + PUBLIC_KEY + "&TS" + curretTimestamp + "&hash=" + md5Key,
      {
        headers: {
          Accept: "*/*",
        },
      }
    );
    setHeroData(response.data);
    } catch (error) {
      console.error('Error:', error);
    }

  }

  return (
      <div className='centered-content'>
      <Header></Header>
      <br></br>
      <br></br>
      {heroData && (
      <TableEdit headers={["#", "Emergencia", "Acciones"]} bodyRows={heroData.data.results.map((hero, index) => [
            index + 1,
            hero.name,
            hero.description || "Sin descripción",
          ])} ></TableEdit>
      )}
      </div>
  );
}

export default App;
