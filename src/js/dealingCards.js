'use strict';

import '../sass/dealingcards.scss';

export function dealingCards(obj) {
	let movedCard = null;
	let idx = null;
	while (obj.cardHand.length < 10) {
		idx = Math.round(Math.random() * obj.deck.length);
		movedCard = obj.deck.splice(idx, 1);
		obj.cardHand.push(movedCard[0]);
		putOnBoard(obj.cardHand)
	}
	function putOnBoard(arr, container){
		let div = document.querySelector(container);
		let str = arr.cardHand.reduce((acc, el)=> acc + `<div class="card_in_hands" data-name="${el.name}"><img sec= '${el.img}'></div>`, '');
		div.innerHTML = str;
	};
}
