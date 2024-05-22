import React from "react";
import styles from "./styles.module.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

//assets
import Imagem_um from "../../assets/image-1.svg";

function Servicos() {
  return (
    <div className={styles.servicos}>
      <div className={styles.title}>
        <h1>Soluções</h1>
      </div>
      <div className={styles.session}>
        <div className={styles.content}>
            <h1>EletrixHome</h1>
            <h2>Instalação de carregadores</h2>
            <p>
            EletrixHome oferece instalação profissional e segura de carregadores de carros elétricos. Escolha adquirir o equipamento conosco ou utilizar um de sua preferência, garantindo uma integração segura e eficiente com a infraestrutura elétrica existente em sua propriedade.
            </p>
            <button className={styles.button}>Realizar cotação de serviço</button>
        </div>
        <div className={styles.carousel}>
        <Swiper
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={Imagem_um} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Imagem_um} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Imagem_um} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Imagem_um} alt="" /></SwiperSlide>
    </Swiper>
        </div>
      </div>
      <div className={styles.session}>
      <div className={styles.carousel}>
        <Swiper className={styles.swiper_two}
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={Imagem_um} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Imagem_um} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Imagem_um} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Imagem_um} alt="" /></SwiperSlide>
    </Swiper>
        </div>
        <div className={styles.content}>
            <h1>EletrixInfra</h1>
            <h2>Instalação de fraestrutura seca</h2>
            <p>
            EletrixInfra oferece serviços essenciais para locais que preveem a crescente adoção de veículos elétricos. Desenvolvemos a infraestrutura elétrica necessária, evitando altos custos futuros em instalações e facilitando significativamente esses processos. Com EletrixInfra, seu ambiente estará pronto para instalar carregadores em diversas vagas, acompanhando de forma eficiente esta tendência ascendente no mercado de veículos elétricos.
            </p>
            <button className={styles.button}>Realizar cotação de serviço</button>
        </div>
      </div>
      <div className={styles.session}>
        <div className={styles.content}>
            <h1>EletrixHub</h1>
            <h2>Carregadores tarifados</h2>
            <p>
            O EletrixHub especializa-se na instalação e gestão de carregadores públicos tarifados, interligados ao nosso aplicativo. Projetado para espaços abertos ao público, nosso serviço inclui fornecimento de carregadores e compensação mensal dos custos de energia ao estabelecimento, com opções personalizadas para atender às diversas necessidades de gestão e tarifação.
            </p>
            <button className={styles.button}>Realizar cotação de serviço</button>
        </div>
        <div className={styles.carousel}>
        <Swiper
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={Imagem_um} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Imagem_um} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Imagem_um} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Imagem_um} alt="" /></SwiperSlide>
    </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Servicos;
