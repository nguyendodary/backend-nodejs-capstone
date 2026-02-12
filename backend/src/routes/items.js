const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");
const { connectToDatabase } = require("../config/database");
const upload = require("../middleware/upload");

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Get all items
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: List of all items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */
router.get("/", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const items = await db.collection("items").find({}).sort({ createdAt: -1 }).toArray();
    res.json(items);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

/**
 * @swagger
 * /api/items/{id}:
 *   get:
 *     summary: Get item by ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get("/:id", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const item = await db.collection("items").findOne({ _id: new ObjectId(req.params.id) });
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to fetch item" });
  }
});

/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Create new item
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               price:
 *                 type: number
 *               image:
 *                 type: string
 *                 format: binary
 */
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, description, category, price } = req.body;

    if (!name || !description || !category || !price) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const validCategories = ["Electronics", "Clothing", "Books", "Furniture"];
    if (!validCategories.includes(category)) {
      return res.status(400).json({ error: "Invalid category" });
    }

    const db = await connectToDatabase();
    const item = {
      name,
      description,
      category,
      price: parseFloat(price),
      image: req.file ? `/uploads/${req.file.filename}` : null,
      createdAt: new Date()
    };

    const result = await db.collection("items").insertOne(item);
    res.status(201).json({ id: result.insertedId, ...item });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to create item" });
  }
});

/**
 * @swagger
 * /api/items/{id}:
 *   delete:
 *     summary: Delete item
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.delete("/:id", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const result = await db.collection("items").deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to delete item" });
  }
});

module.exports = router;
