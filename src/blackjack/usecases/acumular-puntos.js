import { valorCarta } from "./valor-carta";

/**
 * 
 * @param {*} carta 
 * @param {*} turno 
 * @returns 
 */

export const acumularPuntos = (carta, puntosJugadores, turno ) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    pointsHTML[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
}