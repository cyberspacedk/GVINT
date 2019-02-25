import {putOnBoard} from "./dealingCards";
export function moveCardInGraveyard(obj) {
    const randomNumber = Math.floor(Math.random() * obj.cardHand.length);
    const randomCard =   obj.cardHand.splice(randomNumber, 1);
    obj.graveyard = obj.graveyard? obj.graveyard:[];
    obj.graveyard.push(randomCard);
    putOnBoard(obj.faction,obj.cardHand,'#player-hand')
    obj.myTurn = false;
    return obj;
}

