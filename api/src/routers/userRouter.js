import express from "express";
import { createUser, findUser } from "../../modules/user/User.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const result = await createUser(req.body);
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

// user login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUser({ email, password });

    if (user?._id) {
      user.password = undefined;

      return res.json({
        status: "success",
        message: "user logged in successfully",
        user,
      });
    }
    res.json({
      status: "error",
      message: "Invalid credintials",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
// send data to the db query
export default router;
