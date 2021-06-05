

// import { allNames, findName, addName } from './routes/test.js';
import randomColor from 'randomcolor';
import fetch from 'node-fetch';
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 3000 ;
const __dirname = path.resolve()


if (process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "client/build")))
}

app.use(cors())
app.use(express.json())

//ROUTES
app.get('/', (req, res) => res.send('Try using the /names endpoint'));

// GET ALL NAMES
app.get('/names', async (req, res) => {
  try {
      const allNames = await pool.query("SELECT * FROM names;")
      res.json(allNames.rows)
  }catch (err) {
      console.error(err.message)
  }
})

//GET A SPECIFIC NAME
app.get('/names/:gender/:firstname', async(req, res) => {
  const {gender, firstname}= req.params;
  try {
    const resultName = await pool.query("SELECT * FROM names WHERE gender = $1 AND firstname = $2", [gender, firstname]);
    res.json(resultName.rows)
  }catch (err) {
    console.error(err.message)
  }
});

//ADDING NAME TO DB
app.post("/names", async (req, res) => {

  try {
    const {firstname, gender, sign} = req.body
    const hexcode = randomColor({luminosity:'bright', count: 1})
    const formatSign = sign.toLowerCase()

    let d = new Date().getDate()
    let m = new Date().getUTCDay()
    let y = new Date().getUTCFullYear()-1 //minus 1 since the API only allows 2020 readings

    let horoscope
    horoscope = await fetch(`https://horoscope5.p.rapidapi.com/general/daily?sign=${formatSign}&date=${y}-${m}-${d}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "03d3d82ab4mshc35210787820efap1d8f55jsn0fc7b41c1c9c",
          "x-rapidapi-host": "horoscope5.p.rapidapi.com"
        }
      }).then(res => res.json())
        .then(data => data.result.description)

    const newData = await pool.query("INSERT INTO names (firstname, gender, hexcode, sign, horoscope) VALUES ($1, $2, $3, $4, $5) RETURNING *",[firstname, gender, hexcode,sign, horoscope]);
    res.json(newData.rows[0])
  } catch (err){
    console.error(err.message)
  }

});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}..`);
});

