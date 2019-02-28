"use strict";
import {putOnRow} from './dealingCards';

// export function ARACHAS_DRONE(userObj, card, container){ 

// // choose the same cards
//     const sameCards =  userObj.deck.filter(elem=> elem.img === card.img); 
// // remove from original array
//     userObj.deck = userObj.deck.filter(elem=> elem.img !== card.img);  
    
//     userObj.topRow = userObj.topRow ? userObj.topRow :  [];
//     userObj.middleRow = userObj.middleRow ? userObj.middleRow : [];
//     userObj.bottomRow = userObj.bottomRow ? userObj.bottomRow : [];
  
//     switch(container){
//         case "player-topRow": 
//             userObj.topRow = [...userObj.topRow, ...sameCards] ;
//             putOnRow(userObj.topRow, '#player-topRow'); 
//             break;
//         case "player-middleRow": 
//             userObj.middleRow = [...userObj.middleRow, ...sameCards]; 
//             putOnRow(userObj.middleRow, '#player-middleRow');  
//             break;
//         case "player-bottomRow": 
//             userObj.bottomRow = [...userObj.bottomRow, ...sameCards]; 
//             putOnRow(userObj.bottomRow, '#player-bottomRow');  
//             break;
//     }   
//     console.log('Abilities ARACHAS_DRONE',card);

// }
  


export function CELAENO_HARPY(userObj, card, container){ 

        const powerCards = userObj.deck.filter(elem => elem.strength > 0);
        
        const randomCards = [powerCards[Math.floor(Math.random()*powerCards.length)],
                             powerCards[Math.floor(Math.random()*powerCards.length)]
                            ]; 
 
        userObj.topRow = userObj.topRow ? userObj.topRow :  [];
        userObj.middleRow = userObj.middleRow ? userObj.middleRow : [];
        userObj.bottomRow = userObj.bottomRow ? userObj.bottomRow : [];
      
        switch(container){
            case "player-topRow": 
                userObj.topRow = [...userObj.topRow, ...randomCards] ;
                putOnRow(userObj.topRow, '#player-topRow'); 
                break;
            case "player-middleRow": 
                userObj.middleRow = [...userObj.middleRow, ...randomCards]; 
                putOnRow(userObj.middleRow, '#player-middleRow');  
                break;
            case "player-bottomRow": 
                userObj.bottomRow = [...userObj.bottomRow, ...randomCards]; 
                putOnRow(userObj.bottomRow, '#player-bottomRow');  
                break;
        }   
        console.log('Abilities CELAENO_HARPY',card);
    }
    
 