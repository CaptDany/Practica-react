import React, { useState } from "react";
import ImageComponent from "./components/ImageComponent";
import PhraseComponent from "./components/PhraseComponent";

const App = () => {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [refreshTrigger, setRefreshTrigger] = useState(0); // Used to trigger a refresh in the child components

  const handlePageClick = () => {
    setRefreshTrigger(refreshTrigger + 1);
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        minHeight: "100vh",
        textAlign: "center",
        padding: "50px",
      }}
      onClick={handlePageClick}
    >
      <ImageComponent refreshTrigger={refreshTrigger} />
      <PhraseComponent refreshTrigger={refreshTrigger} />
    </div>
  );
};

export default App;
