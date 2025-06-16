const { MongoClient } = require("mongodb");
require("dotenv").config();

async function connectToDatabase() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  return client.db("secondChance");
}

module.exports = { connectToDatabase };
