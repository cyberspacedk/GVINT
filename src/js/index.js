import { userEnter, userExit, updateUserSingleProperty} from './server';
import { start } from './start-game'; 
import { chooseDeck } from './chooseDeck';
import { dealingCards } from './dealingCards';
import {MakingMove} from "./MakingMove";
// sounds
import maintheme from '../audio/Background/maintheme.mp3'
import northsound from '../audio/Background/northdeck.mp3';
import monstersound from '../audio/Background/monstersound.mp3';
import startgame from "../audio/Background/hovercards.mp3";
import hoverdeck from '../audio/Background/hoverdeck.wav';



import '../sass/styles.scss';


const startBtn = document.querySelector('.accept-button');
const deckContainer = document.querySelector('.faction-choose');


window.addEventListener('DOMContentLoaded', () => {
    let monsters = Math.round(Math.random())===0;

    localStorage.setItem('faction', `${monsters ? `"monsters"` : `"nothernRealms"`}`);
	userEnter();
	// background sound
	const MTHEME = new Audio();
	MTHEME.src= maintheme;
	MTHEME.play();
	
 
	const faction = document.querySelector('.faction-choose'); 

	faction.addEventListener('click' , (e)=>{ 
		if(e.target.nodeName !== 'IMG' || e.target.classList.contains('coming-soon')) return ; 
		document.querySelectorAll('.faction-face').forEach(el=>el.classList.remove('choosen'));
		e.target.classList.add('choosen');
		const NRS = new Audio();
		const MS = new Audio();
		NRS.src = northsound;
		MS.src = monstersound;
		(e.target.dataset.faction === 'monsters') ? MS.play() : 	NRS.play();
	})
 
	faction.addEventListener('mouseover',  (e)=>{ 
		if(e.target.nodeName !== 'IMG' || e.target.classList.contains('coming-soon')) return ; 
		e.target.classList.add('mousemove'); 
		const HOVERDECK = new Audio();
		HOVERDECK.src = hoverdeck;
        HOVERDECK.currentTime = 0;
        HOVERDECK.play();
	});

	faction.addEventListener('mouseout',  (e)=>{ 
		if(e.target.nodeName !== 'IMG' || e.target.classList.contains('coming-soon')) return ; 
		e.target.classList.remove('mousemove'); 
	}); 

	startBtn.addEventListener('mouseover', ()=>{
		const HOVERSTART = new Audio();
		HOVERSTART.src = startgame;
		HOVERSTART.play();
	})

});
window.addEventListener('unload', userExit);// якщо закриваємо вкладку в браузері запускаємоо метод userExit
startBtn.addEventListener('click', start);
deckContainer.addEventListener('click', chooseDeck);

 
//   let makingMove = new MakingMove();
//   makingMove.start(userObj);
import './coinflip';

