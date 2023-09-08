import { pedirCarta } from "./pedir-carta";
import { determinarGanador } from "./determinar-ganador";
import { acumularPuntos } from './acumular-puntos'

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array<String>} deck 
 */

export const turnoMaquina = (pointMinim, deck = []) => {

    let pointComputer = 0;

    do {
        const carta = pedirCarta(deck);
        pointComputer = acumularPuntos(carta, puntosJugadores.length - 1);
        crearCarta(carta, puntosJugadores.length - 1);

    } while ((pointComputer < pointMinim) && (pointMinim <= 21));

    determinarGanador();
}
