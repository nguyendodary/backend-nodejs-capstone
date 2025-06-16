const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("../models/db");
const { ObjectId } = require("mongodb");

router.get("/api/secondchance/items", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const items = await db.collection("items").find({}).toArray();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/api/secondchance/items/:id", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const item = await db.collection("items").findOne({ _id: new ObjectId(req.params.id) });
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
