import "../sass/styles.scss";
import sound from '../audio/Main_Theme/MainTheme.mp3';
import monsters from './monster-deck';
import northern from './northern-realms-deck';
 
window.addEventListener('DOMContentLoaded',()=>{ 
    const mainTheme = new Audio();
    mainTheme.src = '../audio/Main_Theme/MainTheme.mp3';
    mainTheme.play(); 
})
