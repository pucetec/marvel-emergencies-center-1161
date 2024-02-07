import react, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import getCharacters from "./Misc/getMarvelCharacter";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await getCharacters();
      setCharacters(response);
    };
    if (characters.length === 0) {
      fetchCharacters();
    }
  }, []);
  useEffect(() => {
    console.log(characters);
  }, [characters]);
  return (
    <div className="App">
      <Box>
        <h1 style={{ textAlign: "center" }}>Central de Emergencias</h1>
        <Box sx={{ display: "flex", width: "80%", margin: "auto", justifyContent: "center" }}>
          <TextField label="Emergencia" variant="outlined" sx={{ mx: "20px" }} />
          <Button variant="contained"> Submit </Button>
        </Box>
      </Box>
      <Box>
        <h2 style={{ textAlign: "center" }}>Central de Emergencias</h2>
        <Box>
          {characters.length > 0 &&
            characters.map((item, i) => {
              return <p>{item.name}</p>;
            })}
        </Box>
      </Box>
    </div>
  );
};

export default App;
