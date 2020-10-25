import React, { Component } from 'react';

const dificultyElement = (props) => {
    return (
        <div className="dificultyBox">
            <h4>Test De Capacidades</h4>
            <p><strong>Nivel Estanda</strong></p>
            <ul>
                <li>Nivel: {props.nivel}</li>
                <li>Duracion: {props.duracion}</li>
            </ul>
            <button>Iniciar</button>
            
        </div>
    )
}


export default dificultyElement;