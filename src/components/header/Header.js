'use client';
import React from "react";
import Image from "next/image";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import styles from "./Header.module.css";
import carlos from "../../assets/img/carlos.jpg";

export default function Header() {

  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          src={carlos}
          alt="Perfil"
          className={styles.profileImage}
          width={150}
          height={150}
        />
      </motion.div>
      <motion.div
        className={styles.titleContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h1 className={styles.title}>Carlos José Castro Galante</h1>
        <p className={styles.subtitle}>
          Front-end Developer & Azure AI Engineer
        </p>
        <motion.div
          className={styles.links}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://www.linkedin.com/in/carlosjcastrog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin size={30} />
          </a>
          <a
            href="https://github.com/carlosjcastro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub size={30} />
          </a>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
