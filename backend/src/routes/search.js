const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("../config/database");

/**
 * @swagger
 * /api/search:
 *   get:
 *     summary: Search items by category
 *     tags: [Search]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *           enum: [Electronics, Clothing, Books, Furniture]
 */
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    const db = await connectToDatabase();
    const query = category ? { category } : {};
    const items = await db.collection("items").find(query).sort({ createdAt: -1 }).toArray();
    res.json(items);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to search items" });
  }
});

module.exports = router;
