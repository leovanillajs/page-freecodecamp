import React from 'react'

function Testimony() {
    return (
        <div className='caixa-testimony'>
            <img 
                className='imagem-testimony'
                src={('../imagens/testimonio-emma.png')}
                alt='Foto de Emma'
            />
            <div className="caixa-texto-testimony">
                <p className="nome-testimony">Emma Bostian en Suecia</p>
                <p className="cargo-testimony">Software Engineer at Spotify</p>
                <p className="texto-testimony">"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p>
            </div>
        </div>
    )
}