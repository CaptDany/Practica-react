require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ImageData = require("./models/ImageData");

const app = express();
app.use(cors());

// URI de conexión a MongoDB
const mongoURI = "mongodb://localhost:27017"; // Coloca la URI entre comillas

// Conectar a MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });

// Ruta API para obtener una imagen y frase aleatoria
app.get("/api/data", async (req, res) => {
  try {
    const data = await ImageData.aggregate([{ $sample: { size: 1 } }]);
    res.json(data[0]);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
