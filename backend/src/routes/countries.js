const router = require("express").Router();

const axios = require("axios");

router.get("/get/:name", async (req, res) => {
    
  try {
    const name = req.params.name;
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
    );

    console.log("API Response:", response.data);

    const filteredData = {
      name: response.data[0].name.common,
      official: response.data[0].name.official,
      capital: response.data[0].capital[0],
      population: response.data[0].population,
      region: response.data[0].region,
      area: response.data[0].area,
      continents: response.data[0].continents[0],
      currencies: response.data[0].currencies,
      flags: response.data[0].flags.png,
      latitude: response.data[0].latlng[0],
      longitude: response.data[0].latlng[1],
    };

    console.log("Filtered Data:", filteredData);

    return res.status(200).json(filteredData);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ message: "Erro to get Country" });
  }
});

module.exports = router;
