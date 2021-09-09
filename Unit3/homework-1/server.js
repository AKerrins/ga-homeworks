import express from "express";
import router from "./config/router.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/", router);

app.get("/", function (req, res) {
  res.send("Hello Everyone,I am using express");
});

app.get("/books", function (req, res) {
  res.send("The best books you will ever read..");
});

app.listen(port, () => {
  console.log(`Books API is listening at http://localhost:${port}`);
});
