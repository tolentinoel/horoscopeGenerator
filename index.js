import randomColor from 'randomcolor';
import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';
import pool from './db.js';
import path from 'path';


const app = express();
const PORT = process.env.PORT || 3000 || 3001;
const __dirname = path.resolve()


if (process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "client/build")))
}

app.use(cors())
app.use(express.json())

//ROUTES

// GET ALL NAMES
app.get('/names', async (req, res) => {
  try {
      const allNames = await pool.query("SELECT * FROM names")
      res.json(allNames.rows)
  }catch (err) {
      console.error(err.message)
  }
})

//GET A SPECIFIC NAME
app.get('/names/:gender/:firstname/:sign', async(req, res) => {
  const {gender, firstname, sign}= req.params;

  try {
    const resultName = await pool.query("SELECT * FROM names WHERE gender = $1 AND firstname = $2 AND sign = $3", [gender, firstname, sign]);
    res.json(resultName.rows)
  }catch (err) {
    console.error(err.message)
  }
});

//ADDING NAME TO DB
app.post('/names', async (req, res) => {

  // let {firstname, gender, sign} = req.body

  try {
    let {firstname, gender, sign} = req.body
    const hexcode = randomColor({luminosity:'bright', count: 1})
    let horoscope
    horoscope = await fetch(`https://devbrewer-horoscope.p.rapidapi.com/week/short/${sign}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "devbrewer-horoscope.p.rapidapi.com",
        "x-rapidapi-key": "03d3d82ab4mshc35210787820efap1d8f55jsn0fc7b41c1c9c"
      }
    })
    .then(res => res.json())
    .then(data => {
      data[`${sign}`]['This Week']
    })

    let newData = await pool.query('INSERT INTO names (firstname, gender, hexcode, sign, horoscope) VALUES ($1, $2, $3, $4, $5) RETURNING *',[firstname, gender, hexcode, sign, horoscope]);
    res.json(newData.rows[0])
  } catch (err){
    console.error(err.message)
  }

});


const server = app.listen(process.env.PORT || 3000 || 3001, () => {
  const port = server.address().port;
  console.log(`On port ${port}`);
});

