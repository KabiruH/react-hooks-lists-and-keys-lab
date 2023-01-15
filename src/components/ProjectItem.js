import React from "react";

function ProjectItem({ name, about, technologies }) {

  const tech = technologies.map ((technologies) => {
    return <span>{technologies}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <span>{technologies}</span>
      <div className="technologies">
        {tech}
      </div>
    </div>
  );
}

export default ProjectItem;
