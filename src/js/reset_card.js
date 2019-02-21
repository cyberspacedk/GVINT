export function moveCardInGraveyard(obj) {
    const randomCard = Math.floor(Math.random() * obj.cardHand.length)
    const cardToGraveyard = obj.cardHand[randomCard]
    obj.cardHand.splice(`${randomCard}`, 1)
    obj.graveyard.push(cardToGraveyard)
    obj.myTurn = false
    
}

