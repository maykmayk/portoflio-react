import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import WelcomeScreen from "./components/WelcomeScreen";
import Carousel from "./components/Carousel";
import AboutSection from "./components/AboutSection";
import Solutions from "./components/Solutions.jsx";
import Footer from "./components/Footer";
import WorkList from "./pages/WorkList"; 
import Lenis from "@studio-freight/lenis";
import WorkDetails from "./pages/WorkDetails";

const App = () => {
  const lenis = useRef(null);

  useEffect(() => {
    lenis.current = new Lenis({
      direction: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    const raf = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      if (lenis.current) {
        lenis.current.destroy();
      }
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <WelcomeScreen />
            <Carousel />
            <AboutSection />
            <Solutions />
          </main>
        } />
        
        <Route path="/works" element={<WorkList />} />
        <Route path="/work-details/:workId" element={<WorkDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;