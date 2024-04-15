import React from "react";
import styles from "./styles.module.scss";

// Components
import Banner from "../../components/banner/banner";
import Navbar from "../../components/navbar/navbar";
import Valores from "../../components/valores/valores";
import Produtos from "../../components/produtos/produtos";
import Servicos from "../../components/servicos/servicos";

// Divider
import Divider from "../../components/divider/divider";

function Home () {
    return (
        <div className={styles.global}>
            <Navbar></Navbar>
            <Banner></Banner>
            <Valores></Valores>
            <Divider></Divider>
            <Produtos></Produtos>
            <Divider></Divider>
            <Servicos></Servicos>
        </div>
    );
};

export default Home;