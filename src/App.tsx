import Header from "./components/Header"
import HeroSection from "./components/Home/HeroSection"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutSection from "./pages/AboutSection";
import ReservationForm from "./components/Home/ReservationForm";


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
            <Route path="/about" element={<AboutSection />} />
            <Route path="/reserve" element={<ReservationForm />} />
          </Routes>
        </main>
      </div>

    </BrowserRouter >
  );
}

export default App
