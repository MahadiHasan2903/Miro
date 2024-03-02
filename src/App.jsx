import "./App.css";
import Collaborators from "./components/Collaborators";
import Hero from "./components/Hero";
import Integrations from "./components/Integrations";
import Navbar from "./components/Navbar";
import Report from "./components/Report";
import Sponsor from "./components/Sponsor";
import Work from "./components/Work";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Sponsor />
      <Collaborators />
      <Work />
      <Integrations />
      <Report />
    </div>
  );
}

export default App;
