import React from "react";
import styles from "./styles.module.scss";
import Baneresg from "../../assets/baneresg.svg";

// assets
import Divisor from "../../assets/divisor.svg";

function Valores () {
    return (
    <div id="valores" className={styles.main}>
        <h1 className={styles.labelprin}>Valores</h1>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>SUSTENTABILIDADE</h1>
                    <h1>FLEXIBILIDADE</h1>
                    <h1>CONFIANÇA</h1>
                </div>
                <div className={styles.text}>
                    <p className={styles.text1}>Na ELETRIX, nos dedicamos a revolucionar a infraestrutura do Brasil e a simplificar a experiência de recarga para nossos clientes.</p>
                    <p><br /></p>
                    <p className={styles.text2}>Com um compromisso firme com a sustentabilidade, nossas soluções combinam tecnologia avançada e práticas ecoeficientes, assegurando um serviço de alta qualidade e confiabilidade.</p>
                </div>
            </div>
        </div>
        <div className={styles.banneresg}>
            <img className={styles.logoesg} src={Baneresg} alt="Baneresg" />
        </div>
    </div>
    );
};

export default Valores;
