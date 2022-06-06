import React, {useState} from "react";
import Nav from "./components/Nav";
import Home from "./Home";
import { projects } from "./projects";
function App() {
const [contrast, setContrast] = useState(false);

  const toggleContrast = () => {
    setContrast(!contrast)
  };

  return (
    <div className={"App" + (contrast === true ? " dark__mode" : "")}>
      <Nav toggle = {toggleContrast} />
      <Home projects={projects} />
    </div>
  );
}

export default App;
