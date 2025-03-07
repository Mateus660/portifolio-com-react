import React from "react";
import avatar from "./img/Default_Create_a_vibrant_2D_digital_illustration_of_a_confiden_0 (1).jpg"
import javascript from "./img/png-javvascript.png"
import react from "./img/png-react.png"
import jquery  from "./img/png-jquery-removebg-preview.png"
import html from "./img/png-html.png"
import css from "./img/css-logo.png"
import sql from "./img/logo-sql.png"
import git from "./img/git-logo.png.png"
import github from "./img/GitHub-logo.png"
import relogio from "./img/relógio-digital.png"
import climatempo from "./img/climatempo.png"
import tarefas from "./img/organizador-de-tarefas.png"
import gerador from "./img/gerador-de-senhas.png"
import ingressos from "./img/compra-ingressos.png"
import perguntas from "./img/jogo-peguntas.png"
import verificador from "./img/verificador-peso.png"
import seletor from "./img/seletor-de-tema.png"
import login from "./img/tela-de-login.png"

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
                        <img src={git} alt="logo css" srcset="logo css" height={100} width={100}/>
                        <img src={github} alt="logo css" srcset="logo css" height={100} width={140}/>
                    </div>
                </div>
            </div>
            <div id="meus-projetos"> 
                   <div className="projetos">
                    <h1>Relógio Digital</h1>
                    <img src={relogio} alt="Relógio digital" srcset="Relógio Digital" />
                   <p>Este projeto apresenta um relógio digital interativo, desenvolvido utilizando as tecnologias HTML5, CSS3 e JavaScript. Ele exibe horas, minutos e segundos em tempo real, atualizados a cada segundo. O design é minimalista e responsivo, com uso de CSS3 para estilização moderna e JavaScript para a lógica de exibição do tempo. Este relógio digital é um ótimo exemplo de como integrar front-end e lógica de programação para criar componentes funcionais e esteticamente agradáveis na web</p> <br /> <a href="https://mateus660.github.io/relogio-digital/" target="_blank">Clique aqui para acessar o projeto</a> <a href="https://github.com/Mateus660/relogio-digital.git" target="_blank">Clique aqui para acessar o projeto</a>
                   </div>

                   <div className="projetos">
                    <h1>Tela de login e senha</h1>
                    <img src={login} alt="Tela de login" srcset="Tela de login" />
                    <p> Este projeto foi desenvolvido para criar um sistema de login e cadastro funcional, utilizando HTML, CSS e JavaScript, com armazenamento de dados no LocalStorage. Ele permite que os usuários se cadastrem e façam login, garantindo a validação dos dados e uma melhor experiência de uso. </p> <a href="https://mateus660.github.io/LOGIN/Html/tela%20de%20cadastro.html" target="_blank">Clique aqui para acessar o projeto</a>  <a href="https://github.com/Mateus660/LOGIN.git" target="_blank">Clique aqui para acessar o projeto no github</a>
                   </div>
                   

                   <div className="projetos">
                    <h1>Site Climatempo</h1>
                    <img src={climatempo} alt="site climatempo" srcset="site climatempo" />
                    <p>Desenvolvi este projeto como uma solução prática para consultar as condições climáticas em qualquer lugar do mundo em tempo real. Utilizando HTML, CSS e JavaScript, criei um site que permite ao usuário pesquisar e visualizar dados meteorológicos atualizados, como temperatura, umidade, e condições gerais, diretamente na interface. O projeto se integra a uma API de clima global, demonstrando meu conhecimento em manipulação de APIs, responsividade e dinamismo no front-end. Este projeto reflete minha habilidade em criar aplicações úteis e interativas, com um design simples e eficiente.</p> <a href="https://mateus660.github.io/Climatempo/" target="_blank">Clique aqui para acessar o projeto</a> <a href="https://github.com/Mateus660/Climatempo.git" target="_blank">Clique aqui para acessar o projeto no github</a>
                   </div>

                   <div className="projetos">
                    <h1>Organizador de Tarefas</h1>
                    <img src={tarefas} alt="Organizador de tarefas" srcset="Organizador de tarefas" />
                    <p>Desenvolvido um Organizador de Tarefas com funcionalidades de login e cadastro, utilizando JavaScript, jQuery, HTML e CSS. Após o login, os usuários podem adicionar tarefas em uma interface dedicada. As tarefas são exibidas em uma tela separada, onde podem ser visualizadas e excluídas conforme necessário, proporcionando uma experiência prática e intuitiva.</p>  <a href="https://mateus660.github.io/Organizador_de_tarefas/HTML/login.html" target="_blank">Clique aqui para acessar o projeto no github</a><a href="https://mateus660.github.io/Climatempo/" target="_blank"> <br />Clique aqui para acessar o projeto no github</a>
                   </div>

                   <div className="projetos">
                    <h1>Gerador de senhas automático</h1>
                    <img src={gerador} alt="Gerador de senhas" srcset="Gerador de Senhas" />
                    <p>Este projeto foi desenvolvido utilizando JavaScript, HTML e CSS, com o objetivo de oferecer uma ferramenta eficiente e fácil de usar para a criação de senhas seguras. O Gerador de Senhas Automático permite que os usuários escolham entre diferentes tipos de caracteres, como letras maiúsculas, minúsculas, números e símbolos, para criar senhas personalizadas de forma rápida. O projeto foi pensado para oferecer praticidade e segurança, além de ser totalmente responsivo, adaptando-se a diferentes dispositivos e tamanhos de tela.</p> <a href="https://mateus660.github.io/gerador-de-senha/" target="_blank">Clique aqui para acessar o projeto</a>  <a href="https://github.com/Mateus660/gerador-de-senha.git" target="_blank">Clique aqui para acessar o projeto no github</a>
                   </div>

                   <div className="projetos">
                    <h1>Sistema de compra de ingressos de cinema</h1>
                    <img src={ingressos} alt="site ingressos" srcset="site ingressos" />
                    <p>A ideia principal dessa tela é permitir que o usuário selecione seu filme preferido de uma lista, que é exibida de forma horizontal, com os filmes dispostos de maneira "deitada" usando flexbox. O layout foi cuidadosamente planejado para garantir que a interface seja visualmente agradável e intuitiva, com os filmes centralizados e organizados de forma a facilitar a navegação.</p> <a href="https://mateus660.github.io/lugares-de-cinema/HTML/escolha-de-films.html" target="_blank">Clique aqui para acessar o projeto</a>  <a href="https://github.com/Mateus660/lugares-de-cinema.git" target="_blank">Clique aqui para acessar o projeto no github</a>
                   </div>

                   <div className="projetos">
                    <h1>Jogo de perguntas</h1>
                    <img src={perguntas} alt="jogo de perguntas" srcset="Jogo de perguntas" />
                    <p>Descrição:
                    O Quiz Interativo é um projeto desenvolvido com React que permite aos usuários testar seus conhecimentos de maneira simples e divertida. Ao iniciar, o usuário insere seu nome e, em seguida, é apresentado a uma série de perguntas de múltipla escolha. O sistema verifica se as respostas estão corretas e fornece feedback imediato, ajudando o jogador a aprender enquanto se diverte.</p> <a href="https://jogo-de-perguntas.vercel.app/" target="_blank">Clique aqui para acessar o projeto</a>  <a href="https://github.com/Mateus660/jogo-de-perguntas.git" target="_blank">Clique aqui para acessar o projeto no github</a>
                   </div>

                   <div className="projetos">
                    <h1>Verificador de idade e peso</h1>
                    <img src={verificador} alt="site climatempo" srcset="site climatempo" />
                    <p> um verificador de peso e idade que pega as suas informações armazena e as mostra para vocês na tela como resultado 
                    Usei a línguagem javascript com manipulação ao DOM, para estilização o CSS e o HTML para elementos </p> <a href="https://mateus660.github.io/verificador-de-idade-e-peso/html/index.html" target="_blank">Clique aqui para acessar o projeto</a>  <a href="https://github.com/Mateus660/verificador-de-idade-e-peso.git" target="_blank">Clique aqui para acessar o projeto no github</a>
                   </div>

                   <div className="projetos">
                    <h1>Seletor de Fundo</h1>
                    <img src={seletor} alt="seletor de fundo" srcset="seletor de fundo" />
                    <p> O Seletor de Cor Interativo é um pequeno projeto desenvolvido em React.js que permite ao usuário alterar dinamicamente a cor de fundo da página por meio de um menu suspenso. Além da mudança visual, um alerta informa a cor escolhida, tornando a experiência mais intuitiva e interativa. </p> <a href="https://mudanca-de-tema.vercel.app/" target="_blank">Clique aqui para acessar o projeto</a>  <a href="https://github.com/Mateus660/Mudanca-de-Tema.git" target="_blank">Clique aqui para acessar o projeto no github</a>
                   </div>
             </div>
        </div>
    );
}

export default Portifolio;
