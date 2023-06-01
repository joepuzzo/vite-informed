import express from "express";

const router = express.Router();

router.get("/health", (req, res) => {
  const status = { status: "UP" };
  return res.send(status);
});

export default router;
