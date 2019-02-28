import "../sass/cardHoverDiscription.scss";
import { audio } from "./audio";

export class showMoreInfo{
    constructor (){
        this.decks;
        // find hand and right bar
        this.hand = document.querySelector('#player-hand');
        this.middleCenter = document.querySelector('.middle__center');
        this.rightCard = document.querySelector('.right__card');
        // bind
        this.start = this.start.bind(this);
        this.hoverAction = this.hoverAction.bind(this);
    };

    start(decks) {// отримує об'єкт з усіма картами та запускає слухачі руки та столу 
        this.decks = decks;
        this.hand.addEventListener("click", (() => this.hoverAction(true)));
        this.hand.addEventListener("mouseover", (() => this.hoverAction(false)));
        this.middleCenter.addEventListener("mouseover", (() => this.hoverAction(false)));
    };

    hoverAction(audioPlay) {// відмальовує параву бокову панель, програє звук картки
        this.rightCard.classList.remove('showIn');
        this.rightCard.innerHTML = '';
        if (event.target.nodeName === 'IMG') {
            const reg = /[ \w-]+?(?=\.)/gi;
            const findTargetDeck = Object.values(this.decks).find(el => el.find(el => el.name === event.target.dataset.name));
            const cardObject = findTargetDeck.find(el => el.name === event.target.dataset.name);
            this.rightCard.classList.add('showIn');
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
            if (audioPlay) {new Audio(audio[cardObject.audio.match(reg)[0]]).play()};
        };
    };
};