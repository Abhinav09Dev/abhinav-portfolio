import React from "react";
import styles from "./ProjectStyles.module.css";
import fisheries from "../../assets/project_1.png";
import fisheries2 from "../../assets/project_2.png"
import cloudNoting from "../../assets/cloud_noting.png"
import newsScrapper from "../../assets/news_scrapper.png"
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fisheries}
          link={"https://pmmkssy.dof.gov.in/pmmkssy/#/"}
          title={"Pradhan Mantri Matsya Kisan Samridhi Sah-Yojana"}
          desc={"TBD"}
        />
        <ProjectCard
          src={fisheries2}
          link={"https://nfdp.dof.gov.in/nfdp/#/"}
          title={"National Fisheries Digital Platform"}
          desc={"TBD"}
        />
        <ProjectCard
          src={cloudNoting}
          link={"https://github.com/Abhinavvvvvvvv/Cloud-Noting"}
          title={"Cloud Noting"}
          desc={"TBD"}
        />
        <ProjectCard
          src={newsScrapper}
          link={"https://github.com/Abhinavvvvvvvv/News-Scrapper"}
          title={"News Scapper"}
          desc={"TBD"}
        />
      </div>
    </section>
  );
};

export default Projects;
