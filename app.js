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
  const user = await pool.query("SELECT * FROM mytable");
  res.send(user.rows[req.params["id"]]);
});

app.listen(PORT, () => {
  console.log(`Server start in ${PORT}`);
});
