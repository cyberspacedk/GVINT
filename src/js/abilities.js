"use strict";
import {putOnRow} from './dealingCards';
import { updateUserObject } from "./server";
import firebase from './firebase';

/////////////////
//
// Monster deck
//
/////////////////

export function SLYZARD({userObj, selectedCard, rowForAbilities}) {

    //

};

// ability: "Размещение: сыграйте все копии этого отряда из вашей колоды.",
// name: "ГЛАВОГЛАЗ",
// positions: ["Ranged"],
// strength: 3,
// type: "Bronze",
// img: '../img/Monster/ARACHAS DRONE.png',
// audio: '../audio/Monster/ARCHANAS.mp3'

export function ARACHAS_DRONE({userObj, selectedCard, rowForAbilities}) { 

    // choose the same cards
        const sameCards =  userObj.deck.filter(elem=> elem.img === selectedCard.img); 
    // remove from original array
        userObj.deck = userObj.deck.filter(elem=> elem.img !== selectedCard.img);  
        
        userObj.topRow = userObj.topRow ? userObj.topRow :  [];
        userObj.middleRow = userObj.middleRow ? userObj.middleRow : [];
        userObj.bottomRow = userObj.bottomRow ? userObj.bottomRow : [];
      
        switch(rowForAbilities){
            case "player-topRow": 
                userObj.topRow = [...userObj.topRow, ...sameCards] ;
                putOnRow(userObj.topRow, '#player-topRow'); 
                break;
            case "player-middleRow": 
                userObj.middleRow = [...userObj.middleRow, ...sameCards]; 
                putOnRow(userObj.middleRow, '#player-middleRow');  
                break;
            case "player-bottomRow": 
                userObj.bottomRow = [...userObj.bottomRow, ...sameCards]; 
                putOnRow(userObj.bottomRow, '#player-bottomRow');  
                break;
        }  
    
}

export function CELAENO_HARPY({userObj, selectedCard, rowForAbilities}) {

    //

};

export function ARACHAS_BEHEMOTH({userObj, selectedCard, rowForAbilities}) {

    //

};

export function FORKTAIL({userObj, selectedCard, rowForAbilities}) {

    //

};

export function OZZREL({userObj, selectedCard, rowForAbilities}) {

    //

};

export function MORVUDD({userObj, selectedCard, rowForAbilities}) {

    //

};

export function RUEHIN({userObj, selectedCard, rowForAbilities}) {
console.log("RUEHIN Test")
    //

};

// ability: "Обреченность. Размещение: переместите отряд из другого ряда на этой стороне в этот ряд. Возьмите верхнюю карту из вашей колоды.",
// name: "ПУГАЧ",
// positions: ["Melee", "Ranged", "Siege"],
// strength: 12,
// type: "Silver",
// img: '../img/Monster/FRIGHTENER.png',
// audio: '../audio/Monster/HARPY.mp3'

export function FRIGHTENER({userObj, targetRow}) {
    //decided to postpone since there are no abilities the damage rows

    const playerAllCardsOnBoard = [...document.querySelectorAll('.middle__player .card_in_hands')]; //choose all cards on players board
    console.log("targetRow from FRIGHTENER", targetRow);
    const cardsInTargetRow = [...targetRow.querySelectorAll('.card_in_hands')]; 
    const cardsNotInTarget = playerAllCardsOnBoard.filter(el => !cardsInTargetRow.includes(el)); //filter all cards to remove those in target row

    //add class and listeners for sorted cards
    cardsNotInTarget.forEach(el => {
        el.classList.add('active-card');        
        el.addEventListener('click', appendElement)
    });

    //move the card from hand to the table and remove all listeners and classes
    function appendElement({target}) {
        cardsNotInTarget.forEach(el => {
            targetRow.append(target.parentNode);
            el.classList.remove('active-card');        

            el.removeEventListener('click', appendElement)
        })
    }
}

