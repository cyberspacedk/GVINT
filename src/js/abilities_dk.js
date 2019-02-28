"use strict";
import {putOnRow} from './dealingCards';

 /* 
      ability: "Размещение: сыграйте все копии этого отряда из вашей колоды.",
      name: "ГЛАВОГЛАЗ",
      positions: ["Ranged"],
      strength: 3,
      type: "Bronze",
      img: '../img/Monster/ARACHAS DRONE.png',
      audio: '../audio/Monster/ARCHANAS.mp3'
 */

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
    console.log('Abilities ---- userObj.deck', userObj.deck);
    console.log('Abilities ---- sameCards', sameCards);
    console.log('Abilities ---- container', container); 
    

}
 


export const allAbilities = { 
    ARACHAS_DRONE, 
};