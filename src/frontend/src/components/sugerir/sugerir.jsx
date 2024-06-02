import React, { useState } from "react";
import Switch from "react-switch";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Formulario.scss';

function Formulario() {
    const [checked, setChecked] = useState(false);
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefoneLocal, setTelefoneLocal] = useState('');
    const [telefoneResponsavel, setTelefoneResponsavel] = useState('');
    const [outrasInfos, setOutrasInfos] = useState('');

    const enviarSugestao = (e) => {
        e.preventDefault();

        if (!nome || !endereco || !telefoneLocal || !outrasInfos) {
            toast.error('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const templateParams = {
            nome,
            endereco,
            telefoneLocal,
            telefoneResponsavel,
            outrasInfos,
            estacionamento: checked ? 'Sim' : 'Não'
        };

        emailjs.send('service_jvzse4o', 'template_irp8jxb', templateParams, 'Tw8ngKBs_rBEXpZQ-')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success('Sugestão enviada com sucesso!');
                setNome('');
                setEndereco('');
                setTelefoneLocal('');
                setTelefoneResponsavel('');
                setOutrasInfos('');
                setChecked(false);
            }, (err) => {
                console.log('FAILED...', err);
                toast.error('Falha ao enviar sugestão, tente novamente.');
            });
    };

    return (
        <div className="formulario">
            <ToastContainer />
            <h1>Sugerir ponto de recarga</h1>
            <form onSubmit={enviarSugestao}>
                <div className="input-group">
                    <div className="column">
                        <input 
                            type="text" 
                            placeholder="Nome (Gerente, ADM, Sídico) *" 
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <input 
                            type="text" 
                            placeholder="Endereço do local *" 
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                        />
                        <input 
                            type="tel" 
                            placeholder="Telefone do local *" 
                            value={telefoneLocal}
                            onChange={(e) => setTelefoneLocal(e.target.value)}
                        />
                        <input 
                            type="tel" 
                            placeholder="Telefone responsável" 
                            value={telefoneResponsavel}
                            onChange={(e) => setTelefoneResponsavel(e.target.value)}
                        />
                    </div>
                    <div className="column">
                        <input 
                            type="text" 
                            placeholder="Outras informações *" 
                            className="inputzao"
                            value={outrasInfos}
                            onChange={(e) => setOutrasInfos(e.target.value)}
                        />
                        <label>
                            <p>Estacionamento gratuito</p>
                            <Switch 
                                checked={checked} 
                                onChange={setChecked} 
                                onColor="#00ADD3"
                                onHandleColor="#fff"
                                handleDiameter={20}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                height={25}
                                width={48}
                                padding={3}
                                className="react-switch"
                                id="material-switch"
                            />
                        </label>
                        <button type="submit">Enviar sugestão</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Formulario;