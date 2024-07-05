"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinearProgress } from "@mui/material";
import styles from "./Languages.module.css";

const languagesList = [
  { language: "Español", level: "Nativo", progress: 100 },
  { language: "Inglés", level: "B1+/B2", progress: 70 },
];

const Languages = () => {
  return (
    <motion.section
      className={styles.languages}
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
        Idiomas
      </motion.h2>
      <motion.div
        className={styles.cardContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {languagesList.map((lang, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
          >
            <p className={styles.cardText}>
              <span className={styles.icon}>🌐</span>
              {lang.language} - {lang.level}
            </p>
            <LinearProgress
              variant="determinate"
              value={lang.progress}
              sx={{
                width: "100%",
                marginTop: "10px",
                backgroundColor: "#1c1e29",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#57cc99",
                },
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Languages;
