import React from "react";
import styles from './styles.module.scss';

// assets
import ChargerImage from "../../assets/estacao-recarga.svg";

function Produto() {
    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };    
    return (
        <div id="produto" className={styles.container}>
            <h1 className={styles.title}>Produto</h1>
            <div className={styles.content}>
                <div className={styles.text}>
                    <div className={styles.divcaraio}>
                        <h2 className={styles.carregador}>Venda de carregador</h2>
                    </div>
                    <p className={styles.caraio2}>
                        Adquira já seu carregador confiável de 3,6kW, 7kW, 11kW e 22kW: segurança e durabilidade para seu veículo. Escolha a qualidade que faz a diferença.
                    </p>
                    <p className={styles.caraio}>Se interessou? Entre em contato <a onClick={() => scrollToElement('contato')}>clique aqui</a></p>
                </div>
                <div className={styles.image}>
                    <img src={ChargerImage} alt="Carregador" />
                </div>
            </div>
        </div>
    );
}

export default Produto;
