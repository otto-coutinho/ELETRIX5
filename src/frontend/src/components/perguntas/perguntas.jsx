import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.scss';
import Pergunta from '../../assets/pergunta.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

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
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
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
                                    <h2>A ELETRIX apenas vende carregadores?</h2>
                                    <p>Não, além de vender carregadores de alta qualidade, a ELETRIX oferece instalação, manutenção, e projetos de infraestrutura. Destacamos nosso serviço de instalação de carregadores tarifados com app, ideal para estacionamentos. Descubra todos os nossos serviços!
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.box}>
                                <div>
                                    <h3>Eletrix Home</h3>
                                    <h2>A ELETRIX realiza manutenção após a venda?
                                    </h2>
                                    <p>Se identificado algum defeito decorrente da instalação ou de fábrica, a empresa se compromete a realizar todos os reparos necessários para garantir o funcionamento do equipamento.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.box}>
                                <div>
                                    <h3>EletrixHub</h3>
                                    <h2>Quem é responsável pela manutenção e eventuais danos ao carregador?
                                    </h2>
                                    <p>A ELETRIX é integralmente responsável pela manutenção e por quaisquer danos relacionados aos carregadores. Nestes casos, a empresa garante a reparação ou substituição do equipamento, assegurando a continuidade e a qualidade do serviço oferecido.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.box}>
                                <div>
                                    <h3>EletrixHub</h3>
                                    <h2>Quem arca com o custo da energia utilizada pelo carregador tarifado?
                                    </h2>
                                    <p>A ELETRIX assume o custo total da energia consumida pelos carregadores tarifados mensalmente. O consumo é monitorado por um sistema proprietário e repassado à empresa, sem custos adicionais ao local.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.box}>
                                <div>
                                    <h3>Geral</h3>
                                    <h2>Quero um carregador tarifado ELETRIX no meu estabelecimento. O que devo fazer?
                                    </h2>
                                    <p>Basta o seu estabelecimento ser aberto ao público. Assim, avaliamos o local e, se adequado, cuidaremos da instalação do carregador dentro de uma semana após assinatura do contrato, sem custos para o equipamento ou instalação.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
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
    