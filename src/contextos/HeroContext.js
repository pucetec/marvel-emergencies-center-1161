import axios from "axios";
import md5 from "md5";
import React, { createContext, useContext, useEffect, useState } from "react";

const PUBLIC_KEY = "916623a213e8ba738f6a24edd1ee93c0";
const PRIVATE_KEY = "4b532143f4231452f7a3767e6baaadc4542d81dc";
const GATEWAY = "http://gateway.marvel.com/v1/public/characters";

const HeroContext = createContext();

export const HeroContextProvider = ({children}) => {
    const [heroStatus, setHeroStatus] = useState(null);

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
        setHeroStatus(response.data);
        } catch (error) {
          console.error('Error:', error);
        }
    };

    return (
        <HeroContext.Provider value={{heroStatus}}>
            {children}
        </HeroContext.Provider>
    );
}

export const useHeroContext = () => {
    return useContext(HeroContext);
  };