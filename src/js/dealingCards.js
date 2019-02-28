'use strict';

import '../sass/dealingcards.scss';
import { cards } from './cards';
import monsterReverse from '../img/Factions/faction-mon-copy.png';
import northernReverse from '../img/Factions/faction-northern-realms.png';
import { updateUserSingleProperty } from "./server";

// victory images
import victoryImage0 from '../img/zero-victory.png';
import victoryImage1 from '../img/one-victory.png';
import victoryImage2 from '../img/two-victories.png';


export function dealingCards(player, opponent) {
	let playerHand = fillCardHand(player).hand;
	let opponentHand = fillCardHand(opponent).hand;

	updateUserSingleProperty('cardHand', playerHand, JSON.parse(localStorage.getItem('index')));
	updateUserSingleProperty('deck', player.deck, JSON.parse(localStorage.getItem('index')));

	let playerFaction = player.faction;
	let opponentFaction = opponent.faction;
	putOnBoard(playerFaction, playerHand, '#player-hand');
	putOnBoard(opponentFaction, opponentHand, '#opponent-hand');

	displayedPlayerData(player, opponent);
}

export function putOnBoard(opponentFaction, arr, container) {
	let reg = /[ \w-]+?(?=\.)/gi;
	let div = document.querySelector(container);
	arr = arr? arr : [];
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
				<img src=${cards[el.img.match(reg)[0]]} class="img_size" data-name=${el.name}>
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

function displayedPlayerData (user, opponent){

	// count cards
	let totalUserCards = document.querySelector('.battlefield__bottom .remaining-cards__number');
	let totalOpponentCards = document.querySelector('.battlefield__top .remaining-cards__number');

	// names
	let userName = document.querySelector('.player-block__name');
	let opponentName = document.querySelector('.opponent-block__name');

	// count victory
	let userVictoryCount = document.querySelector('.battlefield__bottom .battlefield__round-score');
	let opponentVictoryCount = document.querySelector('.battlefield__top .battlefield__round-score');

	// display count cards
	totalUserCards.textContent = user.cardHand.length;
	totalOpponentCards.textContent = opponent.cardHand.length;

	// display player name
	userName.textContent = user.name;
	opponentName.textContent = opponent.name;

	// display victory
	let victoryImages = [victoryImage0, victoryImage1, victoryImage2]

    userVictoryCount.style.backgroundImage = `url(${victoryImages[user.victoryCount]})`;
    opponentVictoryCount.style.backgroundImage = `url(${victoryImages[opponent.victoryCount]})`; 

}