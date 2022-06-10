import "dotenv/config";

import express from "express";
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

import cors from "cors";
app.use(cors());

import createConnection from "./src/config/dbConfig.js";
createConnection();

import userRouter from "./src/routers/userRouter.js";
app.use("/api/v1/users", userRouter);
import transactionRouter from "./src/routers/transcationRouter.js";

app.use("/api/v1/transactions", transactionRouter);

app.get("/", (req, res) => {
  res.send("we will send react app here");
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`Server will run in ${PORT}`);
});
