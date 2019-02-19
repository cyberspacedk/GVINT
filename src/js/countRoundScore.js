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

    transferToMainPage();
}

function transferToMainPage() {

}