import "./App.css";
import Collaborators from "./components/Collaborators";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sponsor from "./components/Sponsor";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Sponsor />
      <Collaborators />
    </div>
  );
}

export default App;
