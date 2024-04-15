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
        <h1>Serviços</h1>
      </div>
      <div className={styles.session}>
        <div className={styles.content}>
            <h1>INSTALAÇÃO DE CARREGADORES PRIVADOS</h1>
            <p>
            Além de oferecer carregadores de alta qualidade, garantimos a instalação segura dos equipamentos em sua residência, incluindo dispositivos de outras marcas.
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
        <div className={styles.content}>
            <h1>INSTALAÇÃO DE CARREGADORES PRIVADOS</h1>
            <p>
            Além de oferecer carregadores de alta qualidade, garantimos a instalação segura dos equipamentos em sua residência, incluindo dispositivos de outras marcas.
            </p>
            <button className={styles.button}>Realizar cotação de serviço</button>
        </div>
      </div>
    </div>
  );
}

export default Servicos;
