import "./index.css";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Project from "./components/projects/Project";
import Technologies from "./components/technologies/Technologies";
import Aboutme from "./components/aboutme/Aboutme";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Technologies />
      <Project />
      <Aboutme />
      <Footer />
    </div>
  );
}

export default App;
