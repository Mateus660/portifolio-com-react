import React from "react";
import avatar from "./img/Default_Create_a_vibrant_2D_digital_illustration_of_a_confiden_0 (1).jpg"

function Portifolio() {
    return (
        <div className="container">
            <div id="avatar">
                <img src={avatar} alt="meu avatar" srcset="meu avatar" id="personagem"/>
                <div className="texto">
                    <h1>Mateus Emanuel</h1>
                    <p>Possuo conhecimentos em : </p>
                </div>
            </div>
        </div>
    );
}

export default Portifolio;
