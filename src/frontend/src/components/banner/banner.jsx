import React from "react";
import styles from "./styles.module.scss";

// assets
import BannerImage from "../../assets/banner-image.png";
import Eletrix from "../../assets/eletrix.svg";

function Banner(){ 
const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};
    return (
        <div id="home" className={styles.container}>
            <img className={styles.banner} src={BannerImage} alt="Banner" />
            <div className={styles.content}>
                <img className={styles.eletriximg} src={Eletrix} alt="Eletrix" />
                <h2 className={styles.subtitle}>CARREGANDO SEU FUTURO</h2>
                <button className={styles.button} onClick={() => scrollToElement('solucoes')}>Encontre a solução que você procura!</button>
                <p className={styles.labelfim}>Oferecemos soluções completas para carregamento de veículos elétricos: rede de recarga, infraestrutura, instalação, gestão e manutenção, atendendo espaços comerciais e residenciais.</p>
            </div>
        </div>
    );
}

export default Banner;
