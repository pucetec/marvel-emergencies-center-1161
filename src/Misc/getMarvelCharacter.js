import axios from "axios";
import md5 from "md5";

const PUBLIC_API_KEY = "a4d83a93474aae831fc03860fc328d3d";
const PRIVATE_API_KEY = "c0308e1fd088562039ccd6c2275e2a952ba1dcb7";
const URL = "http://gateway.marvel.com/";
const getHash = () => {
  return md5(Date.now() + PRIVATE_API_KEY + PUBLIC_API_KEY);
};

const getCharacters = async () => {
  const test = await axios.get(URL + `v1/public/characters?apikey=${PUBLIC_API_KEY}&ts=${Date.now()}&hash=${getHash()}`);
  console.log(test.data.data.results);
  return test.data.data.results;
};

export default getCharacters;
