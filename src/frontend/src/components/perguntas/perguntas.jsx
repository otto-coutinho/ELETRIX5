import React from "react";
import styles from './styles.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Pergunta from '../../assets/pergunta.svg';

function Perguntas() {
    return (
        <div id="perguntas" className={styles.container}>
            <div className={styles.title}>
                <h1>Perguntas Frequentes</h1>
            </div>
            <div className={styles.boxes}>
                <div className={styles.swip}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={true}
                        modules={[Navigation]}
                        className={styles.carousel}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className={styles.box}>
                                <div>
                                    <h3>Geral</h3>
                                    <h2>Como faço para solicitar um orçamento?</h2>
                                    <p>Para solicitar um orçamento, basta preencher o formulário de contato disponível em nosso site. Em seguida, nossa equipe entrará em contato para entender melhor suas necessidades e te passar um orçamento personalizado.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.box}>
                                <div>
                                    <h3>Geral</h3>
                                    <h2>Como faço para solicitar um orçamento?</h2>
                                    <p>Para solicitar um orçamento, basta preencher o formulário de contato disponível em nosso site. Em seguida, nossa equipe entrará em contato para entender melhor suas necessidades e te passar um orçamento personalizado.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.box}>
                                <div>
                                    <h3>Geral</h3>
                                    <h2>Como faço para solicitar um orçamento?</h2>
                                    <p>Para solicitar um orçamento, basta preencher o formulário de contato disponível em nosso site. Em seguida, nossa equipe entrará em contato para entender melhor suas necessidades e te passar um orçamento personalizado.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={styles.swip}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={true}
                        modules={[Navigation]}
                        className={styles.carousel}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className={styles.box2}>
                                <div>
                                    <h3>App</h3>
                                    <div className={styles.label}>
                                        <h2>Tem como filtrar por pontos de recarga mais próximos de mim?</h2>
                                        <p>App</p>
                                    </div>
                                    <p>Sim! Ao baixar o App, aparecerá um botão escrito “Estações mais próximas”. Basta dar um clique que você filtra os 5 postos de recarga Eletrix mais próximos de você</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.box2}>
                                <div>
                                    <h3>App</h3>
                                    <div className={styles.label}>
                                        <h2>Tem como filtrar por pontos de recarga mais próximos de mim?</h2>
                                        <p>App</p>
                                    </div>
                                    <p>Sim! Ao baixar o App, aparecerá um botão escrito “Estações mais próximas”. Basta dar um clique que você filtra os 5 postos de recarga Eletrix mais próximos de você</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.box2}>
                                <div>
                                    <h3>App</h3>
                                    <div className={styles.label}>
                                        <h2>Tem como filtrar por pontos de recarga mais próximos de mim?</h2>
                                        <p>App</p>
                                    </div>
                                    <p>Sim! Ao baixar o App, aparecerá um botão escrito “Estações mais próximas”. Basta dar um clique que você filtra os 5 postos de recarga Eletrix mais próximos de você</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className={styles.pai}> 
                <div className={styles.filho1}>
                    <div className={styles.input1}>
                        <h1>Envie a sua pergunta:</h1>
                        <input type="text" placeholder="Escreva aqui a sua pergunta*" />
                    </div>
                    <div className={styles.input2}>
                        <input type="text" placeholder="Insira seu endereço de email*" />
                        <button className={styles.butao}>Enviar pergunta</button>
                    </div>
                </div>
                <div className={styles.filho2}>
                    <img src={Pergunta} alt="Pergunta" />
                </div>
            </div>
        </div>
    );
}

export default Perguntas;
