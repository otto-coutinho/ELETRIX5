import React from "react";
import './Vantagens.scss';

function Vantagens() {
    return (
        <div className="vantagens">
            <h1>Vantagens de ser um parceiro</h1>
            <div className="content">
                <h2>O que é ser um parceiro?</h2>
                <p>Ser parceiro conosco é primordialmente integrar nossa solução EletrixHub. Isso pode envolver desde indicar um local até disponibilizar um espaço para a instalação de um ponto de carregamento.</p>
            </div>
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
