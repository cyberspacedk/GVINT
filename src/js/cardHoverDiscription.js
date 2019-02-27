"use strict";
import "../sass/cardHoverDiscription.scss";

export class showMoreInfo{
    constructor (){
        // find hand and row
        this.hand = document.querySelector('#player-hand');
        this.rightCard = document.querySelector('.right__card');
        //bind
        this.start = this.start.bind(this);
    }

    start(users) {
        this.hand.addEventListener("mouseover", (ev) => {
            this.rightCard.classList.add('showOut');
            this.rightCard.classList.remove('showIn');
            this.rightCard.innerHTML = '';
            if (ev.target.nodeName === 'IMG') {
                console.log('mouse on card!');
                this.rightCard.classList.add('showIn');
                this.rightCard.classList.remove('showOut');
                this.rightCard.innerHTML = `
                <div>
                    <img src=${ev.target.src} alt="" class="right__card_image">
                    <div class='right__card_anotation'>
                        <h3>${users.user.cardHand.find(el => el.name === ev.target.dataset.name).name}</h3>
                        <h4>${users.user.cardHand.find(el => el.name === ev.target.dataset.name).type}</h4>
                    </div>
                    <div class='right__card_anotation'>
                        <p>${users.user.cardHand.find(el => el.name === ev.target.dataset.name).ability}</p>
                    </div>
                </div>`
                new Audio(users.user.cardHand.find(el => el.name === ev.target.dataset.name).audio).play();
            };
        })
    };
};