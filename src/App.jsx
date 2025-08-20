import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

import Navigation from "./pages/components/Navigation";

export default function App() {
  return (
    <div style={{ padding: "10px", border: "1px solid black" }}>
      <Navigation />
      <div style={{ padding: "10px", border: "1px solid black" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}
