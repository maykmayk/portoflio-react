import React from "react";

const AboutSection = () => {
    return (
        <section id="aboutSection" className="w-100 my-5 row p-0 m-0 px-4">
            <div className="col-12 col-md-6 mb-4 p-0">
                <h2 className="sectionTitle editorial lh-1">
                    The story{" "}
                    <span>
                        <img
                            src="assets/images/spanRect2.png"
                            className="spanRect"
                            alt="Span"
                            loading="lazy"
                        />
                    </span>{" "}
                    so far!
                </h2>
                <p className="fs-5 lh-sm mt-5 mb-5">
                    Hi, I’m Michele, a 21-year-old student based in Milan. Whether I’m passionately cheering for my beloved Inter or lost in a captivating book, I’m always drawn to the things that inspire me. My creativity shines through experimenting with fonts and designs—there’s something magical about bringing ideas to life.

                    What defines me most is my curiosity and drive to grow. I love exploring new perspectives, having deep conversations, and connecting with people who share a passion for discovery. At heart, I’m a dreamer—a visionary who dares to think big and push boundaries.                </p>
            </div>
            <div className="col-12 col-md-1"/>
            <div className="col-12 col-md-5 px-0 ">
                <img
                    src="assets/images/portrait.jpg"
                    alt="Portrait"
                    className="jarallax-img portrait"
                />
                <a
                    href="https://goo.gl/maps/kH5vFbNV5Q7JTv9z7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-underline-animation"
                >
                    45.461346, 9.23291 / (GMT +0)
                </a>
            </div>
        </section>
    );
};

export default AboutSection;