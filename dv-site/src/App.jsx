import "./App.css";
import Navbar from "./NavBar";
import About from "./WebPages/AboutPage";
import HomePage from "./WebPages/HomePage";
import Publications from "./WebPages/Publications";
import Visualize from "./WebPages/Visualize";
import HomeFooter from "./homeComponents/HomeFooter";
import { Route, Routes, useLocation } from "react-router-dom";
import ContactSection from "./ContactSection";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Navbar />

      <div style={{ minWidth: "500px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/studies" element={<Publications />} />
          <Route path="/visualize" element={<Visualize />} />
        </Routes>
      </div>
      <ContactSection />
      <HomeFooter />
    </>
  );
}

export default App;
