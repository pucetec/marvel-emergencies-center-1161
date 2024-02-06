import axios from "axios";
import md5 from "md5";


const publicKey = "162bf646746d2cfe7d66d6a27b6a90dc";
const privateKey = "68979345d9ee3d74351b46edfdb64e657db8c73a";
const baseUrl = "https://gateway.marvel.com/v1/public/";

const generateHash = () => {
  const timestamp = new Date().getTime();
  const hash = md5(`${timestamp}${privateKey}${publicKey}`);
  return { ts: timestamp, apikey: publicKey, hash: hash };
};

const marvelService = {
  getHeroes: async () => {
    const { ts, apikey, hash } = generateHash();
    try {
      const response = await axios.get(
        `${baseUrl}characters?ts=${ts}&apikey=${apikey}&hash=${hash}`
      );
      return response.data.data.results;
    } catch (error) {
      console.error("Error fetching heroes:", error);
      throw error;
    }
  },
};

export default marvelService;
