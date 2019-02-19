import { coundRoundScores, drawGameOverModal } from "./countRoundScore";


let user1 = {
    name: 'player 1',
    deck: [{},{}],
    cardHand:[{},{}],
    graveyard: [{},{}],
    topRow: [{},{}],
    middleRow: [{},{}],
    bottomRow: [{},{}],
    endRound: false,
    myTurn: false,
    victoryCount: 0,
    topRowSum: 0,
    middleRowSum: 10,
    bottomRowSum: 10,
    total: 0,
    roundsScore: [120, 21, 2],
}

let user2 = {
    name: 'player 2',
    deck: [{},{}],
    cardHand:[{},{}],
    graveyard: [{},{}],
    topRow: [{},{}],
    middleRow: [{},{}],
    bottomRow: [{},{}],
    endRound: false,
    myTurn: false,
    victoryCount: 1,
    topRowSum: 0,
    middleRowSum: 100,
    bottomRowSum: 0,
    total: 0,
    roundsScore: [30, 4, 50],
}


coundRoundScores(user1, user2);
