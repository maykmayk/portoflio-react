import React from "react";

const WelcomeScreen = () => {
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
                        Since 2018 handcrafting a digital presence for modern brands...
                    </p>
                </div>
                <div className="p-0 col-12 col-md-2  mb-2"></div>
                <div className="lineIntro p-0 col-12 col-md-4 mb-2">
                    <p className="fs-6">
                        If you have a potential project...
                        <a
                            href="mailto:mvitade@gmail.com?subject=Hello%20There"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link d-inline email"
                        >
                            mvitade@gmail.com
                        </a>
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