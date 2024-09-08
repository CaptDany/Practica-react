import React, { useState, useEffect } from "react";
import axios from "axios";

const PhraseComponent = ({ refreshTrigger }) => {
  const [phrase, setPhrase] = useState("");

  const fetchPhrase = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/data");
      setPhrase(response.data.phrase);
    } catch (error) {
      console.error("Error fetching phrase:", error);
    }
  };

  useEffect(() => {
    fetchPhrase();
  }, [refreshTrigger]);

  return <p>{phrase}</p>;
};

export default PhraseComponent;
