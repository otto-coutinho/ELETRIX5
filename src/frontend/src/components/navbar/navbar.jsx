import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

// assets
import Logo from "../../assets/logo-icon.svg";

function Navbar () {
    const [navbarStyle, setNavbarStyle] = useState(styles.transparent);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setNavbarStyle(styles.scrolled);
        } else {
            setNavbarStyle(styles.transparent);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.container} ${navbarStyle}`}>
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
