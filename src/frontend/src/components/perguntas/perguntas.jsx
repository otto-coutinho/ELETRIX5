import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Pergunta from '../../assets/pergunta.svg';



function Perguntas() {
    const [question, setQuestion] = useState('');
    const [email, setEmail] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        
        if (!question || !email) {
            toast.error('Por favor, preencha todos os campos.');
            return;
        }

        const templateParams = {
            question,
            email,
        };

        emailjs.send('service_jvzse4o', 'template_irp8jxb', templateParams, 'Tw8ngKBs_rBEXpZQ-')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success('Pergunta enviada com sucesso!');
                setQuestion('');
                setEmail('');
            }, (err) => {
                console.log('FAILED...', err);
                toast.error('Falha ao enviar pergunta, tente novamente.');
            });
    };

    return (
        <div id="perguntas" className={styles.container}>
            <ToastContainer />
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
                        {/* Repita os SwiperSlide conforme necessário */}
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
                        {/* Repita os SwiperSlide conforme necessário */}
                    </Swiper>
                </div>
            </div>
            <div className={styles.pai}> 
                <div className={styles.filho1}>
                    <form onSubmit={sendEmail}>
                        <div className={styles.input1}>
                            <h1>Envie a sua pergunta:</h1>
                            <input 
                                type="text" 
                                placeholder="Escreva aqui a sua pergunta*" 
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                            />
                        </div>
                        <div className={styles.input2}>
                            <input 
                                type="text" 
                                placeholder="Insira seu endereço de email*" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit" className={styles.butao}>Enviar pergunta</button>
                        </div>
                    </form>
                </div>
                <div className={styles.filho2}>
                    <img src={Pergunta} alt="Pergunta" />
                </div>
            </div>
        </div>
    );
}

export default Perguntas;