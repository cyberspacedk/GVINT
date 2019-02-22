// 0) Запустити таймер при старті ходу (60 сек)
// 1) Клік на карту виділяє її і підсвічує ряд куди можна поставити
// 2) Клік на ряд і ставить карту в ряд якщо вона виділена і можна її туди ставити запускається її аудіо файл
// 2,1) Активуємо її властивість
// 2,2) Перерахувати суму ряда і загальну кількість балів в раунді 
// 2,3) Відобразити результат на екрані
// 2,4) Зупинити таймер і передати хід 
import "../sass/MakingMove.scss";

// main controller
class MakingMove{
  constructor (){
      // find hand and row
      this.hand = document.querySelector("#player-hand");
      this.topRow = document.querySelector("#player-topRow");
      this.middleRow = document.querySelector("#player-middleRow");
      this.bottomRow = document.querySelector("#player-bottomRow");
      // to output points
      this.topRowSumDiv = document.querySelector("#player-topRow").previousElementSibling;
      this.middleRowSumDiv = document.querySelector("#player-middleRow").previousElementSibling;
      this.bottomRowSumDiv = document.querySelector("#player-bottomRow").previousElementSibling;
      this.totalDiv = document.querySelector(".battlefield__bottom .battlefield__current-score");
      // timer
      this.countdownTimer = new CountdownTimer(document.querySelector(".left__timer"));
      this.nameOfSelectedCard = null;
      this.selectedCard = null;
      this.selectedCardDiv = null;
      this.userObj = null;
      // bind
      this.start = this.start.bind(this);
      this.handlerClickCard = this.handlerClickCard.bind(this);
      this.handlerClickRow = this.handlerClickRow.bind(this);
      this.activeAbility = this.activeAbility.bind(this);
      this.calculateTotalNumberOfPoints = this.calculateTotalNumberOfPoints.bind(this);
      this.displayResult = this.displayResult.bind(this);
      this.nextTurn = this.nextTurn.bind(this);
  }

  start(userObj){
    // 0) Запустити таймер при старті ходу (60 сек)
    this.userObj = userObj;
    this.countdownTimer.startCountdownTimer(60);
    this.hand.addEventListener("click", this.handlerClickCard);
  }

