import '../sass/exchange_card.scss';

export function changeCardAfterRaund (obj){
    const body = document.querySelector('body');
    const exchange_card__selection = document.querySelector('.exchange-card__selection');
    const exchange_card__wrapper = document.querySelector('.exchange-card__wrapper');
    const exchange_card__title = document.querySelector(".exchange-card__title");
    const exchange_card__subtitle = document.querySelector(".exchange-card__subtitle");
    const exchange_card__imgOndivInfo = document.querySelector('.exchange-card__imgOndivInfo');
    const btnShutDown = document.querySelector('.exchange-card__btnShutDown');
    const exchange_card__btnConfirm = document.querySelector(".exchange-card__btnConfirm")


    function threeRandomCardAfterRaund(obj) {
        let i = 0;
        while (i < 3) {
            const randomCard = Math.floor(Math.random() * ((obj.deck).length))
            const cardToGraveyard = obj.deck[randomCard]
            obj.deck.splice(`${randomCard}`, 1)
            obj.cardHand.push(cardToGraveyard)
            i++
        }
        paintCardOnBoard(obj)
        timerModal();
    }
    
    
    function paintCardOnBoard(obj){
        body.innerHTML = `
    <div class="exchange-card__wrapper">
        <div class="exchange-card__ChousCard">Выберите карту</div>
        <div class="exchange-card__allContainer">
            <div class="exchange-card__container">
                <div class="exchange-card__selection">
                   
                </div>
                <div class="exchange-card__info">
                    <div class="exchange-card__infoImg">
                        <img src="" alt="" class="exchange-card__imgOndivInfo" data-name='sdds4tde'>
                    </div>
                    <div class="exchange-card__title"></div>
                    <div class="exchange-card__subtitle"></div>
                </div>
            </div>
            <div class="exchange-card__btnConfirm">Обмен</div>
            <div class="exchange-card__btnShutDown">Продолжить</div>
        </div>
    </div>`
    
        let exchange_card__cardOnBoard = obj.cardHand.reduce((acc, el) => acc + `<div class ='exchange-card__cardOnBoard'><img class = 'exchange-card__img' src=${el.img} alt="" data-name=${el.name}></div>`, '');
        exchange_card__selection.innerHTML += exchange_card__cardOnBoard;
    }
    
    threeRandomCardAfterRaund(obj)
    
    
        function timerModal() {
            let x = setInterval(fn => {
            exchange_card__wrapper.classList.add('exchange-card__displayNone')
            clearTimeout(x)
            }, 20000)}
    
        
    
        function fnShutDown() {
            exchange_card__wrapper.classList.add('exchange-card__displayNone')
            JSON.stringify(localStorage.removeItem('idxForChangeCard'))
        };
        exchange_card__selection.addEventListener('click', (() => selectCard(event, userObj)))
        btnShutDown.addEventListener('click', fnShutDown);
    
    
    function selectCard(event,obj) {
        if (event.target.nodeName !== 'IMG'){
            return}
        else {
        const x = document.querySelectorAll('.exchange-card__img');
        x.forEach(el => el.classList.remove('exchange-card__giveClass'));
        event.target.classList.add('exchange-card__giveClass');
        }
        let z = event.target.src;
        console.log(event.target);
        exchange_card__imgOndivInfo.setAttribute('src', z);
        let y = event.target.dataset.name;
        let idxImg = obj.cardHand.find(el => el.name === y)
        exchange_card__title.innerHTML = `${idxImg.name}`;
        exchange_card__subtitle.innerHTML = `${idxImg.ability}`;
        let index =  obj.cardHand.indexOf(idxImg)
        JSON.stringify(localStorage.setItem('idxForChangeCard',`${index}`))
        console.log(obj.cardHand);
    }
        exchange_card__btnConfirm.addEventListener('click',(()=>fnChangeCard(userObj)))
    
    function fnChangeCard(obj){
       
        let indxCardOnLocalStorage = JSON.parse(localStorage.getItem('idxForChangeCard'))
        if (indxCardOnLocalStorage > 0){
            let cardOnHand = obj.cardHand.splice(indxCardOnLocalStorage,1)[0];
            let cardOnDeck = obj.deck.splice(Math.floor(Math.random()*obj.deck.length),1)[0]
            obj.cardHand.push(cardOnDeck)
            obj.deck.push(cardOnHand)
            exchange_card__wrapper.classList.add('exchange-card__displayNone')
            JSON.stringify(localStorage.removeItem('idxForChangeCard'))
        }}
    }
