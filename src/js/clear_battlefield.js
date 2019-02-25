// Назва таску: clear_battlefield

// Опис таску:    
// Всі карти, що були на полі, видаляються з поля і потрапляють в масиви збросів кожного юзера

// Інструкція з використання:
// 1) прописати умову запуску функції (наприклад, функція запускається після того, як відобразилося модальне вікно з результатами раунду)
// 2) при виклику передати аргументами 2 об'єкти - користувач 1 та користувач 2

function clearBattlefield (userA, userB) {
    userA.graveyard = userA.graveyard.concat(userA.topRow, userA.middleRow, userA.bottomRow);
    userA.topRow = [];
    userA.middleRow = [];
    userA.bottomRow = [];
    userB.graveyard = userB.graveyard.concat(userB.topRow, userB.middleRow, userB.bottomRow);
    userB.topRow = [];
    userB.middleRow = [];
    userB.bottomRow = [];
};

export default clearBattlefield;