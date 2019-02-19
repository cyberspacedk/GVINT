const hand = document.querySelector('.hand');
const rightBar = document.querySelector('.rightBar')

hand.addEventListener('mouseenter', showCardDiscription);

function showCardDiscription(ev) {
    if (ev.target.nodeName === 'IMG') {
        rightBar.innerHTML = `
        <img src="" alt="">
        <h2>${characterName}</h2>
        <h3>${characterClass}</h3>
        <p>${discription}</p>`
    }
}

localStorage.getItem('')