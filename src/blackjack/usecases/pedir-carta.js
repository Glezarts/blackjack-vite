/**
 * 
 * @param { Array<String> } deck Debe ser un array de string
 * @returns {String} devuelve una carta
 */


export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw 'No quedan más cartas en la baraja'
    }
    return deck.pop();

}