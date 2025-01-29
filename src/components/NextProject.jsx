import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap"; // Importa GSAP

const NextProject = ({ nextProjectId, nextProjectImage }) => {
    useEffect(() => {
        // Animazione al passaggio del mouse
        gsap.utils.toArray(".containerHover").forEach((el) => {
            const image = el.querySelector("img.swipeimage"),
                setX = gsap.quickTo(image, "x", { duration: 0.6, ease: "power3" }),
                align = (e) => {
                    setX(e.clientX);
                },
                startFollow = () => document.addEventListener("mousemove", align),
                stopFollow = () => document.removeEventListener("mousemove", align),
                fade = gsap.to(image, {
                    autoAlpha: 1,
                    ease: "none",
                    paused: true,
                    onReverseComplete: stopFollow
                });

            el.addEventListener("mouseenter", (e) => {
                fade.play();
                startFollow();
                align(e);
            });

            el.addEventListener("mouseleave", () => fade.reverse());
        });
    }, []); // L'animazione parte solo una volta al caricamento del componente

    return (
        <div className="containerHover">
            <Link to={`/work-details/${nextProjectId}`}>
                <div className="d-flex w-100 h-100 justify-content-center align-items-center">
                    <div className="fs-2">
                        <div className="seeWorks me-0">Next Project</div>
                    </div>
                </div>
                <img className="swipeimage" src={nextProjectImage} alt="Next project preview" />
                <div className="swipecursor"></div>
            </Link>
        </div>
    );
};

export default NextProject;