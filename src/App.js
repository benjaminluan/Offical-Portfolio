import React from "react";
import Nav from "./components/Nav";
import Home from "./Home";

function App() {
  const toggleContrast = () => {
    console.log("toggle");
  };

  return (
    <div className="App">
      <Nav toggle = {toggleContrast} />
      <Home />
    </div>
  );
}

export default App;
