import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool ({
    user: 'Ella',
    password: 'github',
    database: 'name_database',
    host: 'localhost',
    port: 5432
});

export default pool;