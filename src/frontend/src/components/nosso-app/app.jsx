import React from "react";
import styles from "./styles.module.scss";
import IphoneLeft from "../../assets/iPhone-Left.svg";
import IphoneRight from "../../assets/Iphone-Right.png";

import Divisor from "../../assets/divisor.svg";

function NossoApp () {
    return (
        <div className={styles.container}>
            <h1 className={styles.nosso}>NOSSO APP</h1>
            <div className={styles.iphones}>
                <h1 className={styles.slogan}>Simples, Prático e Fácil.</h1>
                <div className={styles.iphone1}>
                    <h1 className={styles.iphlabe}>Encontre postos de carregamento ELETRIX próximos rapidamente!</h1>
                    <img src={IphoneRight} alt="Divisor" className={styles.IphoneRight}/>
                </div>
                <div className={styles.iphone2}>
                    <img src={IphoneLeft} alt="Divisor" className={styles.Iphoneleft}/>
                </div>
                <div className={styles.iphone3}>
                    <div className={styles.labelfim}>
                        <h1 className={styles.iphlabe3}>Com apenas alguns cliques, inicie a recarga, efetue o pagamento e desconecte o plugue.</h1>
                        <button className={styles.botao}>Baixe já o App!</button>
                    </div>
                    <div className={styles.iphonefim}>
                        <img src={IphoneRight} alt="Divisor" className={styles.IphoneRight}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NossoApp;
