import "./App.css";
import Brainstorm from "./components/Brainstorm";
import Collaborators from "./components/Collaborators";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Integrations from "./components/Integrations";
import Navbar from "./components/Navbar";
import Report from "./components/Report";
import Sponsor from "./components/Sponsor";
import Teams from "./components/Teams";
import UXDesign from "./components/UXDesign";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsor />
      <Collaborators />
      <Work />
      <Integrations />
      <Report />
      <Brainstorm />
      <UXDesign />
      <Teams />
      <Footer />
    </>
  );
}

export default App;
