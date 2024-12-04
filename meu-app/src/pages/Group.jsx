import React from "react";
import "./Group.css";

function Page() {
    return (
        <div className="page-container">
            {/* Seção Inicial com Imagem de Fundo e Nome do Grupo */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>GANESH</h1>
                    <p>Grupo extracurricular focado em segurança da informação</p>
                </div>
            </section>

            {/* Seção Sobre o Grupo */}
            <section className="about-section">
                <div className="about-content">
                    <h2>Sobre o Ganesh</h2>
                    <p>
                        O Ganesh é um grupo extracurricular da Universidade de São Paulo (USP), baseado em São Carlos. Temos
                        como nossa missão adquirir e divulgar conhecimentos na área de segurança da informação para estudantes de
                        graduação e para a comunidade geral.
                    </p>
                    <button className="btn saiba-mais-btn">SAIBA MAIS</button>
                </div>
            </section>

            {/* Seção Frentes de Estudo */}
            <section className="study-fronts">
                <div className="study-card">
                    <img src="imagem-do-ctf.jpg" alt="Frente de Estudo" />
                    <div className="study-text">
                        <h3>Frentes de Estudo</h3>
                        <p>
                            Nos organizamos em 5 frentes de estudo, sendo elas: Criptografia, Engenharia Reversa, Redes, Hardware
                            Hacking e Segurança Web. Cada uma delas desenvolve materiais tanto independentemente como em conjunto,
                            interfacendo as diferentes áreas.
                        </p>
                        <button className="btn ver-frentes-btn">VER FRENTES</button>
                    </div>
                </div>
            </section>

            {/* Seção Outras Atividades */}
            <section className="other-activities">
                <div className="activities-card">
                    <h3>Outras Atividades</h3>
                    <p>
                        O grupo constantemente estuda e desenvolve projetos e materiais referentes à área de Segurança da
                        Informação. Um dos nossos objetivos é desenvolver projetos e atividades que interagem com o público
                        externo, como o nosso canal do YouTube, o processo anual de ingressos e participações em competições de
                        área de Segurança da Informação - Capture The Flag (CTF).
                    </p>
                    <button className="btn ver-atividades-btn">VER ATIVIDADES</button>
                </div>
            </section>

            {/* Rodapé */}
            <footer className="footer">
                <p>Conheça mais sobre o nosso grupo acessando nossas Redes Sociais!</p>
                <button className="btn ver-gitbook-btn">Instagram</button>
            </footer>
        </div>
    );
}

export default Page;
