import React from "react";
import "./style.css";

const Card = (props) => {
    return(
        <div class="card-container">
            <div className="cima-card">
                <p>{props.cidade}</p>
            </div>
            <div className="container1">
                <img src={props.img} alt="imagem clima"/>
                <p id="temp">{props.temp}°C</p>
            </div>
            <div className="container2">
                <p>Min: {props.temp_min}°C</p>
                <p>Max: {props.temp_max}°C</p>
            </div>
            <div className="container3">
                <p>Sensação: {props.sensacao}°C</p>
                <p>Humidade: {props.umidade}</p>
                <p>Índice UV: {props.uv}</p>
            </div>
        </div>
    );
}

export default Card;