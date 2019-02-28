"use strict";
import "../sass/cardHoverDiscription.scss";
import { audio } from "./audio";
// console.log(audio);


export class showMoreInfo{
    constructor (){
        this.users;
        // find hand and right bar
        this.hand = document.querySelector('#player-hand');
        this.middlePlayer = document.querySelector('.middle__player');
        this.middleOpponent = document.querySelector('.middle__opponent');    
        this.rightCard = document.querySelector('.right__card');
        // bind
        this.start = this.start.bind(this);
        this.hoverAction = this.hoverAction.bind(this);
    };

    start(users) {
        this.users = users;
        this.hand.addEventListener("mouseover", (() => this.hoverAction('user')));
        this.middlePlayer.addEventListener("mouseover", (() => this.hoverAction('user')));
        this.middleOpponent.addEventListener("mouseover", (() => this.hoverAction('opponent')));
    };

    hoverAction(side) {
        // console.log('hover working');
        // console.log('parentNode.parentNode.id:');
        // console.log(event.target.parentNode.parentNode.id);
        // this.rightCard.classList.add('showOut');
        this.rightCard.classList.remove('showIn');
        this.rightCard.innerHTML = '';
        if (event.target.nodeName === 'IMG') {
            const reg = /[ \w-]+?(?=\.)/gi;
            const targetRowID = event.target.parentNode.parentNode.id;
            let cardPosition;
            if (targetRowID === 'player-hand') { cardPosition = 'cardHand'}
            else if (targetRowID === 'player-topRow' || targetRowID === 'opponent-topRow') { cardPosition = 'topRow'}
            else if (targetRowID === 'player-middleRow' || targetRowID === 'opponent-middleRow') { cardPosition = 'middleRow'}
            else if (targetRowID === 'player-bottomRow' || targetRowID === 'opponent-bottomRow') { cardPosition = 'bottomRow'};
            // console.log(this.users[side][cardPosition]);
            // console.log(this.users[side]);
            console.log(targetRowID);
            console.log(cardPosition);
            console.log(this.users);

            const cardObject = this.users[side][cardPosition].find(el => el.name === event.target.dataset.name);
            this.rightCard.classList.add('showIn');
            // this.rightCard.classList.remove('showOut');
            this.rightCard.innerHTML = `
            <div>
                <img src=${event.target.src} alt="" class="right__card_image">
                <div class='right__card_anotation'>
                    <h3>${cardObject.name}</h3>
                    <h4>${cardObject.type}</h4>
                </div>
                <div class='right__card_anotation'>
                    <p>${cardObject.ability}</p>
                </div>
            </div>`
            // console.log(audio[cardObject.audio.match(reg)[0]]);
            // console.log([`${event.target.dataset.name}`]);
            new Audio(audio[cardObject.audio.match(reg)[0]]).play();
        };
    };
};