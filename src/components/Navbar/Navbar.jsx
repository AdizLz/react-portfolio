import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

const sections = [
    { id: "about", label: "Acerca de mi" },
    { id: "experience", label: "Experiencia" },
    { id: "skill", label: "Skill" },
    { id: "projects", label: "Proyectos" },
    { id: "contacts", label: "Contacto" },
];

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
    const handleScroll = () => {
        const offset = 150;

        // Si llegamos al final de la página, fuerza la última sección
        const scrolledToBottom =
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

        if (scrolledToBottom) {
            setActiveSection(sections[sections.length - 1].id);
            return;
        }

        let current = "";

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) {
                const top = el.getBoundingClientRect().top;
                if (top <= offset) {
                    current = id;
                }
            }
        });

        setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
}, []);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="#">Asenet.dev</a>
            <div className={styles.menu}>
                <FaBars
                    className={styles.menuBtn}
                    onClick={() => setMenuOpen(!menuOpen)}
                />

                <ul
                    className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
                >
                    {menuOpen && (
                        <FaTimes
                            className={styles.closeBtn}
                            onClick={() => setMenuOpen(false)}
                        />
                    )}
                    {sections.map(({ id, label }) => (
                        <li key={id}>
                            {}
                            <a 
                                href={`#${id}`} 
                                className={activeSection === id ? styles.active : ""} 
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

