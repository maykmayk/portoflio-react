import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Inizializza Lenis con i valori specificati
    const lenis = new Lenis({
      direction: "vertical", // Direzione dello scroll
      smooth: true,         // Abilita lo smooth scrolling
      smoothTouch: false,   // Disabilita lo smooth scrolling per i dispositivi touch
      touchMultiplier: 2,   // Velocità dello scroll sui dispositivi touch
    });

    // Funzione di animazione ricorsiva
    const animateScroll = (time) => {
      lenis.raf(time); // Aggiorna lo stato dello scroll
      requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll); // Avvia il ciclo di animazione

    // Cleanup all'unmount
    return () => {
      lenis.destroy(); // Distrugge l'istanza di Lenis
    };
  }, []); // Effettua l'operazione solo al montaggio del componente

  return <div>{children}</div>; // Restituisce i figli wrappati nello smooth scroll
};

export default SmoothScroll;