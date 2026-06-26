import styles from "./Experience.module.css";
import data from "../../data/experience.json";
import skills from "../../data/skills.json";

const { experiences } = data;

export const Experience = () => {
  return (
    <>
      <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experiencia</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div className={styles.timelineItem} key={index}>
              <span className={styles.dot} />
              <div className={styles.timelineHeader}>
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                </div>
                <span className={styles.date}>{exp.date}</span>
              </div>
              <ul className={styles.points}>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.container} id="skill">
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map((group, index) => (
            <div className={styles.skillCard} key={index}>
              <h4 className={styles.skillCategoryTitle}>{group.category}</h4>
              <div className={styles.skillBadgeRow}>
                {group.items.map((skill, i) => (
                  <span className={styles.skillBadge} key={i}>
                    {skill.title ?? skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};