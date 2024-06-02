import React from "react";
import styles from "./styles.module.scss";

// Assets
import WhatsApp from "../../assets/WhatsApp.svg";

function Contato() {
    const handleWhatsAppClick = () => {
        window.open("https://wa.me/5511919552120", "_blank");
    };
    return(
        <div id="contato" className={styles.container}>
            <div className={styles.title}>
                <h1>ENTRE EM CONTATO</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.call}>
                    <h2>VENHA SER UM ELETRIX</h2>
                    <p>Se interessou pelas nossas soluções? Entre em contato conosco e agende uma avaliação ou tire as suas dúvidas.</p>
                </div>
                <div className={styles.contact}>
                    <p>Fale com um especialista</p>
                    <button onClick={handleWhatsAppClick}>
                        <img src={WhatsApp} alt="" />
                        <p>Agendar avaliação</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contato;