'use strict'
import '../sass/coinflip.scss';

function drawCoin (usersObj){
    const container = document.querySelector(".left__coin")
    container.innerHTML = `
    <div id="coin">
    <div class="side-a"></div>
    <div class="side-b"></div>
    </div>`;
    let coin = document.querySelector("#coin");
    if(usersObj.user.myTurn) {
        if(usersObj.user.name === "Player 1") {
            coin.classList.add('player1')
        } else {
            coin.classList.add('player2')
        }
    } else{
        if(usersObj.user.name === "Player 1") {
            coin.classList.add('player2')
        } else {
            coin.classList.add('player1')
        }
    }
}
export {drawCoin};



// class Flip {
//     constructor() {

//         this.body = document.querySelector('body'),
//         this.coin = document.createElement('div'),
//         this.coin.setAttribute('id', 'coin');
//         this.body.append(this.coin);
//         this.sideA = document.createElement('div'),
//         this.sideA.classList.add('side-a');
//         this.coin.append(this.sideA);
//         this.sideB = document.createElement('div'),
//         this.sideB.classList.add('side-b');
//         this.coin.append(this.sideB);
//         this.randomFlip();
        
        
//     }

//     randomFlip() {

//             let lottery = Math.random();
//             this.coin.classList.remove('heads', 'tails');
//             if (lottery <= 0.5) {
//                 this.coin.classList.add('heads');
//             } else {
//                 this.coin.classList.add('tails')
//             }

        
            
//         return (this.coin.className)
        

         
          
//     }
// }


// window.addEventListener('DOMContentLoaded', new Flip())



