// services/marvelService.js
import axios from "axios";
import md5 from "crypto-js/md5";

const PUBLIC_KEY = "b84229fc4ccb924a9974daa633543fcd";
const PRIVATE_KEY = "20ef7de8157fe56554c75fe169f2a59444de8742";

export const bringMarvelInfo = async () => {
  try {
    const timestamp = Date.now().toString();
    const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY).toString();
    const response = await axios.get(
      `https://gateway.marvel.com/v1/public/characters?apikey=${PUBLIC_KEY}&ts=${timestamp}&hash=${hash}`
    );

    // Devuelve la lista de personajes (results) de la respuesta
    return response.data?.data?.results || [];
  } catch (error) {
    console.error("Error fetching Marvel characters:", error);
    return [];
  }
};
