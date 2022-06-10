import express from "express";

const router = express.Router();

router.get("/", (req, res) => {});
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await createTransaction(req.body);

    result?.id
      ? res.json({
          status: "success",
          message: "still to do add to database",
        })
      : res.json({
          status: "error",
          message: error.message,
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
