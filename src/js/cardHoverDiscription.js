export
const hand = document.querySelector('#player-hand');
const rightCard = document.querySelector('.right__card')

hand.addEventListener('mouseenter', showCardDiscription);

function showCardDiscription(ev) {
    if (ev.target.nodeName === 'IMG') {
        rightCard.innerHTML = `
        <img src=${ev.target.src} alt="">
        <h2>${characterName}</h2>
        <h3>${characterClass}</h3>
        <p>${discription}</p>`
    }
}

// userObj.cardHand