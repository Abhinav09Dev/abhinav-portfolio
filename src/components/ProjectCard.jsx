import React from "react";

const ProjectCard = ({src, link, title, desc}) => {
  return (
    <a
      style={{ textDecoration: "none" }}
      href={link}
      target="_blank"
    >
      <img src={src} className="hover" alt={`${title} logo`} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </a>
  );
};

export default ProjectCard;
