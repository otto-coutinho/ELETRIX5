import React from "react";
import './Vantagens.scss';
import rainho from "../../assets/rainho.svg";
import parceiros from "../../assets/parceiros.svg";

function Vantagens() {
    return (
        <div className="vantagens">
            <div className="titleprin">
                <h1>Vantagens de ser um parceiro</h1>
            </div>
            <div className="parceiroh2">
                <h2>O que é “ser um parceiro”?</h2>
            </div>
            <div className="content">
                <p>Ser parceiro conosco é primordialmente integrar nossa solução EletrixHub. Isso pode envolver desde indicar um local até disponibilizar um espaço para a instalação de um ponto de carregamento.</p>
            </div>
            <div className="boxes">
                <div className="boxe1">
                    <div className="fidelizacao">
                        <div className="flex">
                            <img src={rainho} alt="Rainho" />
                            <h1>Fidelização</h1>
                        </div>
                        <p>Destaque-se com um diferencial exclusivo que fortaleça uma base de clientes leais.</p>
                    </div>
                    <div className="retornofinanceiro">
                        <div className="flex"> 
                            <img src={rainho} alt="Rainho" />
                            <h1>Retorno Financeiro</h1>
                        </div>
                        <p>Participação no resultado financeiro das recargas realizadas no seu estabelecimento.</p>
                    </div>
                </div>
                <div className="boxe2">
                    <div className="imagemecologica">
                        <div className="flex">
                            <img src={rainho} alt="Rainho" />
                            <h1>Imagem Ecológica</h1>
                        </div>
                        <p>Pode ser uma estratégia de marketing para realçar a imagem verde do estabelecimento.</p>
                    </div>
                    <div className="destaque">
                        <div className="flex"> 
                            <img src={rainho} alt="Rainho" />
                            <h1>Destaque</h1>
                        </div>
                        <p>Seja um ponto de carregamento destacado em diferentes apps e mapas.</p>
                    </div>
                </div>
                <div className="parceiros">
                    <img className="parceiros-img" src={parceiros} alt="parceiros" />
                </div>
            </div>
        </div>
    );
}

export default Vantagens;
