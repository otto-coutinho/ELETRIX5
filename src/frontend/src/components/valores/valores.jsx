import React from "react";
import styles from "./styles.module.scss";

// assets
import Divisor from "../../assets/divisor.svg";

function Valores () {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <div className={styles.title}>
                <h1>SUSTENTABILIDADE</h1>
                <h1>FLEXIBILIDADE</h1>
                <h1>CONFIANÇA</h1>
            </div>
            <div className={styles.text}>
                <p>
                A <span className={styles.highlight}>ELETRIX</span> é uma empresa de engenharia especializada na instalação de carregadores veiculares.
                </p>
                <p><br /></p>
                <p>
                Nós desenvolvemos o alicerce da instalação e garantimos um serviço de alta qualidade para você.
                </p>
            </div>
            </div>
        </div>
    );
};

export default Valores;