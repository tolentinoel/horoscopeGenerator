
import pool from '../db.js';
import randomColor from 'randomcolor';
import fetch from 'node-fetch';
// import { v4 as uuidv4 } from 'uuid'; <-- installed this to utilized unique ID generation if db grows bigger

export const allNames = async (req, res) => {
    try {
        const allNames = await pool.query("SELECT * FROM names")
        res.json(allNames.rows)
    }catch (err) {
        console.error(err.message)
    }
}

// export const findName = async(req, res) => {
//     const {gender, firstname}= req.params;
//     try {
//       const resultName = await pool.query("SELECT * FROM names WHERE gender = $1 AND firstname = $2", [gender, firstname]);
//       res.json(resultName.rows)
//     }catch (err) {
//       console.error(err.message)
//     }
// }

export const addName = async (req, res) => {

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

  }

