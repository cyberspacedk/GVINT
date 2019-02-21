'use strict'
import '../sass/coinflip.scss';


// function randomFlip(usersObj) {
    
//     console.log("Local storage:", JSON.parse(localStorage.getItem("index")))
//     if(JSON.parse(localStorage.getItem("index"))===0){
//         let lottery = Math.round(Math.random());
//         console.log()
//     lottery ? usersObj.opponent.myTurn = true : usersObj.user.myTurn = true;
//     console.log("Random lottery" + lottery)
//     }
//     return usersObj;
//     // lottery ? coin.classList.add('heads') : coin.classList.add('tails');
// }
function drawCoin (userObj){
    // console.log(usersArr);
    const container = document.querySelector(".left__coin")
    container.innerHTML = `
    <div id="coin">
    <div class="side-a"></div>
    <div class="side-b"></div>
    </div>`;
    let coin = document.querySelector("#coin");
    console.log("userObj");
console.log(userObj);
    if(userObj.myTurn) {
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



