import React from "react";
import styles from "./styles.module.scss";

// assets
import BannerImage from "../../assets/banner-image.png";

function Banner () {
    return (
        <div className={styles.container}>
            <img className={styles.banner} src={BannerImage} alt="Banner" />
            <div className={styles.content}>
                <h1 className={styles.title}>Título do Banner</h1>
                <h2 className={styles.subtitle}>Subtítulo do Banner</h2>
                <button className={styles.button}>Clique Aqui</button>
            </div>
        </div>
    );
};

export default Banner;
