import React, {useState} from "react";
import Nav from "./components/Nav";
import Home from "./Home";

function App() {
const [contrast, setContrast] = useState(false);

  const toggleContrast = () => {
    setContrast(!contrast)
  };

  return (
    <div className={"App" + (contrast === true ? " dark__mode" : "")}>
      <Nav toggle = {toggleContrast} />
      <Home />
    </div>
  );
}

export default App;