// ability: "Размещение: создайте Единорога или Хиронекса",
// name: "ЙЕННИФЭР",
// positions: ["Melee", "Ranged", "Siege"],
// strength: 6,
// type: "Gold",
// img: '../img/Monster/YENNEFER.png',
// audio: '../audio/Monster/ARCHANAS.mp3'

export function YENNEFER({userObj}) {
    //decided to make this card without the ability, since there are no Unicorn or Chironex cards)
}

// ability: "В начале каждого вашего хода усиливайте все остальные слабейшие дружественные отряды на 1 ед. Месть: усильте все остальные слабейшие дружественные отряды на 2 ед",
// name: "ТРИСС: ЗАКЛИНАТЕЛЬНИЦА",
// positions: ["Melee", "Ranged", "Siege"],
// strength: 6,
// type: "Gold",
// img: '../img/Monster/TRISS_BUTTERFLIES.png',
// audio: '../audio/Monster/HARPY.mp3'

export function TRISS_BUTTERFLIES({userObj}) {
    //find the weakest card in hand
    const weakestCard = userObj.cardHand
        .filter(el => el.strength !== 0) //exclude elements that have 0 strength
        .sort((a,b) => a.strength - b.strength)[0]; //select the element with lowest strength

    //increase the strength of each weakest card
    const cardsLikeWeakest = userObj.cardHand
        .filter(el => el.strength === weakestCard.strength)
        .map(el => {
            el.strength++;
            return el;
            });



    //when revenge (make sure it works only once)
    let revenge = ''; //stub
    if(revenge){
        const weaksestCardsWhenRevenge = cardsLikeWeakest.map(el => {
            el.strength++;
            return el;
        });

    }
}

// ability: "Размещение: создайте Драугира в случайном ряду на стороне каждого игрока, имеющего в своем сбросе хотя бы одну бронзовую или серебряную карту",
// name: "ДРАУГ",
// positions: ["Melee", "Ranged", "Siege"],
// strength: 8,
// type: "Gold",
// img: '../img/Monster/DRAUG.png',
// audio: '../audio/Monster/FLY.mp3'

