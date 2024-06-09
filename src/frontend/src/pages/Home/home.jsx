import React from "react";
import styles from "./styles.module.scss";

// Assets
import WhatsApp from "../../assets/whatsapp-green.svg";

// Components
import Banner from "../../components/banner/banner";
import Navbar from "../../components/navbar/navbar";
import Valores from "../../components/valores/valores";
import Produtos from "../../components/produtos/produtos";
import Servicos from "../../components/servicos/servicos";
import Formulario from "../../components/sugerir/sugerir";
import Vantagens from "../../components/vantagens/vantagens";
import Perguntas from "../../components/perguntas/perguntas";
import Contato from "../../components/contato/contato";
import Footer from "../../components/footer/footer";
import NossoApp from "../../components/nosso-app/app";
// import BannerMobile from "../../components/banner-mobile/mobile-banner"

// Divider
import Divider from "../../components/divider/divider";

function Home () {
    return (
        <div className={styles.global}>
            <a href="https://wa.me/5511919552120" className={styles.whatsapp} target="_blank"><img src={WhatsApp} alt="WhatsApp" /></a>
            <Navbar></Navbar>
            <Banner className={styles.banner_desktop}></Banner>
            {/* <BannerMobile className={styles.banner_mobile}></BannerMobile> */}
            <Divider></Divider>
            <Valores></Valores>
            <Divider></Divider>
            <Produtos></Produtos>
            <Divider></Divider>
            <Servicos></Servicos>
            <Formulario></Formulario>
            <Divider></Divider>
            <Vantagens></Vantagens>
            <Divider></Divider>
            <Perguntas></Perguntas>
            <Divider></Divider>
            <NossoApp></NossoApp>
            <Divider></Divider>
            <Contato></Contato>
            <Footer></Footer>
        </div>
    );
};

export default Home;