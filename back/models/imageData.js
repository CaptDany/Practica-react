const mongoose = require("mongoose");

const imageDataSchema = new mongoose.Schema({
  imageUrl: String,
  phrase: String,
});

const ImageData = mongoose.model("ImageData", imageDataSchema);

module.exports = ImageData;