export function DRAUG({userObj, opponentObj, drawingOfOpponentStep, displayResult, calculateTotalNumberOfPoints}) {
    const randomPositionPlayer = Math.floor(Math.random() * 3);
    const randomPositionOpponent = Math.floor(Math.random() * 3);
    const draugCard = userObj.deck.find(el => el.name == 'ДРАУГ') || userObj.cardHand.find(el => el.name == 'ДРАУГ');

    userObj.graveyard = userObj.graveyard ? userObj.graveyard :  [];
    //start the function for player
    if (userObj.graveyard.find(el => el.type == 'Bronze') || userObj.graveyard.find(el => el.type == 'Silver')) {

        userObj.topRow = userObj.topRow ? userObj.topRow :  [];
        userObj.middleRow = userObj.middleRow ? userObj.middleRow : [];
        userObj.bottomRow = userObj.bottomRow ? userObj.bottomRow : [];
    
        switch(randomPositionPlayer){
            case 0: 
                userObj.topRow = [...userObj.topRow, draugCard] ;
                putOnRow(userObj.topRow, '#player-topRow'); 
                break;
            case 1: 
                userObj.middleRow = [...userObj.middleRow, draugCard]; 
                putOnRow(userObj.middleRow, '#player-middleRow');  
                break;
            case 2: 
                userObj.bottomRow = [...userObj.bottomRow, draugCard]; 
                putOnRow(userObj.bottomRow, '#player-bottomRow');  
                break;
        }
    }

    //start the function for opponent
    if (opponentObj.graveyard.find(el => el.type == 'Bronze') || opponentObj.graveyard.find(el => el.type == 'Silver')) {

        opponentObj.topRow = opponentObj.topRow ? opponentObj.topRow :  [];
        opponentObj.middleRow = opponentObj.middleRow ? opponentObj.middleRow : [];
        opponentObj.bottomRow = opponentObj.bottomRow ? opponentObj.bottomRow : [];
    
        switch(randomPositionOpponent){
            case 0: 
                opponentObj.topRow = [...opponentObj.topRow, draugCard] ;
                putOnRow(opponentObj.topRow, '#opponent-topRow'); 
                break;
            case 1: 
                opponentObj.middleRow = [...opponentObj.middleRow, draugCard]; 
                putOnRow(opponentObj.middleRow, '#opponent-middleRow');  
                break;
            case 2: 
                opponentObj.bottomRow = [...opponentObj.bottomRow, draugCard]; 
                putOnRow(opponentObj.bottomRow, '#opponent-bottomRow');  
                break;
        }
    }


    // const playerIdx = JSON.parse(localStorage.getItem('index'));
    // const opponentIdx = playerIdx === 0 ? 1 : 0;

    // Promise.all([updateUserObject(userObj, playerIdx), updateUserObject(opponentObj, opponentIdx)])
    //     .then(() => calculateTotalNumberOfPoints())
    //     .then(() => drawingOfOpponentStep())
    //     .then(() => displayResult())

        // console.log('userObj.cardHand', userObj.cardHand);
    // updateUserObject(userObj, playerIdx);
    // updateUserObject(opponentObj, opponentIdx);
    // // console.log(opponentObj);

    // firebase.database().ref(`rooms/${localStorage.getItem('roomID')}`).once('value').then(snap => console.log('snap', snap.val()));
    // Promise.all([drawingOfOpponentStep(), displayResult(), calculateTotalNumberOfPoints()])
        // .then(() => updateUserObject(userObj, playerIdx))
        // .then(() => updateUserObject(opponentObj, opponentIdx));



    opponentObj.topRowSum = opponentObj.topRow.reduce((acc, el)=> acc + el.strength, 0);
    opponentObj.middleRowSum = opponentObj.middleRow.reduce((acc, el)=> acc + el.strength, 0);
    opponentObj.bottomRowSum = opponentObj.bottomRow.reduce((acc, el)=> acc + el.strength, 0);
    opponentObj.total = opponentObj.topRowSum + opponentObj.middleRowSum + opponentObj.bottomRowSum;

    drawingOfOpponentStep();
    displayResult();
    calculateTotalNumberOfPoints();
}

// ability: "Создайте бронзового трупоеда(ОЗЗРЕЛ) или инсектоида(ОГРОМНЫЙ ГЛАВОГЛАЗ) и усильте его на 3 ед",
// name: "ГНЕЗДО ЧУДОВИЩ",
// positions: ["Melee"],
// strength: 0,
// type: "Silver",
// img: '../img/Monster/MONSTER NEST.png',
// audio: '../audio/Monster/HARPY.mp3'

export function MONSTER_NEST({userObj}) {
    const randomNum = Math.round(Math.random());
    const randomPosition = Math.floor(Math.random() * 3);

    const ozzrel = userObj.deck.find(el => el.name == 'ОЗЗРЕЛ') || userObj.cardHand.find(el => el.name == 'ОЗЗРЕЛ');
    const arachasBehemoth = userObj.deck.find(el => el.name == 'ОГРОМНЫЙ_ГЛАВОГЛАЗ') || userObj.cardHand.find(el => el.name == 'ОГРОМНЫЙ_ГЛАВОГЛАЗ');
    
    console.log(ozzrel);

    let newCard = randomNum ? ozzrel : arachasBehemoth;

    newCard.strength = newCard.strength + 3;


    userObj.topRow = userObj.topRow ? userObj.topRow :  [];
    userObj.middleRow = userObj.middleRow ? userObj.middleRow : [];
    userObj.bottomRow = userObj.bottomRow ? userObj.bottomRow : [];

    switch(randomPosition){
        case 0: 
            userObj.topRow = [...userObj.topRow, newCard] ;
            putOnRow(userObj.topRow, '#player-topRow'); 
            break;
        case 1: 
            userObj.middleRow = [...userObj.middleRow, newCard]; 
            putOnRow(userObj.middleRow, '#player-middleRow');  
            break;
        case 2: 
            userObj.bottomRow = [...userObj.bottomRow, newCard]; 
            putOnRow(userObj.bottomRow, '#player-bottomRow');  
            break;
    }
}

