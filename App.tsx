import React from "react";
import AuthenticationStack from "./src/navigation/AuthenticationStack";
import LoadAssets from "./src/components/loadAssets/LoadAssets";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationStack />
    </LoadAssets>
  );
}

export default App;
