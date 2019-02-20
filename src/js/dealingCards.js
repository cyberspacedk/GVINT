'use strict';

import '../sass/dealingcards.scss';
import { cards } from './cards';
import monsterReverse from '../img/Factions/faction-monsters.png';
import northernReverse from '../img/Factions/faction-northern-realms.png';


import DRAUG from '../img/Monster/DRAUG.png';
import ARACHAS_BEHEMOTH from '../img/Monster/ARACHAS_BEHEMOTH.png';
import ARACHAS_DRONE from '../img/Monster/ARACHAS_DRONE.png';
import ARACHAS_QUEEN from '../img/Monster/ARACHAS_QUEEN.png';
import CELAENO_HARPY from '../img/Monster/CELAENO_HARPY.png';
import FORKTAIL from '../img/Monster/FORKTAIL.png';
import FRIGHTENER from '../img/Monster/FRIGHTENER.png';
import MONSTER_NEST from '../img/Monster/MONSTER_NEST.png';
import MORVUDD from '../img/Monster/MORVUDD.png';
import OZZREL from '../img/Monster/OZZREL.png';
import RUEHIN from '../img/Monster/RUEHIN.png';
import SLYZARD from '../img/Monster/SLYZARD.png';
import TRISS_BUTTERFLIES from '../img/Monster/TRISS_BUTTERFLIES.png';
import YENNEFER from '../img/Monster/YENNEFER.png';

export function dealingCards(player, opponent) {
 player.deck.forEach(el => console.log(el.name));
	let playerHand = fillCardHand(player);
	let opponentHand = fillCardHand(opponent);
	let opponentFaction = opponent.faction;
	putOnBoard(opponentFaction, playerHand, '#player-hand');
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

// console.table(DRAUG, ARACHAS_BEHEMOTH, ARACHAS_DRONE, ARACHAS_QUEEN, CELAENO_HARPY, FORKTAIL, FRIGHTENER, MONSTER_NEST, MORVUDD, OZZREL, RUEHIN, SLYZARD, TRISS_BUTTERFLIES, YENNEFER);

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
	console.log(userObj.cardHand);
	return userObj.cardHand;
}
