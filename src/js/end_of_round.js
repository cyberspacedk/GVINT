// Назва таску: end_of_round

// Опис таску:
// Завершення раунду, при умові якщо не перемістили карту з руки на поле і натиснули кнопку Пас. 1) На кнопку пас у юзера міняється флажок endRound на true і тепер ходить тільки опонент, поки не спасує. 2) Якщо 2 гравці спасували, раунд закінчується.

// Інструкція з використання:
// Функція запускається без аргументів.
// Потрібно привласнити значення константам нижче. 

function onPass() {
    
    // const user = значення userID того юзера, що натиснув кнопку "пас" (динамічно витягується з localStorage); 
    // const otherUser = userID іншого юзера з бази даних;
    // const makeaMove = назва функції, де юзер робить хід;
    // const showScores = назва функції, що відображає модальне вікно з результатами раунду;

    if (user.myTurn) {
        user.endRound = true;
        user.myTurn = false;
        otherUser.myTurn = true;
    }    
    if (otherUser.endRound === false) {
        makeaMove();
        otherUser.myTurn = true;
    }
    if (user.endRound && otherUser.endRound) {
        showScores();
    }
}

export default onPass;