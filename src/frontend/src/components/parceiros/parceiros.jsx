import React from "react";
import './Carrossel.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

//assets
import Parceiro_um from "../../assets/partner-1.svg";
import Parceiro_dois from "../../assets/partner-2.svg";
import Parceiro_tres from "../../assets/partner-3.svg";
import Parceiro_quatro from "../../assets/partner-4.svg";

function Carrossel() {
    return (
        <div className="carrossel">
            <h1>Conheça quem nos apoia</h1>
            <div className="swip">
            <Swiper spaceBetween={20}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide><img src={Parceiro_um} alt="Imagem 1" /></SwiperSlide>
                <SwiperSlide><img src={Parceiro_dois} alt="Imagem 2" /></SwiperSlide>
                <SwiperSlide><img src={Parceiro_tres} alt="Imagem 3" /></SwiperSlide>
                <SwiperSlide><img src={Parceiro_quatro} alt="Imagem 4" /></SwiperSlide>
            </Swiper>
            </div>
        </div>
    );
}

export default Carrossel;
