"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Interests from "../components/interests/Interests";
import Skills from "../components/skills/Skills";
import Languages from "../components/languages/Languages";
import Experience from "../components/experience/Experience";
import ContactForm from "../components/contactForm/ContactForm";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import styles from "./page.module.css";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const handleDoubleClick = (event) => {
      event.preventDefault();
    };

    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener("dblclick", handleDoubleClick);
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("dblclick", handleDoubleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.profileSection}>
        <div className={`${styles.profileContent} ${styles.flex}`}>
          <About className={`${styles.about} ${styles.flexItem}`} />
          <Interests className={`${styles.interests} ${styles.flexItem}`} />
        </div>
        <div className={`${styles.profileContent} ${styles.flex}`}>
          <Skills className={styles.flexItem} />
          <Languages className={styles.flexItem} />
        </div>
      </section>
      <section className={styles.experienceSection}>
        <Experience />
      </section>
      <section className={styles.contactSection}>
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}
