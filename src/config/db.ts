import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
  ssl: false, // Habilita SSL/TLS
});

export default pool;