  // 1) Клік на карту виділяє її і підсвічує ряд куди можна поставити
  handlerClickCard({target}){
    console.log("output:",this.userObj);
    if(target.nodeName !== "IMG") {
      return;
    }
    //Очистка попереднього кліка
    Array.from(this.hand.querySelectorAll(".active-card")).map(el => {el.classList.remove("active-card")});
    this.topRow.classList.remove("active-row");
    this.middleRow.classList.remove("active-row");
    this.bottomRow.classList.remove("active-row");
    //Очистка попереднього кліка
    this.selectedCardDiv = target;
    this.selectedCardDiv.classList.add("active-card"); 
    this.nameOfSelectedCard = target.getAttribute("data-name");
    console.log("target",target);
    console.log("target.getAttribute('data-name')",target.getAttribute("data-name"));
    this.selectedCard = this.userObj.cardHand.find(el=>el.name==this.nameOfSelectedCard);
    // this.selectedCard = this.userObj.cardHand.find(el=>{el.name==this.nameOfSelectedCard;
    //   console.log("el.name",el.name);
    //   console.log("this.nameOfSelectedCard",this.nameOfSelectedCard);
    //   console.log("el.name==this.nameOfSelectedCard",el.name==this.nameOfSelectedCard);
    // });
    this.topRow.classList.remove("active-row");
    console.log("this.CardHand", this.userObj.cardHand)
    if (this.selectedCard.positions.includes("Melee")){
      this.topRow.addEventListener("click", this.handlerClickRow);
      this.topRow.classList.add("active-row");
    }
    this.middleRow.classList.remove("active-row");
    if (this.selectedCard.positions.includes("Ranged")){
      this.middleRow.addEventListener("click", this.handlerClickRow);
      this.middleRow.classList.add("active-row");
    }
    this.bottomRow.classList.remove("active-row");
    if (this.selectedCard.positions.includes("Siege")){
      this.bottomRow.addEventListener("click", this.handlerClickRow);
      this.bottomRow.classList.add("active-row");
    }

  }
  // 2) Клік на ряд і ставить карту в ряд якщо вона виділена і можна її туди ставити запускається її аудіо файл
  handlerClickRow({target}){
    console.log("Target_ID", target);
    if(!target.classList.contains("rows__row")) return;
    this.userObj.topRow = this.userObj.topRow ? this.userObj.topRow :  [];
    this.userObj.middleRow = this.userObj.middleRow ? this.userObj.middleRow : [];
    this.userObj.bottomRow = this.userObj.bottomRow ? this.userObj.bottomRow : [];
    switch(target.id){
      case "player-topRow":
      this.userObj.topRow.push(this.selectedCard);
      break;
      case "player-middleRow":
      this.userObj.middleRow.push(this.selectedCard);
      break;
      case "player-bottomRow":
      this.userObj.bottomRow.push(this.selectedCard);
      break;
    }
    // this.userObj.cardHand = this.userObj.cardHand.filter(el=>el.name !== this.nameOfSelectedCard);
    const activeCardIndex = [...this.hand.querySelectorAll("img")].indexOf(this.selectedCardDiv)
    
    // const index = this.userObj.cardHand.indexOf(this.nameOfSelectedCard);
    this.userObj.cardHand.splice(activeCardIndex,1);
    this.topRow.classList.remove("active-row");
    this.middleRow.classList.remove("active-row");
    this.bottomRow.classList.remove("active-row");
    this.selectedCardDiv.classList.remove("active-card");
    target.append(this.selectedCardDiv.parentElement);
    //start audio of the selected card
    //
    // 2,1) Активуємо її властивість
    this.activeAbility()
    // 2,2) Перерахувати суму ряда і загальну кількість балів в раунді 
    this.calculateTotalNumberOfPoints()
    // 2,3) Відобразити результат на екрані
    this.displayResult()
    // 2,4) Зупинити таймер і передати хід 
    this.nextTurn()
  }
  // 2,1) Активуємо її властивість
  activeAbility(){
  // 
  }
  // 2,2) Перерахувати суму ряда і загальну кількість балів в раунді 
  calculateTotalNumberOfPoints(){
    this.userObj.topRowSum = this.userObj.topRow.reduce((acc, el)=> acc + el.strength, 0);
    this.userObj.middleRowSum = this.userObj.middleRow.reduce((acc, el)=> acc + el.strength, 0);
    this.userObj.bottomRowSum = this.userObj.bottomRow.reduce((acc, el)=> acc + el.strength, 0);
    this.userObj.total = this.userObj.topRowSum + this.userObj.middleRowSum + this.userObj.bottomRowSum;
  }
  // 2,3) Відобразити результат на екрані
  displayResult(){
    this.topRowSumDiv.textContent = this.userObj.topRowSum;
    this.middleRowSumDiv.textContent = this.userObj.middleRowSum;
    this.bottomRowSumDiv.textContent = this.userObj.bottomRowSum;
    this.totalDiv.textContent = this.userObj.total;
  }
  // 2,4) Зупинити таймер і передати хід 
  nextTurn(){
    this.userObj.myTurn = false;
    this.countdownTimer.resetTimer ();
    this.nameOfSelectedCard = null;
    this.selectedCard = null;
    this.selectedCardDiv = null;
    this.topRow.removeEventListener("click", this.handlerClickRow);
    this.middleRow.removeEventListener("click", this.handlerClickRow);
    this.bottomRow.removeEventListener("click", this.handlerClickRow);
  }
}
class CountdownTimer{
    constructor(parent){
      this.stopTime = null;
      this.id = null;
      // this.root = document.createElement("div");
      // this.root.classList.add("root");
      // parent.append(this.root);
      parent.innerHTML = `<div class="Countdown-timer">
      <p class="time js-time">60</p>
  </div>`;
      this.time = parent.querySelector(".js-time");
      this.startCountdownTimer = this.startCountdownTimer.bind(this);
      this.callback = this.callback.bind(this);
      this.updateTime = this.updateTime.bind(this);
      this.getFormattedTime = this.getFormattedTime.bind(this);
    }
    /*
    *Запускает таймер обратного отсчета, который считает время 
    *с текущего момента времени и до конца заданного интервала, обновляя содержимое элемента p.js-time 
    *новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
    */
    startCountdownTimer (CountdownTime){
      this.stopTime = Date.now() + (CountdownTime*1000);
      this.id = setInterval(this.callback, 1000);
    }
    /*
    *Callback для setInterval Расчитывает текущее состояние таймера
    *и запускает метод обновления значений на экране
    */
    callback (){
      let timeNow = Date.now();
      this.deltaTime = this.stopTime - timeNow;
      // 3)Якщо меньше 10 сек таймер міняє колір і звук
      if (Math.ceil(this.deltaTime/1000) == 10) {
          this.time.style.color = "#ff0000";
      }      
      if (this.deltaTime <= 0) {
        this.resetTimer();
        moveCardInGraveyard();//переход хода если не походил
        this.nextTurn();
      }
      this.updateTime(this.time, this.deltaTime);
    }
    /*
    *Полностью сбрасывает работу таймера
    */
    resetTimer (){
      clearInterval(this.id);
      this.id = null;   
      this.stopTime = null;
      this.deltaTime = 0;
      this.updateTime(this.time, 0);
    }
    /*
    * Обновляет поле счетчика новым значением при вызове
    * аргумент time это кол-во миллисекунд
    */
    updateTime(elem, time) {
      elem.textContent = this.getFormattedTime(time);
    }
    /*
    * Форматирует время выводимое на экран
    */
    getFormattedTime(time) {
      let seconds = Math.floor(time / 1000 % 60);
      seconds = seconds>=10? seconds : "0" + seconds;
      return (seconds);
    }
  }


  export {
    MakingMove,
    CountdownTimer,
  };