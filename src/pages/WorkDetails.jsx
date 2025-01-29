import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gallery from "../components/Gallery";
import Tags from "../components/Tags";
import NextProject from "../components/NextProject";

const WorkDetails = () => {
    const { workId } = useParams();
    const [work, setWork] = useState(null);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Carica tutti i progetti
        fetch("/data/projects.json")
            .then((response) => {
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                return response.json();
            })
            .then((data) => {
                setProjects(data);
                const foundWork = data.find(project => project.name_id === workId);
                setWork(foundWork || null);
            })
            .catch((error) => console.error("Error fetching projects data:", error));
    }, [workId]);

    if (!work) return <div>Loading...</div>;

    return (
        <div id="workDetailsContainer" className="mt-5">
            <div className="headerDetails">
                <div className="d-flex justify-content-center pt-3">
                    <div className="d-flex align-items-center">
                        <div className="titleWorkPage editorial">{work.title}</div>
                        <div className="fs-6 mb-md-5 mb-3 ms-2 editorial numberWork">[{work.number}]</div>
                    </div>
                </div>
                <div className="d-flex justify-content-center fs-6 lh-4 text-center mw-100 mb-md-5 mb-4 subtitleWork">
                    {work.subTitle}
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    {work.haveCover ? (
                        <img src={work.coverUrl} className="headerImgWork" alt="Work cover" />
                    ) : (
                        <video className="headerImgWork" autoPlay loop muted playsInline>
                            <source src={work.videoCover} type="video/mp4" />
                            Il tuo browser non supporta la riproduzione di video.
                        </video>
                    )}
                </div>
            </div>

            <div className="row mb-5 px-4 mt-md-5 mt-4">
                <div className="col-12 col-md-6 d-flex flex-column align-items-start">
                    <div className="mb-auto">
                        <div className="sideWorkTitle" dangerouslySetInnerHTML={{ __html: work.slogan }} />
                        {work.showSeeMore && (
                            <div className="fs-6 hover-underline-animation mb-md-4 mb-0 mt-3">
                                <a href={work.showMoreLink} target="_blank" rel="noopener noreferrer">
                                    See more...
                                    <img src="/assets/images/icons/arrow-down-right.svg" className="arrow" alt="Arrow icon" />
                                </a>
                            </div>
                        )}
                    </div>
                    <Tags tags={work.tags} />
                </div>
                <div className="col-12 col-md-6 mt-md-0 mt-3 d-flex align-items-start">
                    <div className="fs-6 reveal-type">{work.text}</div>
                </div>
            </div>

            {work.haveImages && <Gallery images={work.images} />}
            {work.showSeeMore && (
                <div className="d-flex justify-content-center">
                    <div className="fs-6 hover-underline-animation mb-4 mt-3">
                        <a href={work.showMoreLink} target="_blank" rel="noopener noreferrer">
                            See more...
                            <img src="/assets/images/icons/arrow-down-right.svg" className="arrow" alt="Arrow icon" />
                        </a>
                    </div>
                </div>
            )}

            <div className="linez"></div>
            <NextProject nextProjectId={work.nextProjectId} nextProjectImage={work.nextProjectImage} />
        </div>
    );
};

export default WorkDetails;