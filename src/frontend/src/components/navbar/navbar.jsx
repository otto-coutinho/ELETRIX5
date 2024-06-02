import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/logo-icon.svg";
import Buttonapp from "../../assets/buttonapp.svg";

function Navbar() {
    const [navbarStyle, setNavbarStyle] = useState(styles.transparent);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setNavbarStyle(styles.scrolled);
        } else {
            setNavbarStyle(styles.transparent);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={`${styles.container} ${navbarStyle}`}>
            <img onClick={() => scrollToElement('home')} className={styles.logo} src={Logo} alt="Logo" />
            <div className={`${styles.links} ${menuOpen ? styles.show : ""}`}>
                <a onClick={() => scrollToElement('home')}>Home</a>
                <a onClick={() => scrollToElement('valores')}>Valores</a>
                <a onClick={() => scrollToElement('produto')}>Produto</a>
                <a onClick={() => scrollToElement('solucoes')}>Soluções</a>
                <a onClick={() => scrollToElement('perguntas')}>Perguntas</a>
                <a onClick={() => scrollToElement('contato')}>Contato</a>
                <button className={styles.appButton} type="button" onClick={() => scrollToElement('nosso-app')}><img src={Buttonapp} alt="buttonapp" /></button>
            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Navbar;
