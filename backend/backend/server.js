const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // <— Đọc file .env

const app = express();

// Lấy giá trị từ file .env
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Kết nối MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// Route mẫu
app.get("/", (req, res) => {
  res.send("Hello from Group 5 Backend 🚀");
});

// Chạy server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

