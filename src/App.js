import About from "./components/About";
import Contact from "./components/Contact";
import Technology from "./components/Technology";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience/>
      <Portfolio />
      <Technology />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;