import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import styles from "./Contact.module.css";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://dazzling-stardust-8dce6d.netlify.app/www.linkedin.com/in/asenetabigaillazcanosauceda",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/AdizLz",
  },
];

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={styles.container} id="contacts">
      <h2 className={styles.title}>Contáctame</h2>

      <a href="mailto:asenetlazcano.dev@gmail.com" className={styles.emailBtn}>
        <FaEnvelope />
        asenetlazcano.dev@gmail.com
      </a>

      <div className={styles.socialRow}>
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a href={link.url} target="_blank" rel="noreferrer" className={styles.socialLink} key={index}>
              <Icon className={styles.socialIcon} />
              {link.name}
            </a>
          );
        })}
      </div>

      <hr className={styles.divider} />

      <p className={styles.footer}>
        © {currentYear} Asenet Abigail Lazcano Sauceda · Java Full Stack Jr.
      </p>
      <p className={styles.info}>
       Made with React
      </p>
    </section>
  );
};