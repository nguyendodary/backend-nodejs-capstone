const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("../models/db");

router.get("/api/secondchance/search", async (req, res) => {
  try {
    const { category } = req.query;
    const db = await connectToDatabase();
    const query = category ? { category } : {};
    const items = await db.collection("items").find(query).toArray();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
