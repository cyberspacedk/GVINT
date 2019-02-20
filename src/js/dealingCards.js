'use strict';

import '../sass/dealingcards.scss';
import { cards } from './cards';
import monsterReverse from '../img/Factions/faction-monsters.png';
import northernReverse from '../img/Factions/faction-northern-realms.png';

// import DETHMOLD from '../img/NorthernRealms/DETHMOLD.png';
// import GERALT_IGNI from '../img/NorthernRealms/GERALT_IGNI.png';
// import KAEDWENI_CAVALRY from '../img/NorthernRealms/KAEDWENI CAVALRY.png';
// import KEIRA_METZ from '../img/NorthernRealms/KEIRA METZ.png';
// import King_Foltest from '../img/NorthernRealms/King Foltest.png';
// import PRINCE_STENNIS from '../img/NorthernRealms/PRINCE STENNIS.png';

export function dealingCards(player, opponent) {
	let playerHand = fillCardHand(player);
	let opponentHand = fillCardHand(opponent);
	putOnBoard(playerHand, '#player-hand');
	putOnBoard(opponentHand, '#opponent-hand');
}

function putOnBoard(arr, container) {
	let reg = /[ \w-]+?(?=\.)/gi;
	let div = document.querySelector(container);
	let str = arr.reduce(
		(acc, el) =>
			acc +`<div class="card_in_hands"><img src=${"#player-hand" === container? cards[el.img.match(reg)[0]] : monsterReverse} class="img_size" data-name=${el.name}></div>`,'');
	console.log(str);
	div.innerHTML = str;
}

function fillCardHand(userObj) {
	let movedCard = null;
	let idx = null;
	let i = 0;
	userObj.cardHand = [];
	while (i < 10) {
		idx = Math.round(Math.random() * userObj.deck.length);
		movedCard = userObj.deck.splice(idx, 1);
		userObj.cardHand.push(movedCard[0]);
		i++;
	}
	return userObj.cardHand;
}
