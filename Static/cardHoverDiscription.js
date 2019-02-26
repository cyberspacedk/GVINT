const hand = document.querySelector('#player-hand');
const rightCard = document.querySelector('.right__card');

hand.addEventListener('mouseover', showCardDiscription);

function showCardDiscription(ev) {
    rightCard.classList.remove('moveLeft');
    rightCard.innerHTML = '';
    if (ev.target.nodeName === 'IMG') {
        const source = userObj.cardHand.find(el => el.name === ev.target.dataset.name);
        console.log(ev.target.nodeName);
        console.log(rightCard.className);
        rightCard.classList.add('moveLeft');
        rightCard.innerHTML = `
        <div>
            <img src=${ev.target.src} alt="" class="bigImage">
            <div class='anotationBGI'>
                <img src="./img/borderTop.png" alt="" style="width: 100%;">
                <h2>${source.name}</h2>
                <h3>Head2</h3>
                <img src="./img/borderBot.png" alt="" style="width: 100%;">
            </div>
            <div class='anotationBGI'>
                <img src="./img/borderTop.png" alt="" style="width: 100%;">
                <p>${source.ability} and msny text after this...</p>
                <img src="./img/borderBot.png" alt="" style="width: 100%;">
            </div>
        </div>`
    };
};

let userObj = {
    deck: [{},{}],
    cardHand:[{
        ability: 'string1',
        name: 'string1',
        positions: [
            "Melee",
            "Ranged",
            "Siege"
            ],
        strength: 4,
        type: "Gold",
    },{
        ability: 'string2',
        name: 'string2',
        positions: [
            "Melee",
            "Ranged",
            "Siege"
            ],
        strength: 4,
        type: "Gold",
    },{
        ability: 'string3',
        name: 'string3',
        positions: [
            "Melee",
            "Ranged",
            "Siege"
            ],
        strength: 4,
        type: "Gold",
    }],
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

// userObj.cardHand[el].ability