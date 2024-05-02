import React from "react";
import styles from './styles.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

//assets

function Perguntas() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Perguntas Frequentes</h1>
            </div>
            <div className={styles.boxes}>
                <div className={"swip"}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className={styles.box}>
                                <div>
                                <h3>Carregador tarifado</h3>
                                    <h2>Como faço para solicitar um orçamento?</h2>
                                    <p>Para solicitar um orçamento, basta preencher o formulário de contato disponível em nosso site. Em seguida, nossa equipe entrará em contato para entender melhor suas necessidades e te passar um orçamento personalizado.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.box}>
                                <div>
                                <h3>Carregador tarifado</h3>
                                    <h2>Como faço para solicitar um orçamento?</h2>
                                    <p>Para solicitar um orçamento, basta preencher o formulário de contato disponível em nosso site. Em seguida, nossa equipe entrará em contato para entender melhor suas necessidades e te passar um orçamento personalizado.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.box}>
                                <div>
                                <h3>Carregador tarifado</h3>
                                    <h2>Como faço para solicitar um orçamento?</h2>
                                    <p>Para solicitar um orçamento, basta preencher o formulário de contato disponível em nosso site. Em seguida, nossa equipe entrará em contato para entender melhor suas necessidades e te passar um orçamento personalizado.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={"swip"}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className={styles.box}>
                                <div>
                                <h3>Carregador tarifado</h3>
                                    <h2>Como faço para solicitar um orçamento?</h2>
                                    <p>Para solicitar um orçamento, basta preencher o formulário de contato disponível em nosso site. Em seguida, nossa equipe entrará em contato para entender melhor suas necessidades e te passar um orçamento personalizado.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.box}>
                                <div>
                                <h3>Carregador tarifado</h3>
                                    <h2>Como faço para solicitar um orçamento?</h2>
                                    <p>Para solicitar um orçamento, basta preencher o formulário de contato disponível em nosso site. Em seguida, nossa equipe entrará em contato para entender melhor suas necessidades e te passar um orçamento personalizado.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.box}>
                                <div>
                                <h3>Carregador tarifado</h3>
                                    <h2>Como faço para solicitar um orçamento?</h2>
                                    <p>Para solicitar um orçamento, basta preencher o formulário de contato disponível em nosso site. Em seguida, nossa equipe entrará em contato para entender melhor suas necessidades e te passar um orçamento personalizado.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={"swip"}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className={styles.box}>
                                <div>
                                <h3>Carregador tarifado</h3>
                                    <h2>Como faço para solicitar um orçamento?</h2>
                                    <p>Para solicitar um orçamento, basta preencher o formulário de contato disponível em nosso site. Em seguida, nossa equipe entrará em contato para entender melhor suas necessidades e te passar um orçamento personalizado.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.box}>
                                <div>
                                <h3>Carregador tarifado</h3>
                                    <h2>Como faço para solicitar um orçamento?</h2>
                                    <p>Para solicitar um orçamento, basta preencher o formulário de contato disponível em nosso site. Em seguida, nossa equipe entrará em contato para entender melhor suas necessidades e te passar um orçamento personalizado.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.box}>
                                <div>
                                <h3>Carregador tarifado</h3>
                                    <h2>Como faço para solicitar um orçamento?</h2>
                                    <p>Para solicitar um orçamento, basta preencher o formulário de contato disponível em nosso site. Em seguida, nossa equipe entrará em contato para entender melhor suas necessidades e te passar um orçamento personalizado.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Perguntas;