// ability: "Усильте сильнейший бронзовый или серебряный отряд из вашей колоды на 2 ед. и сыграйте его",
// name: "ДВОЙНОЙ КРЕСТ АЛЬЗУРА",
// positions: ["Melee"],
// strength: 0,
// type: "Silver",
// img: '../img/Neutral/ALZUR\'S DOUBLE–CROSS.png',
// audio: '../audio/Monster/ARCHANAS.mp3'

export function ALZURS_DOUBLE_CROSS({userObj}) {
    const bronzeAndSilverCards = userObj.deck.filter(el => el.type != "Gold");
    const strongestBronzeOrSilverCard = bronzeAndSilverCards.sort((a, b) => b.strength - a.strength)[0];

    strongestBronzeOrSilverCard.strength = strongestBronzeOrSilverCard.strength + 2;

    userObj.deck.splice(userObj.deck.indexOf(strongestBronzeOrSilverCard), 1);

    const positionsIdx = Math.floor(Math.random() * strongestBronzeOrSilverCard.positions.length);

    userObj.topRow = userObj.topRow ? userObj.topRow :  [];
    userObj.middleRow = userObj.middleRow ? userObj.middleRow : [];
    userObj.bottomRow = userObj.bottomRow ? userObj.bottomRow : [];

    switch(positionsIdx){
        case 0: 
            userObj.topRow = [...userObj.topRow, strongestBronzeOrSilverCard] ;
            putOnRow(userObj.topRow, '#player-topRow'); 
            break;
        case 1: 
            userObj.middleRow = [...userObj.middleRow, strongestBronzeOrSilverCard]; 
            putOnRow(userObj.middleRow, '#player-middleRow');  
            break;
        case 2: 
            userObj.bottomRow = [...userObj.bottomRow, strongestBronzeOrSilverCard]; 
            putOnRow(userObj.bottomRow, '#player-bottomRow');  
            break;
    }  
}

export function ROYAL_DECREE({userObj}) {
    const goldCardsArr = userObj.deck.filter(el => el.type == "Gold");
    const goldCardIdx = Math.floor(Math.random() * goldCardsArr.length);

    const randomGoldCard = goldCardsArr[goldCardIdx];

    userObj.deck.splice(userObj.deck.indexOf(randomGoldCard), 1);

    randomGoldCard.strength = randomGoldCard.strength * 2;

    const positionsIdx = Math.floor(Math.random() * randomGoldCard.positions.length);

    userObj.topRow = userObj.topRow ? userObj.topRow :  [];
    userObj.middleRow = userObj.middleRow ? userObj.middleRow : [];
    userObj.bottomRow = userObj.bottomRow ? userObj.bottomRow : [];

    switch(positionsIdx){
        case 0: 
            userObj.topRow = [...userObj.topRow, randomGoldCard] ;
            putOnRow(userObj.topRow, '#player-topRow'); 
            break;
        case 1: 
            userObj.middleRow = [...userObj.middleRow, randomGoldCard]; 
            putOnRow(userObj.middleRow, '#player-middleRow');  
            break;
        case 2: 
            userObj.bottomRow = [...userObj.bottomRow, randomGoldCard]; 
            putOnRow(userObj.bottomRow, '#player-bottomRow');  
            break;
    }  
    
        // console.log('goldCardsArr', goldCardsArr);
    // console.log('goldCardIdx', goldCardIdx);
    // console.log('goldCrandomGoldCardardIdx', randomGoldCard);
    // console.log('randomGoldCard.strength',  randomGoldCard.strength);
    // console.log('positionsIdx', positionsIdx);
}


///////////////////////
//
// Nothern Realms deck
//
///////////////////////

export function REDANIAN_KNIGHT_ELECT({userObj, selectedCard, rowForAbilities}) {

    //

};

export function REDANIAN_KNIGHT({userObj, selectedCard, rowForAbilities}) {

    //

};

