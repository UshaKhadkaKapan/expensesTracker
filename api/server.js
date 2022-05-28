import "dotenv/config";

import express from "express";
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

import createConnection from "./src/config/dbConfig.js";
createConnection();

import userRouter from "./src/routers/userRouter.js";
app.use("/api/v1/users", userRouter);

app.use("/api/v1/users", (req, res) => {
  res.send("request received, world");
});

app.get("/", (req, res) => {
  res.send("we will send react app here");
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`Server will run in ${PORT}`);
});
