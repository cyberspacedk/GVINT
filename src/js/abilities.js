"use strict";
import {putOnRow} from './dealingCards';

function ARACHAS_DRONE(userObj, card, container){ 

// choose the same cards
    const sameCards =  userObj.deck.filter(elem=> elem.img === card.img); 
// remove from original array
    userObj.deck = userObj.deck.filter(elem=> elem.img !== card.img);  
    
    userObj.topRow = userObj.topRow ? userObj.topRow :  [];
    userObj.middleRow = userObj.middleRow ? userObj.middleRow : [];
    userObj.bottomRow = userObj.bottomRow ? userObj.bottomRow : [];
  
    switch(container){
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


// ability: "Сыграйте золотой юнит из вашей колоды и увеличьте его на 2.",
// name: "КОРОЛЕВСКИЙ УКАЗ",
// positions: ["Melee"],
// strength: 0,
// type: "Gold",
// img: '../img/Neutral/ROYAL DECREE.png',
// audio: '../audio/Monster/ARCHANAS.mp3'
  
export function ROYAL_DECREE(userObj) {
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

