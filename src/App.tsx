import "./index.css";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Project from "./components/projects/Project";
import Technologies from "./components/technologies/Technologies";
import Aboutme from "./components/aboutme/Aboutme";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Technologies />
      <Project />
      <Aboutme />
    </div>
  );
}

export default App;
