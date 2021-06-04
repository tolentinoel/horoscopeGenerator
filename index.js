// const http = require('http');
// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require("fs")

import bodyParser from 'body-parser';
import express from 'express';
import { allNames, findName} from './routes/test.js';
import pool from './db.js';



const app = express();
const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
app.use(express.json())

app.get('/', (req, res) => res.send('Try using the /names endpoint'));

// GET ALL NAMES
app.get('/names', allNames)


//GET A SPECIFIC NAME
app.get('/names/:gender/:firstname', findName);


//ADDING NAME TO DB
app.post("/names", async (req, res) => {
  // console.log(req.body)
  try {
    const {firstname, gender, hexcode, meaning} = req.body
    const newData = await pool.query("INSERT INTO names (FirstName, Gender, Hexcode, Meaning) VALUES ($1, $2, $3, $4) RETURNING *",[firstname, gender, hexcode, meaning]);
    res.json(newData.rows[0])
  } catch (err){
    console.error(err.message)
  }
});



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

