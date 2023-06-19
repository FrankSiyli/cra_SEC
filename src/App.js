import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "./components/About/About";
import LandingPage from "./components/LandingPage/LandingPage";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Impressum from "./components/Impressum/Impressum";
import AGB from "./components/AGB/AGB";
import Datenschutz from "./components/Datenschutz/Datenschutz";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <NavBar />

      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          {" "}
          <Route index path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
