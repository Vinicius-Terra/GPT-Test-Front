import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterNavigator from "./components/RouterNavigator";

function App() {
  return (
    <BrowserRouter>
      <RouterNavigator />
    </BrowserRouter>
  );
}

export default App;
