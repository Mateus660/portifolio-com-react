import React from "react";
import avatar from "./img/Default_Create_a_vibrant_2D_digital_illustration_of_a_confiden_0 (1).jpg"
import javascript from "./img/png-javvascript.png"
import react from "./img/png-react.png"
import jquery  from "./img/png-jquery-removebg-preview.png"
import html from "./img/png-html.png"
import css from "./img/css-logo.png"
import sql from "./img/logo-sql.png"
import relogio from "./img/relógio-digital.png"
import climatempo from "./img/climatempo.png"
import tarefas from "./img/organizador-de-tarefas.png"
import gerador from "./img/gerador-de-senhas.png"

function Portifolio() {
    return (
        <div className="container">
            <div id="avatar">
                <img src={avatar} alt="meu avatar" srcset="meu avatar" id="personagem"/>
                <div className="texto">
                    <h1>Mateus Emanuel</h1>
                    <p>Possuo conhecimentos em : </p>
                    <div id="logos">
                        <img src={javascript} alt="logo javascript" srcset="logo javscript" height={100} width={100}/>
                        <img src={react} alt="logo react" srcset="logo react" height={100} width={100}/>
                        <img src={jquery} alt="logo jquery" srcset="logo jquery" height={100} width={130}/>
                        <img src= {html} alt="" srcset="" height={120} width={120}/>
                        <img src={css} alt="logo css" srcset="logo css" height={120} width={130}/>
                        <img src={sql} alt="logo css" srcset="logo css" height={100} width={100}/>
                    </div>
                </div>
            </div>
            <div id="meus-projetos"> 
                   <div className="projetos">
                    <h1>Relógio Digital</h1>
                    <img src={relogio} alt="" srcset="" />
                   <p>Este projeto apresenta um relógio digital interativo, desenvolvido utilizando as tecnologias HTML5, CSS3 e JavaScript. Ele exibe horas, minutos e segundos em tempo real, atualizados a cada segundo. O design é minimalista e responsivo, com uso de CSS3 para estilização moderna e JavaScript para a lógica de exibição do tempo. Este relógio digital é um ótimo exemplo de como integrar front-end e lógica de programação para criar componentes funcionais e esteticamente agradáveis na web</p> <a href="https://mateus660.github.io/relogio-digital/" target="_blank">Clique aqui para acessar o projeto</a>
                   </div>

                   <div className="projetos">
                    <h1>Site Climatempo</h1>
                    <img src={climatempo} alt="site climatempo" srcset="site climatempo" />
                    <p>Desenvolvi este projeto como uma solução prática para consultar as condições climáticas em qualquer lugar do mundo em tempo real. Utilizando HTML, CSS e JavaScript, criei um site que permite ao usuário pesquisar e visualizar dados meteorológicos atualizados, como temperatura, umidade, e condições gerais, diretamente na interface. O projeto se integra a uma API de clima global, demonstrando meu conhecimento em manipulação de APIs, responsividade e dinamismo no front-end. Este projeto reflete minha habilidade em criar aplicações úteis e interativas, com um design simples e eficiente.</p> <a href="https://mateus660.github.io/Climatempo/" target="_blank">Clique aqui para acessar o projeto</a>
                   </div>

                   <div className="projetos">
                    <h1>Organizador de Tarefas</h1>
                    <img src={tarefas} alt="site climatempo" srcset="site climatempo" />
                    <p>Desenvolvido um Organizador de Tarefas com funcionalidades de login e cadastro, utilizando JavaScript, jQuery, HTML e CSS. Após o login, os usuários podem adicionar tarefas em uma interface dedicada. As tarefas são exibidas em uma tela separada, onde podem ser visualizadas e excluídas conforme necessário, proporcionando uma experiência prática e intuitiva.</p>  <a href="https://mateus660.github.io/Organizador_de_tarefas/HTML/login.html" target="_blank">Clique aqui para acessar o projeto no github</a><a href="https://mateus660.github.io/Climatempo/" target="_blank"> <br />Clique aqui para acessar o projeto</a>
                   </div>

                   <div className="projetos">
                    <h1>Gerador de senhas automático</h1>
                    <img src={gerador} alt="site climatempo" srcset="site climatempo" />
                    <p>Este projeto foi desenvolvido utilizando JavaScript, HTML e CSS, com o objetivo de oferecer uma ferramenta eficiente e fácil de usar para a criação de senhas seguras. O Gerador de Senhas Automático permite que os usuários escolham entre diferentes tipos de caracteres, como letras maiúsculas, minúsculas, números e símbolos, para criar senhas personalizadas de forma rápida. O projeto foi pensado para oferecer praticidade e segurança, além de ser totalmente responsivo, adaptando-se a diferentes dispositivos e tamanhos de tela.</p> <a href="https://mateus660.github.io/gerador-de-senha/" target="_blank">Clique aqui para acessar o projeto</a>  <a href="https://mateus660.github.io/Organizador_de_tarefas/HTML/login.html" target="_blank">Clique aqui para acessar o projeto no github</a>
                   </div>
             </div>
        </div>
    );
}

export default Portifolio;
