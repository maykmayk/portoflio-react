import React, { useEffect } from "react";
import { gsap } from "gsap";

const WelcomeScreen = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
        duration: 1, // Durata predefinita per tutte le animazioni
      },
    });

    // Delay iniziale prima di iniziare qualsiasi animazione
    tl.delay(0.5);

    // Animazione per il titolo in .headWork
    tl.fromTo(
      ".headWork .w-100",
      { y: 300, opacity: 0 }, // Stato iniziale
      { y: 0, opacity: 1 } // Stato finale
    );

    // Animazione per i testi in .lineIntro
    tl.fromTo(
      ".lineIntro .fs-6",
      { y: 150, opacity: 0 }, // Stato iniziale
      { y: 0, opacity: 1, stagger: 0.3 }, // Stato finale + animazione sequenziale
      "-=0.5" // Sovrapposizione con l'animazione precedente
    );
  }, []);

  return (
    <section className="main mt-5 welcome-screen" id="main">
      <div className="headWork w-100 p-4 pt-5">
        <img
          src="assets/images/titles/title1.svg"
          className="w-100"
          alt="Title"
        />
      </div>
      <div className="w-100 m-0 row px-4" id="text-open">
        <div className="lineIntro p-0 col-12 col-md-4">
          <p className="fs-6">
            Since 2018 handcrafting a digital presence for modern brands
            involving creating a unique and authentic identity that effectively
            engages the audience.
          </p>
        </div>
        <div className="p-0 col-12 col-md-2 mb-2"></div>
        <div className="lineIntro p-0 col-12 col-md-4 mb-2">
          <p className="fs-6">
            If you have a potential project or and think I'd be the ideal
            partner to bring it to life, please get in touch at{" "}
            <a
              href="mailto:mvitade@gmail.com?subject=Hello%20There"
              target="_blank"
              rel="noopener noreferrer"
              className="link d-inline email"
            >
              mvitade@gmail.com
            </a>{" "}
            I'd love to hear from you!
          </p>
        </div>
        <div className="lineIntro p-0 col-12 col-md-2 text-end d-flex align-items-end justify-content-end">
          <a
            href="mailto:mvitade@gmail.com?subject=Hello%20There"
            className="fs-6 email hover-underline-animation"
          >
            Get in touch
            <img
              src="assets/images/icons/arrow-down-right.svg"
              className="arrow"
              alt="Arrow"
              draggable="false"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WelcomeScreen;