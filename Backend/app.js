import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { MongoClient, ServerApiVersion } from "mongodb";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const uri = `${process.env.URI_STRING}`; // This is the connection string for MongoDB Atlas which is stored in the .env file

// Create the Express app
const app = express();
const port = 5000;

// Connect to MongoDB Atlas
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });

app.use(cors());

// Define the API endpoint
app.get("/api/data", async (req, res) => {
  try {
    // Create a MongoClient with the desired options
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    // Connect the client to the server
    await client.connect();

    // Access the desired collection in your MongoDB Atlas database
    const collection = client.db("Gardening").collection("Plants");

    // Retrieve all documents from the collection
    const documents = await collection.find().toArray();

    // Close the client connection
    await client.close();

    // Send the retrieved documents as the API response
    res.json(documents);
  } catch (err) {
    console.error("Error retrieving data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
