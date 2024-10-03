import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../components/ThemeContext";

export default function hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Display Mode"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Abhinav <br />
          Chauhan
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://github.com/Abhinavvvvvvvv" target="_blank">
            <img src={githubIcon} alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhinav-chauhan-0726b41aa/"
            target="_blank"
          >
            <img src={linkedIcon} alt="LinkedIn" />
          </a>
        </span>
        <p className={styles.description}>
          A detail-oriented developer driven by a passion for continuous
          learning, dedicated to crafting meaningful and intuitive digital
          experiences.
        </p>
        <a href={CV} target="_blank">
          <button className="hover">Résumé</button>
        </a>
      </div>
    </section>
  );
}
