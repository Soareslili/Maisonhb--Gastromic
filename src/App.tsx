import Header from "./components/Layout/Header"
import HeroSection from "./components/Home/HeroSection"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutSection from "./pages/AboutSection";
import ReservationForm from "./components/Home/ReservationForm";
import MenuSection from "./components/Services/MenuSection";
import GallerySection from "./pages/GallerySection";


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <AOS.init />
      <div className="min-h-screen flex flex-col">

        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/menu" element={<MenuSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/reserve" element={<ReservationForm />} />
            <Route path="/gallery" element={<GallerySection />} />
          </Routes>
        </main>
      </div>

    </BrowserRouter >
  );
}

export default App
