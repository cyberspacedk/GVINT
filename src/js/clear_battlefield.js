import { updateUserObject } from "./server";
import { putOnRow } from "./dealingCards";

// Назва таску: clear_battlefield

// Опис таску:    
// Всі карти, що були на полі, видаляються з поля і потрапляють в масиви збросів кожного юзера

// Інструкція з використання:
// 1) прописати умову запуску функції (наприклад, функція запускається після того, як відобразилося модальне вікно з результатами раунду)
// 2) при виклику передати аргументами 2 об'єкти - користувач 1 та користувач 2

function clearBattlefield (victor, victorIdx, opponentIdx, userA, userB) {
    console.log('clearBattlefield works!');
    
    userA.graveyard = userA.graveyard ? userA.graveyard : [];
    userA.topRow = userA.topRow ? userA.topRow : [];
    userA.middleRow = userA.middleRow ? userA.middleRow : [];
    userA.bottomRow = userA.bottomRow ? userA.bottomRow : [];

    userA.graveyard = [...userA.graveyard, ...userA.topRow, ...userA.middleRow, ...userA.bottomRow];
    userA.topRow = [];
    userA.middleRow = [];
    userA.bottomRow = [];
    
    userA.total = 0;
    userA.topRowSum = 0;
    userA.middleRowSum = 0;
    userA.bottomRowSum = 0;

    userB.graveyard = userB.graveyard ? userB.graveyard : [];
    userB.topRow = userB.topRow ? userB.topRow : [];
    userB.middleRow = userB.middleRow ? userB.middleRow : [];
    userB.bottomRow = userB.bottomRow ? userB.bottomRow : [];

    userB.graveyard = [...userB.graveyard, ...userB.topRow, ...userB.middleRow, ...userB.bottomRow];
    userB.topRow = [];
    userB.middleRow = [];
    userB.bottomRow = [];
    
    userB.total = 0;
    userB.topRowSum = 0;
    userB.middleRowSum = 0;
    userB.bottomRowSum = 0;

    
    userA.endRound = false; 
    userB.endRound = false;    

    const notVictor = victor.id === userA.id ? userB : userA;

    // return updateUserObject(victor, victorIdx).then(()=>updateUserObject(notVictor, opponentIdx));

    clearFrontEnd();

    // return updateUserObject(userA, JSON.parse(localStorage.getItem('index')));
    return Promise.all([updateUserObject(victor, victorIdx), updateUserObject(notVictor, opponentIdx)])
};

function clearFrontEnd () {
    
    const topRowSumDiv = document.querySelector("#player-topRow").previousElementSibling;
    const middleRowSumDiv = document.querySelector("#player-middleRow").previousElementSibling;
    const bottomRowSumDiv = document.querySelector("#player-bottomRow").previousElementSibling;
    const totalDiv = document.querySelector(".battlefield__bottom .battlefield__current-score");

    const opponentTopRowSumDiv = document.querySelector("#opponent-topRow").previousElementSibling;
    const opponentMiddleRowSumDiv = document.querySelector("#opponent-middleRow").previousElementSibling;
    const opponentBottomRowSumDiv = document.querySelector("#opponent-bottomRow").previousElementSibling;
    const opponentTotalDiv = document.querySelector(".battlefield__top .battlefield__current-score");

    putOnRow([], "#player-topRow");
    putOnRow([], "#player-middleRow");
    putOnRow([], "#player-bottomRow");

    putOnRow([], "#opponent-topRow");
    putOnRow([], "#opponent-middleRow");
    putOnRow([], "#opponent-bottomRow");

    topRowSumDiv.textContent = 0;
    middleRowSumDiv.textContent = 0;
    bottomRowSumDiv.textContent = 0;
    totalDiv.textContent = 0;

    opponentTopRowSumDiv.textContent = 0;
    opponentMiddleRowSumDiv.textContent = 0;
    opponentBottomRowSumDiv.textContent = 0;
    opponentTotalDiv.textContent = 0;

}

export default clearBattlefield;