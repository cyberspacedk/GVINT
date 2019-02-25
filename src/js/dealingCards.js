'use strict';

import '../sass/dealingcards.scss';
import { cards } from './cards';
import monsterReverse from '../img/Factions/faction-mon-copy.png';
import northernReverse from '../img/Factions/faction-northern-realms.png';
import { updateUserSingleProperty } from "./server";


export function dealingCards(player, opponent) {
	let playerHand = fillCardHand(player).hand;
	let opponentHand = fillCardHand(opponent).hand;

	updateUserSingleProperty('cardHand', playerHand, JSON.parse(localStorage.getItem('index')));
	updateUserSingleProperty('deck', player.deck, JSON.parse(localStorage.getItem('index')));

	let playerFaction = player.faction;
	let opponentFaction = opponent.faction;
	putOnBoard(playerFaction, playerHand, '#player-hand');
	putOnBoard(opponentFaction, opponentHand, '#opponent-hand');
}

function putOnBoard(opponentFaction, arr, container) {
	let reg = /[ \w-]+?(?=\.)/gi;
	let div = document.querySelector(container);
	let str = arr.reduce(
		(acc, el) =>
			acc +`
			<div class="card_in_hands">
				<img src=${"#player-hand" === container? cards[el.img.match(reg)[0]] : opponentFaction === "monsters" ? monsterReverse : northernReverse} class="img_size" data-name=${el.name}>
			</div>`,'');
	div.innerHTML = str;
}
export function putOnRow(arr, container) {
	let reg = /[ \w-]+?(?=\.)/gi;
	let div = document.querySelector(container);
	let str = arr.reduce(
		(acc, el) =>
			acc +`
			<div class="card_in_hands">
			<img class="img_size" src=${cards[el.img.match(reg)[0]]}>
			</div>`,'');
	div.innerHTML = str;
}

function fillCardHand(userObj) {
	let movedCard = null;
	let idx = null;
	let i = 0;
	userObj.cardHand = [];
	while (i < 10) {
		idx = Math.floor(Math.random() * userObj.deck.length);
		movedCard = userObj.deck.splice(idx, 1);
		userObj.cardHand.push(movedCard[0]);
		i++;
	}
	// console.log('user object deck!!!!!!!!!!!!!1', userObj.deck);

	return {hand: userObj.cardHand, deck: userObj.deck};
}

