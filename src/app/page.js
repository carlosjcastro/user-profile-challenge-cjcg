'use client';
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Interests from "../components/interests/Interests";
import Skills from "../components/skills/Skills";
import ContactForm from "../components/contactForm/ContactForm";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import styles from "./page.module.css";

export default function Home() {
  const { t } = useTranslation(); // Hook para traducción

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
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
        <Skills />
      </section>
      <section className={styles.contactSection}>
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}
