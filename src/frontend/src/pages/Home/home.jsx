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
import Parceiros from "../../components/parceiros/parceiros";

// Divider
import Divider from "../../components/divider/divider";

function Home () {
    return (
        <div className={styles.global}>
            <a href="https://wa.me/5511919552120" className={styles.whatsapp} target="_blank"><img src={WhatsApp} alt="WhatsApp" /></a>
            <Navbar></Navbar>
            <Banner></Banner>
            <Valores></Valores>
            <Divider></Divider>
            <Produtos></Produtos>
            <Divider></Divider>
            <Servicos></Servicos>
            <Formulario></Formulario>
            <Divider></Divider>
            <Vantagens></Vantagens>
            <Divider></Divider>
            <Parceiros></Parceiros>
        </div>
    );
};

export default Home;