export function REDANIAN_ELITE({userObj, selectedCard, rowForAbilities}) {

    //

};

// ability: "Размещение: выберите другой бронзовый дружественный отряд и сыграйте его копию из вашей колоды",
// name: "РАЗВЕДЧИК РУБАЙЛ",
// positions: ["Ranged"],
// strength: 1,
// type: "Bronze",
// img: '../img/NorthernRealms/REAVER SCOUT.png',
// audio: '../audio/NorthernRealms/REAVER SCOUT.mp3'

export function REAVER_SCOUT({userObj, rowForAbilities}) { 

// choose Bronze cards
    const bronzeCards =  userObj.deck.filter(elem=> elem.type === "Bronze"); 
    const bronzeCard = bronzeCards[Math.floor(Math.random()*bronzeCards.length)]
// remove from original array
    const bronzeCardIndex = bronzeCards.indexOf(bronzeCard)
    userObj.deck.splice(bronzeCardIndex,1);

    switch(rowForAbilities){
        case "player-topRow": 
            userObj.topRow = [...userObj.topRow, bronzeCard] ;
            putOnRow(userObj.topRow, '#player-topRow'); 
            break;
        case "player-middleRow": 
            userObj.middleRow = [...userObj.middleRow, bronzeCard]; 
            putOnRow(userObj.middleRow, '#player-middleRow');  
            break;
        case "player-bottomRow": 
            userObj.bottomRow = [...userObj.bottomRow, bronzeCard]; 
            putOnRow(userObj.bottomRow, '#player-bottomRow');  
            break;
    }  
}

export function PRINCE_STENNIS({userObj, selectedCard, rowForAbilities}) {

    //

};

export function SILE_DE_TANSARVILLE({userObj, selectedCard, rowForAbilities}) {

    //

};

export function TROLLOLOLO({userObj, selectedCard, rowForAbilities}) {

    //

};

export function KAEDWENI_CAVALRY({userObj, selectedCard, rowForAbilities}) {

    //

};

export function DETHMOLD({userObj, selectedCard, rowForAbilities}) {

    //

};

export function SHANI({userObj, selectedCard, rowForAbilities}) {

    //

};

export function GERALT_IGNI({userObj, selectedCard, rowForAbilities}) {

    //

};

export function KEIRA_METZ({userObj, selectedCard, rowForAbilities}) {

    //

};

export function FIRST_LIGHT({userObj, selectedCard, rowForAbilities}) {

    //

};

export function THUNDERBOLT({userObj, selectedCard, rowForAbilities}) {

    //

};

export function MARCHING_ORDERS({userObj, selectedCard, rowForAbilities}) {

    //

};

export function THALER({userObj, selectedCard, rowForAbilities}) {

    //

};

export function SIGISMUND_DIJKSTRA({userObj, selectedCard, rowForAbilities}) {

    //

};

export const allAbilities = { 
// Monster deck
    SLYZARD,
    ARACHAS_DRONE,
    CELAENO_HARPY,
    ARACHAS_BEHEMOTH,
    FORKTAIL,
    OZZREL,
    MORVUDD,
    RUEHIN,
    FRIGHTENER,
    YENNEFER,
    TRISS_BUTTERFLIES,
    DRAUG,
    MONSTER_NEST,
    ALZURS_DOUBLE_CROSS,
    ROYAL_DECREE,
// Nothern Realms deck
    REDANIAN_KNIGHT_ELECT,
    REDANIAN_KNIGHT,
    REDANIAN_ELITE,
    REAVER_SCOUT,
    PRINCE_STENNIS,
    SILE_DE_TANSARVILLE,
    TROLLOLOLO,
    KAEDWENI_CAVALRY,
    DETHMOLD,
    SHANI,
    GERALT_IGNI,
    KEIRA_METZ,
    FIRST_LIGHT,
    THUNDERBOLT,
    MARCHING_ORDERS,
    THALER,
    SIGISMUND_DIJKSTRA,
};