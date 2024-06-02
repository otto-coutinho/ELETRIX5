import React from "react";
import styles from "./styles.module.scss";
import Instagram from "../../assets/instagram-blue.svg";
import Linkedlin from "../../assets/linkedin-blue.svg";
import WhatsApp from "../../assets/WhatsApp.svg";
import Email from "../../assets/email.svg";
import PlayStore from "../../assets/playstore.svg";
import AppStore from "../../assets/App-Store.svg";
import eletrix from "../../assets/eletrix.svg";
import retangulo from "../../assets/Rectangle.svg";
import Logo from "../../assets/logo-icon.svg";

function Footer() {
    const redirectToPlayStore = () => {
        window.location.href = "https://play.google.com/store/apps/details?id=com.coderbox.eletrix&hl=pt_BR&gl=US";
    };

    const redirectToAppStore = () => {
        window.location.href = "https://apps.apple.com/br/app/eletrix/id6444454547";
    }

    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleWhatsAppClick = () => {
        window.open("https://wa.me/5511919552120", "_blank");
    };
    
    return(
        <div className={styles.tudao}>
            <div className={styles.container}>
                <div className={styles.eletrix}>
                    <img src={eletrix} alt="eletrix" className={styles.eletrixLogo} />
                    <p>Carregando seu futuro</p>
                    <div className={styles.social}>
                        <p>Siga a ELETRIX</p>
                        <img src={retangulo} alt="retangulo" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={Linkedlin} alt="Linkedlin" />
                    </div>                
                </div>
                <div className={styles.navegue}>
                        <h1>NAVEGUE</h1>
                        <ul>
                            <li>Home</li>
                            <li>Serviços</li>
                            <li>Parceiros</li>
                            <li>Produtos</li>
                            <li>App</li>
                            <li>Sobre</li>
                            <li>Links</li>
                        </ul>
                </div>
                <div className={styles.contato}>
                    <h1>CONTATO</h1>
                    <div className={styles.WhatsApp}>
                        <img onClick={handleWhatsAppClick} src={WhatsApp} alt="WhatsApp" className={styles.whatslogo} />
                        <div>
                            <p>WhatsApp:</p>
                            <p>011-3222-4721</p>
                            <p>011-99976-7781</p>
                        </div>
                    </div>
                    <div className={styles.Email}>
                        <img src={Email} alt="Email" className={styles.emaillogo} />
                        <div>
                            <p>E-mail:</p>
                            <p>contato@eletrix5.com.br</p>
                        </div>
                    </div>
                </div>
                <div className={styles.app}>
                    <h1>BAIXE O APP ELETRIX</h1>
                    <div id="nosso-app" className={styles.imagesapp}>
                        <button className={styles.botaoplay} onClick={redirectToPlayStore}><img src={PlayStore} alt="PlayStore" className={styles.playlogo}/></button>
                        <button className={styles.botaoapp} onClick={redirectToAppStore}><img src={AppStore} alt="AppStore" className={styles.applogo} /></button>
                    </div>
                </div>
            </div>
            <div className={styles.licenca}>
                <div className={styles.politicas}>
                    <p>Política de Cookies |</p>
                    <p>Política de Privacidade |</p>
                    <p>Termos de uso</p>
                </div>
                <p className={styles.reservados}>© Todos os direitos reservados à Eletrix</p>
                <img onClick={() => scrollToElement('home')} src={Logo} alt="Logo" className={styles.logo} />
            </div>
        </div>
    )
}

export default Footer;