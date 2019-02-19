'use strict'

window.addEventListener('DOMContentLoaded', randomFlip);





function randomFlip(event) {

    event.preventDefault();


    const body = document.querySelector('body');

    const coin = document.createElement('div');
    coin.setAttribute('id', 'coin');
    body.append(coin);

    const sideA = document.createElement('div');
    sideA.classList.add('side-a');
    coin.append(sideA);

    const sideB = document.createElement('div');
    sideB.classList.add('side-b');
    coin.append(sideB);


    setTimeout(function () {
        let result = Math.random();
        coin.classList.remove('heads', 'tails');
        if (result <= 0.5) {
            coin.classList.add('heads');
        } else {
            coin.classList.add('tails')
        }
    }, 200)

}