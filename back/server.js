require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;
const cors = require("cors");
const ImageData = require("./models/ImageData");

const app = express();
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });

// API Route to fetch random image and phrase
app.get("/api/data", async (req, res) => {
  try {
    const data = await ImageData.aggregate([{ $sample: { size: 1 } }]);
    res.json(data[0]);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});