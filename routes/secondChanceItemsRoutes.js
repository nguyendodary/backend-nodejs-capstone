const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("../models/db");

router.get("/api/secondchance/items", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const items = await db.collection("items").find({}).toArray();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
