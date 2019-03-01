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
  
// ability: "Размещение: выберите другой бронзовый дружественный отряд и сыграйте его копию из вашей колоды",

function REAVER_SCOUT(userObj, card, container){ 

    // choose Bronze cards
        const bronzeCards =  userObj.deck.filter(elem=> elem.type === "Bronze"); 
        const bronzeCard = bronzeCards[Math.floor(Math.random()*bronzeCards.length)]
    // remove from original array
        const bronzeCardIndex = bronzeCards.indexOf(bronzeCard)
        userObj.deck.splice(bronzeCardIndex,1);

        switch(container){
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

export const allAbilities = { 
    ARACHAS_DRONE, 
    REAVER_SCOUT,
};