import { useState } from "react";
// Importamos los íconos que vamos a usar. Cada uno viene de una "familia" distinta de react-icons
import { FaBoxOpen, FaProjectDiagram, FaTree, FaChartLine, FaTimes, FaRegFutbol} from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GiLuchador } from "react-icons/gi";
import styles from "./Projects.module.css";
// Importamos el arreglo de proyectos que está guardado en JSON
import projects from "../../data/projects.json";

// Este objeto "traduce" el texto que viene del JSON (ej. "FaBoxOpen")
// al componente real de React que se puede dibujar en pantalla.
// El JSON no puede guardar un componente, solo texto, por eso necesitamos este paso intermedio.
const iconMap = {
  FaBoxOpen,
  FaProjectDiagram,
  FaTree,
  FaChartLine,
  FaRegFutbol,
  GiLuchador 
};

export const Projects = () => {
  // selectedProject guarda el proyecto que el usuario abrió en el modal.
  // Si nadie ha abierto ningún modal, vale "null" (nada seleccionado).
  const [selectedProject, setSelectedProject] = useState(null);

  // currentImage guarda en qué número de imagen del carrusel estamos parados (empieza en la 0).
  const [currentImage, setCurrentImage] = useState(0);

  // Esta función se ejecuta cuando le das clic a "Vista previa" en una tarjeta.
  // Guarda el proyecto clicado en el estado, y reinicia el carrusel a la imagen 0.
  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImage(0);
  };

  // Esta función "cierra" el modal, volviendo selectedProject a null,
  // lo cual hace que el modal deje de renderizarse (lo verás más abajo).
  const closeModal = () => setSelectedProject(null);

  // Avanza a la siguiente imagen del carrusel.
  // El "% selectedProject.images.length" hace que si llegas a la última imagen,
  // regrese a la imagen 0 en vez de marcar un número que no existe.
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % selectedProject.images.length);
  };

  // Retrocede a la imagen anterior. Sumamos el total antes de aplicar el módulo
  // para evitar que el número se vuelva negativo cuando estás en la imagen 0.
  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Portafolio de proyectos</h2>

      <div className={styles.grid}>
        {/* .map() recorre el arreglo "projects" y por cada uno devuelve una tarjeta */}
        {projects.map((project, index) => {
          // Buscamos en el diccionario el componente de ícono que le toca a este proyecto
          const Icon = iconMap[project.icon];
          return (
            <div className={styles.card} key={index}>
              {/* Si el status es "En desarrollo", usa el color de advertencia (naranja),
                  si no, usa el color de éxito (cian). Esto es un if/else escrito como expresión. */}
              <span
                className={`${styles.badge} ${
                  project.status === "En desarrollo" ? styles.badgeWarning : styles.badgeSuccess
                }`}
              >
                {project.status}
                {project.progress ? ` · ${project.progress}%` : ""}
              </span>

              <div className={styles.iconBox}>
                <Icon className={styles.icon} />
              </div>

              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.techStack}>{project.techStack.join(" · ")}</p>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.buttons}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.githubBtn}
              >
                GitHub
              </a>

              {/* Al hacer clic aquí, llamamos a openModal pasándole ESTE proyecto específico */}
              {project.images?.length > 0 && (
              <button
                onClick={() => openModal(project)}
                className={styles.previewBtn}
              >
                Vista previa
              </button>
            )}

              {/* Solo muestra el botón Demo si existe previewUrl */}
              {project.previewUrl && (
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.previewBtn}
                >
                  Demo
                </a>
              )}
            </div>

              {/* Solo muestra la etiqueta (tag) si el proyecto tiene una distinta de cadena vacía */}
              {project.tag && <span className={styles.tag}>{project.tag}</span>}

            </div>
          );
        })}
        
      </div>

      {/* AQUÍ ESTÁ LA CLAVE DEL MODAL:
          {selectedProject && (...)} significa "si selectedProject tiene algo dentro (no es null),
          entonces renderiza todo lo que está dentro del paréntesis".
          Si selectedProject es null, React no dibuja nada de esto. */}
      {selectedProject && (
        <div className={styles.overlay} onClick={closeModal}>
          {/* stopPropagation evita que el clic adentro del modal "se filtre" hacia el overlay
              de atrás y lo cierre sin querer */}
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeModal}>
              <FaTimes />
            </button>

            {selectedProject.images?.length > 0 && (
  <>
          <div className={styles.carousel}>
            <button onClick={prevImage} className={styles.carouselBtn}>
              <GrFormPrevious />
            </button>

            <img
              src={selectedProject.images[currentImage]}
              alt={`${selectedProject.title} captura ${currentImage + 1}`}
              className={styles.carouselImage}
            />

            <button onClick={nextImage} className={styles.carouselBtn}>
              <MdOutlineNavigateNext />
            </button>
          </div>
        </>
      )}

            <div className={styles.dots}>
              {/* Un puntito por cada imagen. Si "i" coincide con currentImage, se le agrega
                  la clase dotActive para resaltarlo */}
              {selectedProject.images.map((_, i) => (
                <span
                  key={i}
                  className={`${styles.dot} ${i === currentImage ? styles.dotActive : ""}`}
                  onClick={() => setCurrentImage(i)}
                />
              ))}
            </div>

            <div className={styles.buttons}>
              <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className={styles.githubBtn}>
                GitHub
              </a>

              {/* ESTA ES LA CONDICIÓN QUE AUN NO TERMINO DE ENTENDER:
                  "selectedProject.previewUrl && (...)" funciona igual que el ejemplo del tag de arriba.
                  - Si previewUrl tiene texto (un link real), JavaScript lo considera "verdadero",
                    entonces SÍ renderiza el botón "Demo".
                  - Si previewUrl es una cadena vacía "" (como dejaste en los proyectos sin demo),
                    JavaScript lo considera "falso", y React no dibuja nada ahí.
                  No necesitas un if/else tradicional, este truco con && reemplaza eso
                  cuando solo te interesa el caso "si es verdadero, muestra esto". */}
              {selectedProject.previewUrl && (
                <a href={selectedProject.previewUrl} target="_blank" rel="noreferrer" className={styles.previewBtn}>
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};