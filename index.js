// const http = require('http');
// const bodyParser = require('body-parser');
// const fs = require("fs")
// import bodyParser from 'body-parser';

import express from 'express';
import { allNames, findName, addName } from './routes/test.js';
import cors from 'cors';

// app.use(bodyParser.json());
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Try using the /names endpoint'));

// GET ALL NAMES
app.get('/names', allNames)


//GET A SPECIFIC NAME
app.get('/names/:gender/:firstname', findName);


//ADDING NAME TO DB
app.post("/names", addName);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}..`);
});

