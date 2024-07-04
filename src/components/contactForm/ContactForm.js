import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import { PiSealWarningBold } from "react-icons/pi";
import axios from "axios";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/sendEmail.php", data);
      if (response.data.success) {
        setIsSubmitted(true);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error al enviar el mensaje", error);
    }
  };

  return (
    <motion.section
      className={styles.contactForm}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={styles.formContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {isSubmitted ? (
          <motion.div
            className={styles.successMessage}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¡Mensaje enviado con éxito!
          </motion.div>
        ) : (
          <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
          >
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: "Nombre es requerido" }}
              render={({ field }) => (
                <motion.input
                  {...field}
                  type="text"
                  placeholder="Nombre"
                  className={styles.inputField}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              )}
            />
            {errors.name && (
              <span className={styles.error}>
                <PiSealWarningBold className={styles.errorIcon} />{" "}
                {errors.name.message}
              </span>
            )}

            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "Email es requerido",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Email no es válido",
                },
              }}
              render={({ field }) => (
                <motion.input
                  {...field}
                  type="email"
                  placeholder="Email"
                  className={styles.inputField}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
              )}
            />
            {errors.email && (
              <span className={styles.error}>
                <PiSealWarningBold className={styles.errorIcon} />{" "}
                {errors.email.message}
              </span>
            )}

            <Controller
              name="message"
              control={control}
              defaultValue=""
              rules={{ required: "Mensaje es requerido" }}
              render={({ field }) => (
                <motion.textarea
                  {...field}
                  placeholder="Mensaje"
                  className={styles.inputField}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />
              )}
            />
            {errors.message && (
              <span className={styles.error}>
                <PiSealWarningBold className={styles.errorIcon} />{" "}
                {errors.message.message}
              </span>
            )}

            <motion.button
              type="submit"
              className={styles.button}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Enviar
            </motion.button>
          </form>
        )}
      </motion.div>
      <motion.div
        className={styles.titleContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className={styles.title}>Contáctame</h2>
        <p>¡Espero tu mensaje!</p>
      </motion.div>
    </motion.section>
  );
};

export default ContactForm;
