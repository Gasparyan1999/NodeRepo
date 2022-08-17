import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: "georgi123",
  host: "localhost",
  port: 5472,
  database: "postgres",
});

export default pool;
