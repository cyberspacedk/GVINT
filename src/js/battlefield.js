import '../sass/battlefield.scss';
export const body = document.querySelector('body');

export function renderBattlefield(container) {
    container.innerHTML = `
    <div class="battlefield__wrapper">

        <div class="battlefield__top">
            <div class="battlefield__opponent-block opponent-block">
                <img src="" alt="" class="opponent-block__image">
                <div class="opponent-block__info">
                    <p class="opponent-block__name"></p>
                    <p class="opponent-block__system"></p>
                </div>
            </div>
            <div class="battlefield__current-score"></div>
            <div class="battlefield__round-score"></div>
            <div class="battlefield__remaining-cards remaining-cards">
                <div class="remaining-cards__image"></div>                
                <p class="remaining-cards__number"></p>
            </div>
            <div class="battlefield__general-card"></div>
            <div class="battlefield__hand hand" id="opponent-hand">
                <div class="hand__card"></div>
                <div class="hand__card"></div>
                <div class="hand__card"></div>
                <div class="hand__card"></div>
                <div class="hand__card"></div>
                <div class="hand__card"></div>
                <div class="hand__card"></div>
                <div class="hand__card"></div>
                <div class="hand__card"></div>
                <div class="hand__card"></div>
            </div>
            <div class="battlefield__graveyard-wrapper">
                <div class="battlefield__graveyard"></div>
            </div>
            <div class="battlefield__remaining-deck"></div>
        </div>

    <div class="battlefield__container">
        <div class="battlefield__main">
            <div class="battlefield__middle">
                <div class="middle__left">
                    <div class="left__timer"></div>
                    <div class="left__coin"></div>
                </div>
    
                <div class="middle__center">
                    <div class="middle__opponent">
                        <div class="middle__rows rows">
                            <div class="rows__siege" data-name="opponent-topRow" id="opponent-topRow">
                                <span class="rows__score"></span>
                                <div class="rows__row"></div>
                            </div>
                            <div class="rows__range" data-name="opponent-middleRow" id="opponent-middleRow">
                                <span class="rows__score"></span>
                                <div class="rows__row"></div>
                            </div>
                            <div class="rows__melee" data-name="opponent-bottomRow" id="opponent-bottomRow">
                                <span class="rows__score"></span>
                                <div class="rows__row"></div>
                            </div>
                        </div>
                    </div>
                    <div class="middle__player">
                        <div class="middle__rows rows">
                            <div class="rows__melee" data-name="player-bottomRow" id="player-bottomRow">
                                <span class="rows__score"></span>
                                <div class="rows__row"></div>
                            </div>
                            <div class="rows__range" data-name="player-middleRow" id="player-middleRow">
                                <span class="rows__score"></span>
                                <div class="rows__row"></div>
                            </div>
                            <div class="rows__siege" data-name="player-topRow" id="player-topRow">
                                <span class="rows__score"></span>
                                <div class="rows__row"></div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="middle__right">
                    <div class="right__card"></div>
                    <div class="btn-wrapper"><button class="btn-pass">PASS</button></div>
                </div>
    
            </div>
        </div>
    </div>

    <div class="battlefield__bottom">
        <div class="battlefield__player-block player-block">
            <img src="" alt="" class="player-block__image">
            <div class="player-block__info">
                <p class="player-block__name"></p>
                <p class="player-block__system"></p>
            </div>
        </div>
        <div class="battlefield__current-score"></div>
        <div class="battlefield__round-score"></div>
        <div class="battlefield__remaining-cards remaining-cards">
            <div class="remaining-cards__image"></div>
            <p class="remaining-cards__number"></p>
        </div>
        <div class="battlefield__general-card"></div>
        <div class="battlefield__hand hand"  id="player-hand">
            <div class="hand__card"></div>
            <div class="hand__card"></div>
            <div class="hand__card"></div>
            <div class="hand__card"></div>
            <div class="hand__card"></div>
            <div class="hand__card"></div>
            <div class="hand__card"></div>
            <div class="hand__card"></div>
            <div class="hand__card"></div>
            <div class="hand__card"></div>
        </div>
        <div class="battlefield__graveyard-wrapper">
            <div class="battlefield__graveyard battlefield__graveyard--bottom"></div>
        </div>
        <div class="battlefield__remaining-deck"></div>
    </div>

    </div>`
}
