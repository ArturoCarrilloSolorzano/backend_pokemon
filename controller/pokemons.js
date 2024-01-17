const axios = require("axios");

export default class pokemons {
  static async getPokemons(req, res) {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=20"
      );
      console.log(response);
      return res.json(response);
    } catch (error) {
      console.error(error);
    }
  }
}
