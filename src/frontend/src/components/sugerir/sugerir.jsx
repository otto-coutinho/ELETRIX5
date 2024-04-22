import React, { useState } from "react";
import Switch from "react-switch";
import './Formulario.scss';

function Formulario() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="formulario">
            <h1>Sugerir ponto de recarga</h1>
            <div className="input-group">
                <div className="column">
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="Endereço" />
                    <input type="tel" placeholder="Telefone do local" />
                    <input type="tel" placeholder="Telefone pessoal" />
                </div>
                <div className="column">
                    <input type="text" placeholder="Mais informações"></input>
                    <label>
                        <span>Estacionamento gratuito</span>
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
                            height={20}
                            width={48}
                            padding={3}
                            className="react-switch"
                            id="material-switch"
                        />
                    </label>
                    <button type="submit">Enviar</button>
                </div>
            </div>
        </div>
    );
}

export default Formulario;
