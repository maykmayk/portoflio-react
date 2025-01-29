import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const solutionsData = [
    {
        id: "01",
        icon: "./assets/images/icons/progress-check.svg",
        title: "Collective ownership.",
        description:
            "Whether I'm working independently or collaborating with your team, everyone is involved in the process.",
    },
    {
        id: "02",
        icon: "./assets/images/icons/bolt.svg",
        title: "I work efficiently and at a rapid pace.",
        description:
            "Swift iterations enable us to navigate through creative explorations until we reach a solution that feels perfectly aligned.",
    },
    {
        id: "03",
        icon: "./assets/images/icons/world.svg",
        title: "Demonstrate and communicate.",
        description:
            "I regularly showcase ongoing work, often through screen recordings accompanied by voice narration.",
    },
    {
        id: "04",
        icon: "./assets/images/icons/target.svg",
        title: "Action-oriented approach.",
        description:
            "I prioritize the creation of tangible artifacts to help the team visualize ideas, rather than relying on lengthy documents that are often overlooked.",
    },
    {
        id: "05",
        icon: "./assets/images/icons/components.svg",
        title: "I adopt a systemic approach to my work.",
        description:
            "Whether it involves a small feature or an entire design system, I develop reusable components to benefit the team.",
    },
    {
        id: "06",
        icon: "./assets/images/icons/bulb.svg",
        title: "Design is a thought process.",
        description:
            "I'm unafraid to discard an idea and explore diverse solutions. The more options, the better!",
    },
];

const Solutions = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
      
        gsap.set(".textAbout", { y: 0, opacity: 1 });
      
        gsap.from(".textAbout", {
          scrollTrigger: {
            trigger: ".textAbout",
            scrub: true,
            start: "top bottom",
            end: "bottom top"
          },
          stagger: {
            amount: 0.3,
          },
          opacity: 0,
          y: 40, 
          ease: "power3.out",
        });
      
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []);

    return (
        <div className="px-4 my-5">
            {/* Section Title */}
            <div className="sectionTitle editorial lh-1">
                Building{" "}
                <span>
                    <img
                        src="./assets/images/spanRect.png"
                        className="spanRect"
                        alt="Rectangle decoration"
                    />
                </span>{" "}
                solutions
            </div>

            {/* Solutions Grid */}
            <div className="row mt-3">
                {solutionsData.map((solution, index) => (
                    <div
                        key={index}
                        className="col-md-4 col-12 textAbout fs-5 lh-sm mt-md-5 mt-4"
                    >
                        <div className="grey d-flex justify-content-between">
                            <div>{solution.id}</div>
                            <div>
                                <img src={solution.icon} alt={`Icon for ${solution.title}`} />
                            </div>
                        </div>
                        <br />
                        <span className="neueMed hover-underline-animation d-inline">
                            {solution.title}
                        </span>{" "}
                        {solution.description}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Solutions;