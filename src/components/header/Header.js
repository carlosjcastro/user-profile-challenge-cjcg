"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.css";
import carlos from "../../assets/img/carlos.jpg";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
  }, [isModalOpen]);

  return (
    <>
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
          onClick={handleImageClick}
        >
          <Image
            loader={myLoader}
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

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                loader={myLoader}
                src={carlos}
                alt="Perfil"
                className={styles.modalImage}
                width={500}
                height={500}
              />
              <p>Carlos José Castro Galante</p>
              <button className={styles.closeButton} onClick={handleCloseModal}>
                X
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
