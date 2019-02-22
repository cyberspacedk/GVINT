import sound from '../audio/Main_Theme/MainTheme.mp3';
import monsters from './monster-deck';
import northern from './northern-realms-deck';
import { userEnter, userExit, updateUserObject} from './server';
import { start } from './start-game';
import { chooseDeck } from './chooseDeck';
import { dealingCards } from './dealingCards';
import './coinflip';


import '../sass/styles.scss';


const startBtn = document.querySelector('.accept-button');
const deckContainer = document.querySelector('.faction-choose');

window.addEventListener('DOMContentLoaded', () => {
    let monsters = Math.round(Math.random())===0;

    localStorage.setItem('faction', `${monsters ? `"monsters"` : `"nothernRealms"`}`);
	userEnter();
});
window.addEventListener('unload', userExit);// якщо закриваємо вкладку в браузері запускаємоо метод userExit
startBtn.addEventListener('click', start);
deckContainer.addEventListener('click', chooseDeck);






