//Importing express.router();
const router = require("express").Router();
//Importing Axios
const axios = require("axios");

//Getting country by Name
router.get("/get/:name", async (req, res) => {
    try {
        const name = req.params.name;
        const url = `https://restcountries.com/v3.1/name/${name}`;        
        const response = await axios.get(url);        
        return res.status(200).json(response.data);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).json({ message: "Erro to get Country" });
    }
});

module.exports = router;
