// services/marvelService.js
import axios from "axios";

const PUBLIC_KEY = "a528d3583ff453a4c854366f226ad322";

export const bringMarvelInfo = async () => {
  try {
    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/comics?apikey=${PUBLIC_KEY}&ts=1705772894639&hash=0d58b465845c2f34337547d82faad0a8`,
      {
        headers: {
          Accept: "*/*",
        },
      }
    );
    console.log({ response });
  } catch (error) {
    console.error("Error fetching Marvel info:", error);
  }
};
