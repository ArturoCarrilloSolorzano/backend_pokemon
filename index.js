const express = require("express");
const axios = require("axios");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
const port = 3000;

app.use(cors(corsOptions));

app.get("/pokemons", async (req, res) => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=20"
    );
    const results = response.data.results;
    for (let i = 0; i < results.length; i++) {
      const split = results[i].url.split("/");
      results[
        i
      ].image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${split[6]}.png`;
    }
    res.send(results);

    //res.json(response);
  } catch (error) {
    console.error(error);
  }
});

app.get("/test", (req, res) => {
  console.log("works");
  res.send("works");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
