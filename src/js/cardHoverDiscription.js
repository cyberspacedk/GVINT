"use strict";
import "../sass/cardHoverDiscription.scss";

const hand = document.querySelector('#player-hand');
const rightCard = document.querySelector('.right__card');
hand.addEventListener('mouseover', showCardDiscription);

function showCardDiscription(ev) {
    console.log
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