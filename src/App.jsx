import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vault from "./pages/Vault";
import Prologue from "./pages/Prologue";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/prologue" element={<Prologue />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;