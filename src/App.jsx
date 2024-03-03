import "./App.css";
import Brainstorm from "./components/Brainstorm";
import Collaborators from "./components/Collaborators";
import Hero from "./components/Hero";
import Integrations from "./components/Integrations";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Report from "./components/Report";
import Sponsor from "./components/Sponsor";
import Teams from "./components/Teams";
import UXDesign from "./components/UXDesign";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Header />
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
    </div>
  );
}

export default App;
