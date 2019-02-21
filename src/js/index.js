import sound from '../audio/Main_Theme/MainTheme.mp3';
import monsters from './monster-deck';
import northern from './northern-realms-deck';
import { userEnter, userExit, updateUserObject} from './server';
import { start } from './start-game';
import { chooseDeck } from './chooseDeck';
import { dealingCards } from './dealingCards';
import {MakingMove} from "./MakingMove";

import '../sass/styles.scss';


const startBtn = document.querySelector('.accept-button');
const deckContainer = document.querySelector('.faction-choose');

window.addEventListener('DOMContentLoaded', () => {
	userEnter();
});
window.addEventListener('unload', userExit);
startBtn.addEventListener('click', start);
deckContainer.addEventListener('click', chooseDeck);


//   let makingMove = new MakingMove();
//   makingMove.start(userObj);

