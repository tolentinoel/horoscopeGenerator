import pkg from 'pg';
const { Pool } = pkg;
// require('dotenv').config();

const devConfig = {
    user: process.env.PG_USE,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.HOST,
    port: process.env.PG_PORT

}
const proConfig = {
    //heroku add-on
    connectionString: process.env.DATABASE_URL
}

const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);

export default pool;