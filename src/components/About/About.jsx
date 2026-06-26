import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Acerca de mi</h2>

      <div className={styles.content}>
        <div className={styles.aboutCard}>
          <svg
            className={styles.aboutIcon}
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
          </svg>
          <h3 className={styles.aboutCardTitle}>Perfil profesional</h3>
          <p className={styles.aboutCardText}>
            Ingeniera en Tecnología de Software egresada de la UANL, cursando
            el Bootcamp Java Full Stack Jr. de Generation México. Tengo
            experiencia en desarrollo web full stack, automatización de
            procesos con n8n y desarrollo de apps iOS con Swift.
          </p>
          <p className={styles.aboutCardText}>
            Me interesa el backend y el desarrollo full stack, y disfruto
            construir soluciones que resuelvan problemas reales con código
            limpio y bien estructurado.
          </p>
        </div>

        <div className={styles.aboutCard}>
          <svg
            className={styles.aboutIcon}
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
          <h3 className={styles.aboutCardTitle}>Objetivos</h3>
          <p className={styles.aboutCardText}>
            Busco integrarme a un equipo de desarrollo donde pueda aportar
            desde el primer día, seguir aprendiendo y crecer como
            profesional. Me adapto rápido a nuevas tecnologías y disfruto
            trabajar en equipo bajo metodologías ágiles (Scrum).
          </p>
          <p className={styles.aboutCardText}>
            Actualmente en búsqueda activa de oportunidades de tiempo
            completo en desarrollo Full Stack o Backend.
          </p>
        </div>
      </div>
    </section>
  );
};