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
                    <input type="text" placeholder="Nome (Gerente, ADM, Sídico) *." />
                    <input type="text" placeholder="Endereço do local *" />
                    <input type="tel" placeholder="Telefone do local *" />
                    <input type="tel" placeholder="Telefone responsável" />
                </div>
                <div className="column">
                    <input type="text" placeholder="Outras informações *" className="inputzao"></input>
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
        </div>
    );
}

export default Formulario;
