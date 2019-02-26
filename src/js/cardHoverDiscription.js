"use strict";
import "../sass/cardHoverDiscription.scss";

export class showMoreInfo{
    constructor (){
        // find hand and row
        this.hand = document.querySelector('#player-hand');
        this.rightCard = document.querySelector('.right__card');
        //bind
        // this.showCardDiscription = this.showCardDiscription.bind(this);
        this.start = this.start.bind(this);
    }

    start(users) {
        console.log(users);
        this.hand.addEventListener("mouseover", (ev) => {
            this.rightCard.classList.add('showOut');
            this.rightCard.classList.remove('showIn');
            this.rightCard.innerHTML = '';
            if (ev.target.nodeName === 'IMG') {
                console.log(users.user.cardHand.find(el => el.name === ev.target.dataset.name));
                // console.log('mouse over card');
                // const source = userObj.cardHand.find(el => el.name === ev.target.dataset.name);
                this.rightCard.classList.add('showIn');
                this.rightCard.classList.remove('showOut');
                this.rightCard.innerHTML = `
                <div>
                    <img src=${ev.target.src} alt="" class="right__card_image">
                    <div class='right__card_anotation'>
                        <h2>${users.user.cardHand.find(el => el.name === ev.target.dataset.name).name}</h2>
                        <h3>${users.user.cardHand.find(el => el.name === ev.target.dataset.name).type}</h3>
                    </div>
                    <div class='right__card_anotation'>
                        <p>${users.user.cardHand.find(el => el.name === ev.target.dataset.name).ability}</p>
                    </div>
                </div>`
            };
        })
    };
};


//
// const hand = document.querySelector('#player-hand');
// const rightCard = document.querySelector('.right__card');
// hand.addEventListener('mouseover', showCardDiscription);
// function showCardDiscription(ev) {
//     console.log
//     rightCard.classList.remove('moveLeft');
//     rightCard.innerHTML = '';
//     if (ev.target.nodeName === 'IMG') {
//         const source = userObj.cardHand.find(el => el.name === ev.target.dataset.name);
//         console.log(ev.target.nodeName);
//         console.log(rightCard.className);
//         rightCard.classList.add('moveLeft');
//         rightCard.innerHTML = `
//         <div>
//             <img src=${ev.target.src} alt="" class="bigImage">
//             <div class='anotationBGI'>
//                 <img src="./img/borderTop.png" alt="" style="width: 100%;">
//                 <h2>${source.name}</h2>
//                 <h3>Head2</h3>
//                 <img src="./img/borderBot.png" alt="" style="width: 100%;">
//             </div>
//             <div class='anotationBGI'>
//                 <img src="./img/borderTop.png" alt="" style="width: 100%;">
//                 <p>${source.ability} and msny text after this...</p>
//                 <img src="./img/borderBot.png" alt="" style="width: 100%;">
//             </div>
//         </div>`
//     };
// };
//