import Header from "./components/Header"
import HeroSection from "./pages/HeroSection"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (

    <div>
      <AOS.init />
      <Header />
      <HeroSection />

    </div>


  )
}

export default App
