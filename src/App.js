import React, { useState } from "react";
import Image from "./components/Image";
import Text from "./components/Text";

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
      }}
      onClick={handlePageClick}
    >
      <Image refreshTrigger={refreshTrigger} />
      <Text refreshTrigger={refreshTrigger} />
    </div>
  );
};

export default App;
