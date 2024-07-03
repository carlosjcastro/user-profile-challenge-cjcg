import { motion } from "framer-motion";
import styles from "./About.module.css";

const About = () => {
  return (
    <motion.section
      className={styles.about}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.title}>Sobre mí</h2>
      <p className={styles.description}>
        ¡Hola! Soy Carlos José, estudiante de Informática y apasionado por la inteligencia artificial en Azure. Mi fascinación por la tecnología me ha llevado a explorar diversas áreas del desarrollo web y la ingeniería de software, destacándome como Jr. Front-end Developer y Azure AI Engineer. Mi enfoque se centra en crear soluciones innovadoras que combinen la potencia de la informática con la inteligencia artificial para abordar desafíos complejos. Estoy comprometido con el aprendizaje continuo y el desarrollo de aplicaciones que no solo sean funcionales, sino también impactantes y eficientes.
      </p>
      <motion.a
        href="https://drive.google.com/file/d/1p_zfcJraCj_3C15ywFjd6F4z-O2epdnT/view?usp=sharing"
        download
        target="_blank"
        rel="noopener noreferrer"
        className={styles.downloadButton}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Ver CV
      </motion.a>
    </motion.section>
  );
};

export default About;
