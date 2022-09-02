import express, { query } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pool from "./Data/data.js";

const PORT = process.env.port || 3000;
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get("/", async function (req, res) {
  const cards = await pool.query("SELECT * FROM cards");
  console.log(cards.rows);
  res.send(cards.rows);
});

// app.get("/:id", async function (req, res) {
//   const user = await pool.query(
//     `SELECT * FROM mytable WHERE id=${req.params["id"]}`
//   );
//   res.send(user.rows);
// });

// app.post("/", async function (req, res) {
//   console.log("Go")
//   const user = await pool.query(
//     `INSERT FROM mytable WHERE id=${req.params["id"]}`
//   );
//   res.send(user.rows);
// });

app.post("/", async function (req, res) {
  // const value = [
  //   req.body[0][1],
  //   req.body[1][1],
  //   req.body[2][1],
  //   req.body[3][1],
  //   req.body[4],
  // ];
  // const user = await pool.query(
  //   `INSERT INTO cards VALUES
  //   ('${value[4]}'::character,'${value[0]}'::text, '${value[1]}'::text,'${value[2]}'::text, '${value[3]}'::text) RETURNING *`
  // );
  // res.json(user.rows);
  if (req.body[0].num) {
    const value = [req.body[0].id, req.body[0].num];
    const card = await pool.query(
      `INSERT INTO cards VALUES
      ('${value[0]}'::text,'${value[1]}'::integer) RETURNING *`
    );
    res.json(card.rows);
  } else {
    const value = [req.body[0]];
    const card = await pool.query(`DELETE FROM cARDS WHERE id = '${value}'`);
    res.json(card.rows);
  }
});

app.listen(PORT, () => {
  console.log(`Server start in ${PORT}`);
});
