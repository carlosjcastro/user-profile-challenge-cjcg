'use client';
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import styles from "./Interests.module.css";

const interestsList = [
  "Desarrollo web",
  "Inteligencia Artificial",
  "Ciberseguridad",
  "Machine Learning",
  "IoT",
  "Cloud Computing",
  "E-commerce",
  "Blockchain",
];

const Interests = () => {
  return (
    <motion.section
      className={styles.interests}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Intereses
      </motion.h2>
      <motion.div
        className={styles.cardContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {interestsList.map((interest, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
          >
            <span className={styles.icon}>
              <FaCheck />
            </span>
            <p className={styles.cardText}>{interest}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Interests;
