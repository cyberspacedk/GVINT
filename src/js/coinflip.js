'use strict'


import '../sass/coinflip.scss';



class Flip {
    constructor() {

        this.body = document.querySelector('body'),
        this.coin = document.createElement('div'),
        this.coin.setAttribute('id', 'coin');
        this.body.append(this.coin);
        this.sideA = document.createElement('div'),
        this.sideA.classList.add('side-a');
        this.coin.append(this.sideA);
        this.sideB = document.createElement('div'),
        this.sideB.classList.add('side-b');
        this.coin.append(this.sideB);
        this.randomFlip();
        
        
    }

    randomFlip() {

            let lottery = Math.random();
            this.coin.classList.remove('heads', 'tails');
            if (lottery <= 0.5) {
                this.coin.classList.add('heads');
            } else {
                this.coin.classList.add('tails')
            }

        
            
        return (this.coin.className)
        

         
          
    }
}


window.addEventListener('DOMContentLoaded', new Flip())



