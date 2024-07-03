import React from "react";
import styles from "./Footer.module.css";
import cjcg from '../../assets/logos/cjcg.png';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
      <a href="https://www.linkedin.com/in/carlosjcastrog/" target="_blank" rel="noopener noreferrer">
            {" "}
        <Image 
          src={cjcg} 
          alt="Logo" 
          width={100} 
          height={100} 
          layout="intrinsic"
          quality={100}
          className={styles.logo} 
        />  </a>
      </div>
      <div className={styles.center}>
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://www.linkedin.com/in/carlosjcastrog/" target="_blank" rel="noopener noreferrer">
            {" "}
            Carlos José Castro Galante
          </a>
          . Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
