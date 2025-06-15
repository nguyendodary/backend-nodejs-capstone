const { MongoClient } = require("mongodb");
require("dotenv").config();

async function seedDatabase() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db("secondChance");
    const items = Array.from({ length: 16 }, (_, i) => ({
      name: `Item ${i + 1}`,
      description: `Description for item ${i + 1}`,
      category: ["Electronics", "Clothing", "Books", "Furniture"][i % 4],
      price: (i + 1) * 10,
    }));
    await db.collection("items").insertMany(items);
    console.log("16 documents imported");
  } finally {
    await client.close();
  }
}
seedDatabase();
