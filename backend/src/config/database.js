const { MongoClient } = require("mongodb");

let client;
let db;

async function connectToDatabase() {
  if (db) return db;

  try {
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    db = client.db("secondChance");
    console.log("✓ Connected to MongoDB");
    return db;
  } catch (error) {
    console.error("✗ MongoDB connection error:", error);
    throw error;
  }
}

async function closeDatabase() {
  if (client) {
    await client.close();
    db = null;
    console.log("✓ MongoDB connection closed");
  }
}

module.exports = { connectToDatabase, closeDatabase };
