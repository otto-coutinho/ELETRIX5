import React from "react";
import styles from './styles.module.scss';

// assets
import ChargerImage from "../../assets/estacao-recarga.svg";

function Produto() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Produto</h1>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h2>Venda de carregador</h2>
                    <p>
                    Adquira já seu carregador confiável de 3,6kW, 7kW, 11kW e 22kW: segurança e durabilidade para seu veículo. Escolha a qualidade que faz a diferença.
                    </p>
                    <p>Se interessou? Entre em contato <a href="#">aqui</a></p>
                </div>
                <div className={styles.image}>
                    <img src={ChargerImage} alt="Carregador" />
                </div>
            </div>
        </div>
    );
}

export default Produto;
