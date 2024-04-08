import React from "react";
import styles from "./styles.module.scss";

// assets
import BannerImage from "../../assets/banner-image.png";

function Banner () {
    return (
        <div className={styles.container}>
            <img className={styles.banner} src={BannerImage} alt="" />
        </div>
    );
};

export default Banner;
