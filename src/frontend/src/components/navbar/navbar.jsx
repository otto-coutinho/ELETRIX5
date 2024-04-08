import React from "react";
import styles from "./styles.module.scss";

// assets
import Logo from "../../assets/logo-icon.svg";

function Navbar () {

    const handleScroll = () => {
        const navbar = document.querySelector(`.${styles.container}`);
        if (window.scrollY > 0) {
            navbar.classList.add(styles.scrolled);
        } else {
            navbar.classList.remove(styles.scrolled);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={Logo} alt="Logo" />
            <div className={styles.links}>
                <a href="/">Home</a>
                {/* <a href="/">Sobre</a> */}
                <a href="/">Produto</a>
                <a href="/">Serviços</a>
                {/* <a href="/">Vantagens</a> */}
                <a href="/">Perguntas</a>
                <a href="/">Contato</a>
                <button className={styles.appButton} type="button">Baixe o App!</button>
            </div>
        </div>
    );
};

export default Navbar;