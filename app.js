import express from "express"
import bodyParser from "body-parser";
import cors from "cors";
import arr from "./data/Data.js"

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send(arr);
});


app.get("/:id", function (req, res) {
  const obj=arr[req.params["id"]]
  res.send(obj)
});


app.listen(3000);