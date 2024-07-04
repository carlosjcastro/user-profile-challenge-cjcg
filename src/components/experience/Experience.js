import React from "react";
import styles from "./Experience.module.css";

const experiences = [
  {
    title: "'Innovation Challenge' Hackathon",
    duration: "Mayo 2024 - Junio 2024",
    description:
      "Desarrollé interfaces de usuario dinámicas e interactivas usando React y TypeScript, incorporando Props, Hooks y React Router Dom para una navegación eficiente.",
  },
  {
    title: "Colaborador en Instituto de Informática",
    duration: "Agosto 2023 - Octubre 2023",
    description:
      "Apoyé el desarrollo de videojuegos para personas con dificultades cognitivas y motoras, colaborando con el profesor principal.",
  },
  {
    title: "Portafolio Remoto, Autodidacta",
    duration: "Noviembre 2022 - Presente",
    description:
      "Utilicé HTML5 y CSS3 para crear páginas web responsivas y visualmente atractivas, mejorando la experiencia del usuario.",
  },
];

const Experience = () => {
  return (
    <div className={styles.experienceContainer}>
      <h2 className={styles.title}>Experiencia</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
            key={index}
          >
            <div className={styles.timelineContent}>
              <h3 className={styles.jobTitle}>{exp.title}</h3>
              <span className={styles.duration}>{exp.duration}</span>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
