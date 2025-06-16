const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("../models/db");
const { ObjectId } = require("mongodb");
const upload = require("../middleware/upload");

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

router.post("/api/secondchance/items", upload.single("file"), async (req, res) => {
  try {
    const db = await connectToDatabase();
    const { name, description, category, price } = req.body;
    const file = req.file ? req.file.path : null;
    const item = { name, description, category, price: parseFloat(price), file };
    const result = await db.collection("items").insertOne(item);
    res.status(201).json({ id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/api/secondchance/items/:id", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const result = await db.collection("items").deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});
module.exports = router;
