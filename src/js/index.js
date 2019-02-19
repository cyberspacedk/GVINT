import "../sass/styles.scss";
import sound from '../audio/Main_Theme/MainTheme.mp3';
import monsters from './monster-deck';
import northern from './northern-realms-deck';
import {userEnter, userExit} from './server';
import {start} from './start-game';
import {chooseDeck} from './chooseDeck';

const startBtn = document.querySelector('.accept-button');
const deckContainer = document.querySelector('.faction-choose');
 
window.addEventListener('DOMContentLoaded', () => {userEnter()})
window.addEventListener('unload', userExit);
startBtn.addEventListener('click', start);
deckContainer.addEventListener('click', chooseDeck);
