const { MongoClient } = require("mongodb");
require("dotenv").config();

async function seedDatabase() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db("secondChance");

    await db.collection("items").deleteMany({});

    const items = [
      {
        name: "MacBook Pro 2020",
        description: "16GB RAM, 512GB SSD, Excellent condition",
        category: "Electronics",
        price: 1200,
        image: null,
        createdAt: new Date()
      },
      {
        name: "iPhone 12",
        description: "Mint condition, with original box",
        category: "Electronics",
        price: 600,
        image: null,
        createdAt: new Date()
      },
      {
        name: "Winter Jacket",
        description: "Warm and stylish, size M",
        category: "Clothing",
        price: 45,
        image: null,
        createdAt: new Date()
      },
      {
        name: "Designer Jeans",
        description: "Brand new, never worn, size 32",
        category: "Clothing",
        price: 60,
        image: null,
        createdAt: new Date()
      },
      {
        name: "The Great Gatsby",
        description: "Classic novel, hardcover edition",
        category: "Books",
        price: 15,
        image: null,
        createdAt: new Date()
      },
      {
        name: "Python Programming",
        description: "Learn Python in 30 days, like new",
        category: "Books",
        price: 25,
        image: null,
        createdAt: new Date()
      },
      {
        name: "Wooden Dining Table",
        description: "Solid oak, seats 6, excellent condition",
        category: "Furniture",
        price: 300,
        image: null,
        createdAt: new Date()
      },
      {
        name: "Office Chair",
        description: "Ergonomic, adjustable height, black",
        category: "Furniture",
        price: 120,
        image: null,
        createdAt: new Date()
      }
    ];

    await db.collection("items").insertMany(items);
    console.log(`✓ ${items.length} sample items added`);
  } catch (error) {
    console.error("✗ Error seeding database:", error);
  } finally {
    await client.close();
  }
}

seedDatabase();
