import '../sass/countRoundScore.scss';
import victoryImage0 from '../img/zero-victory.jpg';
import victoryImage1 from '../img/one-victory.jpg';
import victoryImage2 from '../img/two-victories.JPG';


export function coundRoundScores(user1, user2) {
    user1.total = user1.topRowSum + user1.middleRowSum + user1.bottomRowSum;
    user2.total = user2.topRowSum + user2.middleRowSum + user2.bottomRowSum;

    determineWinner(user1, user2);
}

function determineWinner(user1, user2) {
    let victor;
    if (user1.total > user2.total) {
        victor = user1;
        user1.victoryCount++;
    } else if (user2.total > user1.total) {
        victor = user2;
        user2.victoryCount++;
    } else {
        victor = '';
        user1.victoryCount++;
        user2.victoryCount++;
    }

    if (user1.victoryCount === 2 || user2.victoryCount === 2) {
        showWinner(user1, user2);
    } else {
        showRoundEndModal(user1, user2, victor);
    }
}

function showRoundEndModal(user1, user2, victor) {
    let message = victor ? `${victor.name} is the winner` : "it's a draw";

    const body = document.querySelector('body');
    const roundEndModal = document.createElement('div');
    roundEndModal.classList.add('round-end-wrapper');

    roundEndModal.innerHTML = `
        <div class="round-end-container">
            <div class="round-end__modal">
                <div class="round-end__score player-score"></div>
                <div class="round-end__vs-score">
                    <p class="round-end__text">${message}</p>
                    <p class="round-end__numbers">
                        <span class="round-end__number player__number">${user1.total}</span>
                        <span class="round-end__number opponent__number">${user2.total}</span>
                    </p>
                </div>
                <div class="round-end__score opponent-score"></div>
            </div>
        </div>
    `;
    
    body.append(roundEndModal);

    const userOnePoints = roundEndModal.querySelector('.player__number');
    const userTwoPoints = roundEndModal.querySelector('.opponent__number');

    if(user1 === victor) {
        userOnePoints.classList.add('winner');
    } else if (user2 === victor) {
        userTwoPoints.classList.add('winner');
    }

    const user1VictoryCount = roundEndModal.querySelector('.player-score');
    const user2VictoryCount = roundEndModal.querySelector('.opponent-score');

    let victoryImages = [victoryImage0, victoryImage1, victoryImage2]

    user1VictoryCount.style.backgroundImage = `url(${victoryImages[user1.victoryCount]})`;
    user2VictoryCount.style.backgroundImage = `url(${victoryImages[user2.victoryCount]})`;

    setTimeout(() => roundEndModal.remove(), 5000);
}

function showWinner(user1, user2) {
    drawGameOverModal(user1, user2);

    setTimeout(() => transferToMainPage, 5000);
}

function transferToMainPage() {
    const body = document.querySelector('body');

    body.innerHTML = `
        <audio src="./audio/Main_Theme/MainTheme.mp3"></audio>
        <!-- HEADER -->
        <div class="wrap-header">
            <header class="start-page-header container">
                <h1 class="choose-fraction">ВЫБЕРИ СВОЮ КОЛОДУ</h1>
                <p class="description-fraction">
                Выберите фракцию, которая будет использоваться для вновь созданной
                колоды</p>
            </header>
        </div>
        <!-- MAIN -->
        <div class="wrap-main">
            <main class="start-page-main container">
                <div class="faction-explanation">
                    <p class="explanation-desc">
                    Карты в игре "ГВИНТ" разделены на колоды. Каждая колода имеет
                    уникальные карты. Выбери колоду и нажми
                    <span class="action">A</span> чтобы продолжить.
                    </p>
                </div>
                <div class="faction-choose">
                    <div class="mosters-faction">
                        <h2 class="faction-name">монстры</h2>
                        <img class="faction-face" src="./img/Factions/faction-monsters.png" alt="monsters" />
                        <p class="faction-desc"> В конце каждого раунда держите случайного нейтрального или монстрового юнита на своей стороне поля битвы.</p>
                    </div>
                    <div class="northern-faction">
                        <h2 class="faction-name">северные царства</h2>
                        <img class="faction-face" src="./img/Factions/faction-northern-realms.png" alt="northern-realms" />
                        <p class="faction-desc">Всякий раз, когда золотой блок появляется на вашей стороне поля битвы, добавьте 2 к его силе.</p>
                    </div>
                    <div class="scoiatael-faction coming-soon-label">
                        <h2 class="faction-name">Scoia'Tael</h2>
                        <img class="faction-face coming-soon" src="./img/Factions/Scoia'Tael_Icon.png" alt="monsters" />
                        <p class="faction-desc">В начале одного раунда за матч вы можете выбрать, кто играет первым.</p>
                    </div>
                </div>
            </main>
        </div>
        <!-- FOOTER -->
        <div class="wrap-footer">
            <footer class="start-page-footer">
                <button class="accept-button"><span class="action">A</span> ПРИНЯТЬ</button>
            </footer>
        </div>
    `
}

export function drawGameOverModal(user1, user2) {
    const body = document.querySelector('body');
    const gameOverModal = document.createElement('div');
    gameOverModal.classList.add('game-over-wrapper');

    gameOverModal.innerHTML = `
        <div class="game-over-container">
            <div class="game-over__modal">
                <div class="game-over__modal></div>
                <div class="game-over__score player-score"></div>
                <div class="game-over__vs-score">
                    <p class="game-over__text">=</p>
                    <p class="game-over__numbers">
                        <span class="game-over__number player__number"></span>
                        <span class="game-over__number opponent__number"></span>
                    </p>
                </div>
                <div class="game-over__score opponent-score"></div>
            </div>
        </div>
    `;

    body.append(gameOverModal);
}