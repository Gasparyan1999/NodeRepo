import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import arr from "./data/Data.js";

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send(arr);
});

app.get("/:id", function (req, res) {
  const userViewObject = arr[req.params["id"]];
  res.send(userViewObject);
});

app.listen(3000);
