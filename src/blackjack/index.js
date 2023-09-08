import _ from 'underscore';
import { createDeck, pedirCarta, turnoMaquina, acumularPuntos, crearCarta } from './usecases';  


const modulo = (() => {
    'use strict'
    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [],
        mensajeGanador = '¡Enhorabuena, ganaste!',
        mensajePerdedor = '¡Perdiste, prueba otra vez!',
        mensajeEmpate = '¡Empate, prueba otra vez!';


    // Referencias HTML

    const btnAsk = document.querySelector('#btnAsk'),
        btnStopGame = document.querySelector('#btnStopGame'),
        btnNewGame = document.querySelector('#btnNewGame');

    const pointsHTML = document.querySelectorAll('small'),
        divCartasJugadores = document.querySelectorAll('.divCartas'),
        divMensaje = document.querySelector('.mensaje'),
        btnMensaje = document.querySelector('#btn-mensaje'),
        body = document.querySelector('body'),
        text = document.querySelector('h3');


    const inicializarJuego = (numGamers = 2) => {
        deck = createDeck(tipos, especiales);
        puntosJugadores = [];
        for (let i = 0; i < numGamers; i++) {
            puntosJugadores.push(0);
            pointsHTML.forEach(elem => elem.innerText = 0);
            divCartasJugadores.forEach(elem => elem.innerHTML = '');

            btnAsk.disabled = false;
            btnStopGame.disabled = false;

        }
    }

    btnAsk.addEventListener('click', () => {

        const carta = pedirCarta(deck);

        const pointsGamer = acumularPuntos(carta, 0);

        crearCarta(carta, 0);

        if (pointsGamer > 21) {
            btnAsk.disabled = true;
            btnStopGame.disabled = true;
            turnoMaquina(pointsGamer);


        } else if (pointsGamer === 21) {
            btnAsk.disabled = true;
            btnStopGame.disabled = true;

            turnoMaquina(pointsGamer);
        }

    });

    btnStopGame.addEventListener('click', () => {
        btnAsk.disabled = true;
        btnStopGame.disabled = true;
        turnoMaquina(puntosJugadores[0]);

    });

    btnMensaje.addEventListener('click', () => {
        divMensaje.classList.remove('visible');

    });

    body.addEventListener('click', () => {
        divMensaje.classList.remove('visible');

    });

    btnNewGame.addEventListener('click', () => {

        inicializarJuego();

    });

    return {
        nuevoJuego: inicializarJuego
    };


})();

