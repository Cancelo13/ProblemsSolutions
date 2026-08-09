// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(cards, cardType){
    let counter = 0;
    cards.forEach((value) => {
        if(value === cardType){
            counter++;
        }
    });
    return counter;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(cards, isEven){
    let counter = 0;
    for(const val of cards){
        if(isEven && val % 2 === 0){
            counter++;
        }
        else if(!isEven && val % 2){
            counter++;
        }
    }
    return counter;
}
