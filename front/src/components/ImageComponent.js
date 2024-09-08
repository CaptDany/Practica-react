import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageComponent = ({ refreshTrigger }) => {
  const [imageUrl, setImageUrl] = useState("");

  const fetchImage = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/data");
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, [refreshTrigger]);

  return (
    <img
      src={imageUrl}
      alt="Random"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
};

export default ImageComponent;
