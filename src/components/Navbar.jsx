import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navEl = useRef(null); // Creo un riferimento per l'elemento navbar

    useEffect(() => {
        let prevScroll = window.scrollY;

        const handleScroll = (e) => {
            if (e.deltaY > 0) {
                // Se la rotellina va verso il basso
                navEl.current.classList.add("closed");
            } else {
                // Se la rotellina va verso l'alto
                navEl.current.classList.remove("closed");
            }
        };

        // Aggiungo l'event listener per lo scroll
        document.addEventListener("wheel", handleScroll);

        // Pulizia dell'event listener quando il componente viene smontato
        return () => {
            document.removeEventListener("wheel", handleScroll);
        };
    }, []); // L'array vuoto significa che l'effetto viene eseguito solo una volta quando il componente viene montato

    return (
        <nav ref={navEl} className="navBar d-flex justify-content-between align-items-center p-4 fixed-top" style={{ "borderBottom": "1px solid #cbcbcb", background: "#EFEFEF" }}>
            <Link to="/">
                <img
                    src="/assets/images/logo.png"
                    alt="Logo"
                    style={{ width: "40px" }}
                    className="rotating-image"
                    loading="lazy"
                />
            </Link>
            <div className="d-flex gap-3">
                <Link to="/works">Works</Link>
                {/* <div className="menuEl hover-underline-animation">
                    <a href="#aboutSection">About</a>
                </div> */}
                <div className="menuEl hover-underline-animation email">
                    <a
                        href="mailto:mvitade@gmail.com?subject=Hello%20There"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;