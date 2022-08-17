import express, { query } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pool from "./Data/data.js";

const PORT = process.env.port || 3000;
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get("/", async function (req, res) {
  const users = await pool.query("SELECT * FROM mytable");
  res.send(users.rows);
});

app.get("/:id", async function (req, res) {
  const user = await pool.query(
    `SELECT * FROM mytable WHERE id=${req.params["id"]}`
  );
  res.send(user.rows);
});

app.post("/",  function (req, res) {
  const value = [
    req.body[0][1],
    req.body[1][1],
    req.body[2][1],
    req.body[3][1],
  ];
  console.log(value);
  const user =  pool.query(
    `INSERT INTO mytable(id,name,create,owner,update) VALUES($1,$2,$3,$4)`,
    value,
    (err, result) => {
      console.log(result)
    }
  );
  console.log(user)
});

app.listen(PORT, () => {
  console.log(`Server start in ${PORT}`);
});
