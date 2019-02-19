'use strict';

import '../sass/dealingcards.scss';
import DETHMOLD from '../img/NorthernRealms/DETHMOLD.png';
import GERALT_IGNI from '../img/NorthernRealms/GERALT_IGNI.png';
import KAEDWENI_CAVALRY from '../img/NorthernRealms/KAEDWENI CAVALRY.png';
import KEIRA_METZ from '../img/NorthernRealms/KEIRA METZ.png';
import King_Foltest from '../img/NorthernRealms/King Foltest.png';
import PRINCE_STENNIS from '../img/NorthernRealms/PRINCE STENNIS.png';





export function dealingCards(obj) {
	let movedCard = null;
	let idx = null;
	let i =0;
	obj.cardHand = [];
	while (i < 10) {
		idx = Math.round(Math.random() * obj.deck.length);
		movedCard = obj.deck.splice(idx, 1);
		obj.cardHand.push(movedCard[0]);
		i ++
	}
	putOnBoard(obj.cardHand, '#player-hand')
	// console.log("HAND" ,obj.cardHand);
	// console.log("DECK", obj.deck);
}
function putOnBoard(arr, container){
	let div = document.querySelector(container);
	let str = arr.reduce((acc, el)=> acc + `<div class="card_in_hands" data-name=${el.name}>
	<img src=${el.img} class="img_size"></div>`, '');
	div.innerHTML = str;

};