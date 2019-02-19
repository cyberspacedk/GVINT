import { coundRoundScores, drawGameOverModal } from "./countRoundScore";


let user1 = {
    name: 'player 1',
    deck: [{},{}],
    cardHand:[{},{}],
    graveyard: [{},{}],
    topRow: [{},{}],
    middleRow: [{},{}],
    bottomRow: [{},{}],
    endRound: true/false,
    myTurn: true/false,
    victoryCount: 0,
    topRowSum: 0,
    middleRowSum: 0,
    bottomRowSum: 0,
    total: 0,
}

let user2 = {
    name: 'player 2',
    deck: [{},{}],
    cardHand:[{},{}],
    graveyard: [{},{}],
    topRow: [{},{}],
    middleRow: [{},{}],
    bottomRow: [{},{}],
    endRound: true/false,
    myTurn: true/false,
    victoryCount: 0,
    topRowSum: 0,
    middleRowSum: 0,
    bottomRowSum: 0,
    total: 0,
}


// coundRoundScores(user1, user2);
drawGameOverModal(user1, user2);