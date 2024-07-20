'use strict';

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav',
}

const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById("container").appendChild(div); 
}

const exibir = (sons) => {
   Object.keys(sons).forEach(criarDiv);
}

exibir(sons);

const tocarSom  = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`)
    audio.play(letra);
}

const ativarDiv = (evento) => {
    const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();
    const letraPermitida = sons.hasOwnProperty(letra)
    if (letraPermitida){
        tocarSom(letra);
    }
    
}

document.getElementById("container")
        .addEventListener('click', ativarDiv);


window.addEventListener('keydown', ativarDiv)