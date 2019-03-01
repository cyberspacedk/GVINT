"use strict"; 
import {putOnRow} from './dealingCards'; 
import { readDeck } from "./server";


//  helper function -----------

function checkEmpty(userObj){
    userObj.topRow = userObj.topRow ? userObj.topRow :  [];
    userObj.middleRow = userObj.middleRow ? userObj.middleRow : [];
    userObj.bottomRow = userObj.bottomRow ? userObj.bottomRow : [];
}
  
function whatRow(row, userObj, card){
    if(row == "player-topRow"){
        userObj.topRow = [...userObj.topRow, card] ;
        putOnRow(userObj.topRow, '#player-topRow');
    }
    else if(row == "player-middleRow"){
        userObj.middleRow = [...userObj.middleRow, card]; 
        putOnRow(userObj.middleRow, '#player-middleRow');
    }
    else if(row == "player-bottomRow"){ 
            userObj.bottomRow = [...userObj.bottomRow, card]; 
            putOnRow(userObj.bottomRow, '#player-bottomRow');
    } 
}


// ability: "Размещение: сыграйте все копии этого отряда из вашей колоды.",
// WHO :  name: "ГЛАВОГЛАЗ"
export function ARACHAS_DRONE(userObj, card, container){ 
    checkEmpty(userObj);
 
    const sameCards =  userObj.deck.filter(elem=> elem.name === "ГЛАВОГЛАЗ");  
    userObj.deck = userObj.deck.filter(elem=> elem.name !== "ГЛАВОГЛАЗ");  
  
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
  

// ability: "Размещение: создайте 2 Яйца гарпий слева"
// WHO : name: "ГАРПИЯ_КЕЛЕНО",
export function CELAENO_HARPY(userObj, container){ 
        checkEmpty(userObj);
        const powerCards = userObj.deck.filter(elem => elem.strength > 0)
                                        .filter(elem=> elem.name == 'ГАРПИЯ_КЕЛЕНО'); 
        const randomCards = [powerCards[Math.floor(Math.random()*powerCards.length)],
                             powerCards[Math.floor(Math.random()*powerCards.length)]
                            ];  
      
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
    }

 
// There are 2 bugs: dont count strength and dont count total row 
// ability: "Создавайте Молодого главоглаза в случайном ряду. Размещение: добавьте 2 ед. силы",
// WHO :  name: "ОГРОМНЫЙ ГЛАВОГЛАЗ",
 export function ARACHAS_BEHEMOTH(userObj){  

    checkEmpty(userObj);

    const availiableRow = ['player-topRow' , 'player-middleRow', 'player-bottomRow'];
    const randomRow = availiableRow[Math.floor(Math.random()*availiableRow.length)]; 

    readDeck().then(data => {   
        const powerCard = {
           ...data.find(elem => elem.name == 'ГЛАВОГЛАЗ'), 
           strength: 5,
        }; 
        whatRow(randomRow,userObj,powerCard);  
    });  
 }

// ability: "Поглотите 2 союзников и усилите себя их силой.",
// WHO : name: "ВИЛКОХВОСТ",
export function FORKTAIL(userObj, card){
    checkEmpty(userObj);  

    const powerCards = userObj.cardHand.filter(elem => elem.strength > 0); 
    const randomCards = [powerCards[Math.floor(Math.random()*powerCards.length)],
                         powerCards[Math.floor(Math.random()*powerCards.length)]];
    const needMorePower =  randomCards.reduce((acc,elem)=> acc+elem.strength, 0);  

    card.strength +=needMorePower; 
    userObj.cardHand.splice(userObj.cardHand.indexOf(randomCards[0]),1);
    userObj.cardHand.splice(userObj.cardHand.indexOf(randomCards[1]),1); 
    
    putOnRow( userObj.cardHand, '#player-hand');  
 
} 