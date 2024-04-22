import React from "react";
import styles from "./styles.module.scss";

// assets
import BannerImage from "../../assets/banner-image.png";
import Eletrix from "../../assets/eletrix.svg";

function Banner () {
    return (
        <div className={styles.container}>
            <img className={styles.banner} src={BannerImage} alt="Banner" />
            <div className={styles.content}>
                <img src={Eletrix} alt="Eletrix" />
                <h2 className={styles.subtitle}>CARREGANDO SEU FUTURO</h2>
                <button className={styles.button}>Encontre a solução que você procura!</button>
            </div>
        </div>
    );
};

export default Banner;
