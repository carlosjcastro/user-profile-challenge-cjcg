import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://www.linkedin.com/in/carlosjcastrog/" target="_blank" rel="noopener noreferrer">
          {" "}
          Carlos José Castro Galante
        </a>
        . Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
