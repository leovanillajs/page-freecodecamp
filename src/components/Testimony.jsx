import React from 'react'
import Foto from '../imagens/testimonio-emma.png'
import '../stylesheets/Testimony.css'

function Testimony(props) {
    return (
        <div className='caixa-testimony'>
            <img 
                className='imagem-testimony'
                src={Foto}
                alt='Foto de Emma'
            />
            <div className="caixa-texto-testimony">
                <p className="nome-testimony">{props.nome} en {props.pais}</p>
                <p className="cargo-testimony">{props.cargo} at {props.empresa}</p>
                <p className="texto-testimony">"{props.testimony}"</p>
            </div>
        </div>
    )
}

export default Testimony