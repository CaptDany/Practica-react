import React, { useState, useEffect } from "react";

function Text(Changeall) {
  const phrases = [
    "Hola Mundo",
    "Max tiene síndrome",
    "Quiuvules que",
    "A las cuantas cheves te entra la de mear",
    "Andrea ama a Salas",
  ];

  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

  const cambiodetexto = () => {
    const nextPhrase = phrases[Math.floor(Math.random() * phrases.length)];

    if (nextPhrase !== currentPhrase) {
      setCurrentPhrase(nextPhrase);
    } else {
      cambiodetexto();
    }
  };

  useEffect(() => {
    cambiodetexto();
  }, [Changeall]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="text-xl m-4">{currentPhrase}</h1>
    </div>
  );
}

export default Text;
