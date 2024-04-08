import React from "react";
import styles from "./styles.module.scss";

// assets
import Charger from "../../assets/estacao-recarga.svg";

function Produtos () {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Produto</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>VENDA DE CARREGADOR</h1>
                    <p>
                    Adquira já seu carregador confiável de  3,6kW, 7kW, 11kW e 22kW: segurança e
                    durabilidade para seu veículo. Escolha a qualidade que faz a diferença.
                    </p>
                    <p>
                        Se interessou? Entre em contato <a href="">aqui</a>
                    </p>
                </div>
                <div className={styles.image}>
                    <img className={styles.picture} src={Charger} alt="Carregador" />
                </div>
            </div>
        </div>
    );
};

export default Produtos;