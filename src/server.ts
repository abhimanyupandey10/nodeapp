import express from "express";
import { DataController } from "./controllers/data-ctrl";

const app = express();

app.use(new DataController().router);

var server = app.listen(5000, function () {
  console.log("Express App running at http://127.0.0.1:5000/");
});
