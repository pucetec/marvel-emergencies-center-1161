import './App.css';
import React, { useEffect, useState } from 'react';
import TableEdit from './common/Table/Table';
import Header from './components/Header/Header';
import md5 from 'md5';
import axios from 'axios';
import DeleteButton from './common/Button/DeleteButton';
import AddButton from './common/Button/AddButton';
import FloatButton from './common/Test/Tests';
import BasicModal from './common/Modal/PopUp';
import { EmergencyContextProvider } from './contextos/EmergencyContext';

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
      `${GATEWAY}?ts=${curretTimestamp}&apikey=${PUBLIC_KEY}&hash=${md5Key}`,
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

  };

  return (
    <EmergencyContextProvider>
      <div className='centered-content'>
      <Header></Header>
      <br></br>
      {heroData && (
      <TableEdit headers={["#", "Emergencia", "Acciones"]} bodyRows={heroData.data.results.map((hero, index) => [
            hero.id,
            hero.name,
            hero.description,
          ])} ></TableEdit>
      )}
      <BasicModal></BasicModal>
      </div>
      </EmergencyContextProvider>
  );
}

export default App;
