const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "✅ Backend is working perfectly!" });
});

module.exports = router;
