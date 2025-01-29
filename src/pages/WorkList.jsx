import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Componente HeaderWorkDetails
const HeaderWorkDetails = () => {
  return (
    <div className="headWork" id="main">
      <div className="w-100 title p-4 mt-5">
        <img src="/assets/images/titles/titleWord1.svg" className="w-100 pt-4" alt="Title" />
      </div>
      <div className="d-flex justify-content-center subTitleWorkList">
        <div className="col-12 col-md-6 fs-4 text-center mb-5">
          Highlights since 2020
          <span className="ms-2">
            <img src="/assets/images/spanRect4.png" className="spanRectSub" alt="Rect" />
          </span>
        </div>
      </div>
    </div>
  );
};

const ProjectItem = ({ project, prevMargin, setPrevMargin }) => {
  const [margin, setMargin] = useState("5vw"); 

  useEffect(() => {
    if (window.innerWidth > 768) {
      let random = Math.floor(Math.random() * (35 - 10 + 1)) + 10;
      if (prevMargin !== null) {
        random = Math.max(10, Math.min(35, prevMargin + Math.floor(Math.random() * 11) - 10));
      }
      setPrevMargin(random);
      setMargin(`${random}vw`); 
    }
  }, []);

  return (
    <div key={project.name_id}>
      <Link className="ne-resize" to={`/work-details/${project.name_id}`}>
        <div className="work-item d-flex align-items-baseline text-medium" style={{ marginLeft: margin }}>
          <div className="px-md-3 px-1 fs-1 lh-lg mt-2">{project.words[0]}</div>

          {project.pop_up_image && (
            <span className="d-md-block d-none">
              <img src={project.pop_up_image} alt={project.title} />
            </span>
          )}

          <div className="px-md-3 px-1 fs-1 lh-lg mt-2">{project.words[1]}</div>

          <p className="d-none d-md-block">{project.year}</p>
        </div>
      </Link>
      <div className="linez"></div>
    </div>
  );
};

const WorkList = () => {
  const [projects, setProjects] = useState([]);
  const [prevMargin, setPrevMargin] = useState(15);

  useEffect(() => {
    fetch('/data/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects data:', error));
  }, []);

  return (
    <div>
      <HeaderWorkDetails />

      <div className="containerz">
        <div className="work-items d-flex flex-column justify-content-between w-100">
          {projects.map((project) => (
            <ProjectItem
              key={project.name_id}
              project={project}
              prevMargin={prevMargin}
              setPrevMargin={setPrevMargin}
            />
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <div className="col-12 col-md-6 fs-4 text-center mb-md-3 mb-2">
          Are you the next?
          <span className="ms-2">
            <img src="/assets/images/spanRect5.png" className="spanRectSub" alt="Rect" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkList;