const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose")

const uri = "mongodb+srv://mkanishk465:OBO97pQXD0LFlRC1@kanishkfoddlast.mg3sh0j.mongodb.net/?retryWrites=true&w=majority&appName=kanishkFoddLast";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

async function connectToDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
  return mongoose.connect(uri)
}

module.exports = connectToDB;


