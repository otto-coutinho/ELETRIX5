import React from "react";
import styles from "./styles.module.scss";
import Iphoneum from "../../assets/iPhoneum.svg";
import Iphonedois from "../../assets/iPhonedois.svg";
import Iphonetres from "../../assets/iPhonetres.svg";
import Divisor from "../../assets/divisor.svg";

function NossoApp() {
    return (
        <div>
            <div className={styles.labelsecun}>
                <h2>Nosso App</h2>
            </div>
            <div className={styles.labelum}>
                <h1>Simples, Prático e Fácil.</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.esquerda}>
                    <h1 className={styles.h1prin}>Encontre postos de carregamento ELETRIX próximos rapidamente!</h1>
                    <div className={styles.imageContainer}>
                        <img src={Iphonedois} alt="Iphone" className={styles.Iphonedois} />
                    </div>
                    <h1 className={styles.h1secun}>Com apenas <span className={styles.highlight}>alguns cliques</span>, inicie a recarga, efetue o pagamento e desconecte o plugue.</h1>
                    <button>Baixe já o App!</button>
                </div>
                <div className={styles.direita}>
                    <div className={styles.Imgdois}><img src={Iphoneum} alt="Iphone" className={styles.Iphoneum} /></div>
                    <div className={styles.Imgtres}><img src={Iphonetres} alt="Iphone" className={styles.Iphonetres} /></div>
                </div>
            </div>
        </div>
    );
}

export default NossoApp;
