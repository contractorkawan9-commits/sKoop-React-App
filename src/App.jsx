import React from "react";
import { Routes, Route } from "react-router-dom"; // Removed useLocation as it's now in HeaderArea
import { Flavours } from "./pages/Flavours/Flavours";
import { Home } from "./pages/Home/Home";
import { Offers } from "./pages/Offers/Offers";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Location } from "./pages/Location/Location";
import { Search } from "./pages/Search/Search";
import { Footer } from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { HeaderArea } from "./components/HeaderArea/HeaderArea"; // Import HeaderArea

/**
 * Main application component.
 * Sets up routing, conditional header rendering, and global components like ScrollToTop and Footer.
 */
function App() {
  return (
    <>
      <ScrollToTop />
      <HeaderArea /> {/* Render the HeaderArea component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flavours" element={<Flavours />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/location" element={<Location />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
