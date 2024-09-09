import React, { useState, useEffect } from "react";

function Text() {
  const phrases = [
    "Hola Mundo",
    "Max tiene síndrome",
    "Quiuvules que",
    "A las cuantas cheves te entra la de mear",
    "Andrea ama a Salas",
  ];

  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

  const handleClick = () => {
    // Obtener una frase aleatoria diferente de la actual
    const nextPhrase = phrases[Math.floor(Math.random() * phrases.length)];

    // Asegurarse de que la nueva frase sea diferente a la actual
    if (nextPhrase !== currentPhrase) {
      setCurrentPhrase(nextPhrase);
    } else {
      // Si es la misma, llamar la función de nuevo
      handleClick();
    }
  };

  useEffect(() => {
    // Añadir el evento click al body cuando el componente se monta
    document.body.addEventListener("click", handleClick);

    // Limpiar el evento al desmontar el componente
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [currentPhrase]); // Dependencia para actualizar el efecto si cambia currentPhrase

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{currentPhrase}</h1>
    </div>
  );
}

export default Text;
