import { useState } from "react";
import { FaArrowRight, FaDownload, FaTimes, FaLinkedin } from "react-icons/fa";
import styles from "./Hero.module.css";

export const Hero = () => {
  const [showCV, setShowCV] = useState(false);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>Java Full Stack Jr. · Monterrey, NL</span>

          <h1 className={styles.title}>
            Hola, soy
            <span className={styles.titleAccent}>
              <br />
              Asenet Lazcano.
            </span>
          </h1>
          <p className={styles.description}>
            Ingeniera en Software con experiencia en desarrollo web, automatización de procesos y 
            apps iOS. Construyo soluciones que combinan backend sólido con interfaces que importan.
          </p>

          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryBtn}>
              Ver proyectos <FaArrowRight />
            </a>
            <a href="https://www.linkedin.com/in/asenetabigaillazcanosauceda/" className={styles.linkedinBtn}>
              Linkedin 
            </a>
            <button onClick={() => setShowCV(true)} className={styles.secondaryBtn}>
              Ver CV
            </button>
          </div>
        </div>

        <img
          src="/assets/hero/heroImage.png"
          alt="Foto de Asenet"
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>

      {showCV && (
        <div className={styles.cvOverlay} onClick={() => setShowCV(false)}>
          <div className={styles.cvModal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.cvHeader}>
              <a href="/assets/hero/Asenet_Lazcano_CV.pdf" download="Asenet_Lazcano_CV.pdf" className={styles.cvDownloadBtn}>
                <FaDownload /> Descargar
              </a>
              <button className={styles.cvCloseBtn} onClick={() => setShowCV(false)}>
                <FaTimes />
              </button>
            </div>
            <iframe
              src="/assets/hero/Asenet_Lazcano_CV.pdf#toolbar=0"
              title="Curriculum Vitae"
              className={styles.cvFrame}
              style={{ backgroundColor: "white" }}
            />
          </div>
        </div>
      )}
    </>
  );
};