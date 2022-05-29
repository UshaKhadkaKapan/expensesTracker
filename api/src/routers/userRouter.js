import express from "express";
import { createTable } from "../../modules/user/User.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const result = await createTable(req.body);
    console.log(result);
    res.json({
      status: "success",
      message: "user created successfully",
    });
  } catch (error) {
    let message = error.message;

    if (message.includes("E11000 duplicate key error")) {
      message = "This email is already registered";
    }
    res.json({
      status: "error",
      message,
    });
  }
});
// send data to the db query
export default router;
