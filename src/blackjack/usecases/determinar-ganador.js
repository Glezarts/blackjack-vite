

export const determinarGanador = () => {
    btnStopGame.disabled = true;

    const mensajeGanador = '¡Enhorabuena, ganaste!',
        mensajePerdedor = '¡Perdiste, prueba otra vez!',
        mensajeEmpate = '¡Empate, prueba otra vez!';


    const [pointMinim, pointComputer] = puntosJugadores;

    setTimeout(() => {
        if (pointComputer === pointMinim) {
            divMensaje.classList.add('visible');
            text.innerText = mensajeEmpate;

        } else if (pointMinim > 21) {
            divMensaje.classList.add('visible');
            text.innerText = mensajePerdedor;
        } else if (pointComputer > 21 && pointMinim <= 21) {
            divMensaje.classList.add('visible');
            text.innerText = mensajeGanador;
        } else {
            divMensaje.classList.add('visible');
            text.innerText = mensajePerdedor;
        }
    }, 150);
}