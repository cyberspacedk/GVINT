let userObj = {
    deck: [{}, {}],
    cardHand: [{ sdvsdvsd: 1 }, { sdvsdvsd: 2 }, { sdvsdvsd: 3 }, { sdvsdvsd: 4 }, { sdvsdvsd: 5 }],
    graveyard: [{}, {}],
    topRow: [{}, {}],
    middleRow: [{}, {}],
    bottomRow: [{}, {}],
    endRound: true / false,
    myTurn: true / false,
    victoryCount: 0,
    topRowSum: 0,
    middleRowSum: 0,
    bottomRowSum: 0,
    total: 0,
}
// let card = {
//     ability: 'string',
//     name: 'string',
//     positions: [
//         "Melee",
//         "Ranged",
//         "Siege"
//         ],
//     strength: 4,
//     type: "Gold",
//     img: URL,
//     audio: url
// }

// 1) Перевірити чи користувач зробив хід
// 2) Якщо ні, випадково вибираємо карту з руки і поміщаємо в масив збосу
// 3) Перемалювати інтерфейс руки
// 4) Передати хід опоненту


export function moveCardInGraveyard(obj) {
    const randomCard = Math.floor(Math.random() * obj.cardHand.length)
    const cardToGraveyard = obj.cardHand[randomCard]
    obj.cardHand.splice(`${randomCard}`, 1)
    obj.graveyard.push(cardToGraveyard)
    obj.myTurn = false
    
}
moveCardInGraveyard(userObj)
console.log(userObj);