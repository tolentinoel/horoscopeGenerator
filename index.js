
import express from 'express';
import { allNames, findName, addName } from './routes/test.js';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000 ;
const __dirname = path.resolve()

if (process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "client/build")))
}

// app.use(express.static("client/build"))
app.use(cors())
app.use(express.json())

//ROUTES
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

