import React, { useState, useEffect } from "react";
import { updateMilanTime } from "../utils/timeUtils"; // Nome corretto della funzione

const Footer = () => {
    const [milanTime, setMilanTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setMilanTime(updateMilanTime()); // Utilizza la funzione per aggiornare l'orario
        }, 1000); // Aggiorna ogni secondo

        return () => clearInterval(interval); // Pulisci l'intervallo al termine del componente
    }, []);

    return (
        <footer className="mt-5 pt-3 px-4 d-flex justify-content-between" style={{ "borderTop": "1px solid #cbcbcb" }}>
            <LeftSection milanTime={milanTime} />
            <LogoSection />
            <RightSection />
        </footer>
    );
};

// Sezione di sinistra
const LeftSection = ({ milanTime }) => (
    <div className="pb-3 h-100 d-flex flex-column align-content-start">
        <div className="mb-auto">
            <div className="neue fs-6 grey">© 2023</div>
            <div className="neue fs-5 scroll-top-button">Say hello!</div>
            <div className="neue fs-5 hover-underline-animation email">
                <a href="mailto:mvitade@gmail.com?subject=Hello%20There" target="_blank" rel="noopener noreferrer">
                    mvitade@gmail.com
                </a>
            </div>
        </div>
        <div>
            <div className="fs-5 neue d-flex align-items-center">
                <span className="blinkingCircle me-2"></span>Milan
                <span className="ms-2 timeCont">{milanTime}</span>
            </div>
        </div>
    </div>
);

// Sezione del logo
const LogoSection = () => (
    <div className="d-none d-md-flex align-self-end justify-content-center overflow-hidden h-100">
        <img src="/assets/images/logoAnim2.gif" alt="Logo Anim" className="w-100" />
    </div>
);

// Sezione di destra
const RightSection = () => (
    <div className="text-end d-flex flex-column align-content-start pb-3 h-100">
        <div className="mb-auto d-flex flex-column">
            <SocialLink href="https://www.behance.net/mayke" text="Behance" />
            <SocialLink href="https://www.linkedin.com/in/michele-de-vita-b99175241/" text="LinkedIn" />
            <SocialLink href="https://www.instagram.com/mayk.gif/" text="Instagram" />
        </div>
        <div>
            <a href="mailto:mvitade@gmail.com?subject=Hello%20There" target="_blank" rel="noopener noreferrer">
                <div className="neue fs-5 hover-underline-animation email">Mail</div>
            </a>
        </div>
    </div>
);

// Componente riutilizzabile per i link social
const SocialLink = ({ href, text }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="neue fs-5 hover-underline-animation">{text}</div>
    </a>
);

export default Footer;