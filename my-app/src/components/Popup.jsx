import React from "react";

import "./Popup.css";

function Popup({ project, onClose }) {
  if (!project) return null; // if no project selected → no popup

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <h2>{project.title}</h2>

        <img src={project.img} alt={project.title} className="popup-image"/>

        <p><strong>Tech Used:</strong> {project.tech}</p>
        <p><strong>Description:</strong> {project.description}</p>
        <p><strong>Challenges:</strong> {project.challenges}</p>
        <p><strong>What I Learned:</strong> {project.learned}</p>
        <p><strong>GitHub Repo:</strong>{" "}
         <a href={project.repo} target="_blank" rel="noreferrer">
            {project.repo}
          </a>
        </p>
      </div>
    </div>
  );
}
export default Popup;
