import { valorCarta } from "./valor-carta";

/**
 * 
 * @param {*} carta 
 * @param {*} turno 
 * @returns 
 */



export const acumularPuntos = (carta, turno ) => {
   
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    console.log(valorCarta(carta));
    pointsHTML[turno].innerText = puntosJugadores[turno];

    console.log(puntosJugadores);
    return puntosJugadores[turno];
}