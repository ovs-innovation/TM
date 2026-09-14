import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import RetailBranding from "./pages/RetailBranding";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/Whatsapp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/retail-branding" element={<RetailBranding />} />
        <Route path="/branding" element={<RetailBranding />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;