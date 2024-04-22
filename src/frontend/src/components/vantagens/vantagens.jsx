import React from "react";
import './Vantagens.scss';

function Vantagens() {
    return (
        <div className="vantagens">
            <h1>Vantagens de ser um parceiro</h1>
            <div className="boxes">
                <div className="box">
                    <h2>Destaque</h2>
                    <p>Seja um ponto de carregamento destacado em diferentes apps e mapas.</p>
                </div>
                <div className="box">
                    <h2>Fidelização</h2>
                    <p>Destaque-se da concorrência, oferecendo um diferencial exclusivo.</p>
                </div>
                <div className="box">
                    <h2>Retorno financeiro</h2>
                    <p>Participação no resultado financeiro das recargas realizadas no seu estabelecimento.</p>
                </div>
            </div>
        </div>
    );
}

export default Vantagens;
