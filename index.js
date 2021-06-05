
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
app.post("/names", addName);



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}..`);
});

