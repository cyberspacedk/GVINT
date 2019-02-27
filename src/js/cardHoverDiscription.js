"use strict";
import "../sass/cardHoverDiscription.scss";
import { audio } from "./audio";
// console.log(audio);


export class showMoreInfo{
    constructor (){
        // find hand and right bar
        this.hand = document.querySelector('#player-hand');
        this.rightCard = document.querySelector('.right__card');
        // bind
        this.start = this.start.bind(this);
    }

    start(users) {
        this.hand.addEventListener("mouseover", (ev) => {
            this.rightCard.classList.add('showOut');
            this.rightCard.classList.remove('showIn');
            this.rightCard.innerHTML = '';
            let reg = /[ \w-]+?(?=\.)/gi;
            let cardObject = users.user.cardHand.find(el => el.name === ev.target.dataset.name);
            if (ev.target.nodeName === 'IMG') {
                // console.log('mouse on card!');
                this.rightCard.classList.add('showIn');
                this.rightCard.classList.remove('showOut');
                this.rightCard.innerHTML = `
                <div>
                    <img src=${ev.target.src} alt="" class="right__card_image">
                    <div class='right__card_anotation'>
                        <h3>${cardObject.name}</h3>
                        <h4>${cardObject.type}</h4>
                    </div>
                    <div class='right__card_anotation'>
                        <p>${cardObject.ability}</p>
                    </div>
                </div>`
                console.log(audio[cardObject.audio.match(reg)[0]]);
                
                // console.log([`${ev.target.dataset.name}`]);
                
                new Audio(audio[cardObject.audio.match(reg)[0]]).play();
            };
        })
    };
};