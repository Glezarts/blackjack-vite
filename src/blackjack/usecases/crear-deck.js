import _ from 'underscore';

/**
 * 
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposDeCartaEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} devuelve un nuevo deck de cartas
 */

export const createDeck = (tiposDeCarta, tiposDeCartaEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('TiposDeCarta es obligatorio');

    if (!tiposDeCartaEspeciales || tiposDeCartaEspeciales.length === 0) throw new Error('TiposDeCarta es obligatorio');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo)
        }
    }
    for (let tipo of tiposDeCarta) {
        for (let special of tiposDeCartaEspeciales) {
            deck.push(special + tipo)
        }
    }
    return _.shuffle(deck);
}