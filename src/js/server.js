import firebase from './firebase';
import { renderBattlefield, body } from './battlefield';
import { dealingCards } from './dealingCards';
import { drawCoin } from './coinflip';
import { MakingMove } from "./MakingMove";
import { showMoreInfo } from './cardHoverDiscription';


// Первая функция которая запускается выполняет вход пользователя.
export function userEnter() {
	firebase
		.auth() // Метод авторизації користувача
		.signInAnonymously() // спосіб авторицації анонімно -- можна по телефону по паролю по google, git... 
		.then(function(user) {// Отримуєм проміс від сервера який вертає обєкт користуввача
			console.log('Logged in as Anonymous!');
			localStorage.setItem('userID', JSON.stringify(user.user.uid));// записуємо в storage значення user.id отримане з сервера
			firebase.database().ref(`user/${JSON.parse(localStorage.getItem('userID'))}`)//звертаємося до поля userID обєкта user
			.set({
				id: JSON.parse(localStorage.getItem('userID'))//перезаписуємо поле ID userID обєкта user
			});
		})
		.catch(function(error) {
			let errorCode = error.code;
			let errorMessage = error.message;
			// console.log(errorCode);
			// console.log(errorMessage);
		});
}

export function play() {//
	firebase.database().ref('rooms').once('value').then((snap) => snap.val()).then((rooms) => {// snap - отримуємо обєкт кімнат val - аналог response.JSON() once - один раз встановлюємо зєднання
		if (!rooms) {
			console.log('create first room');
			readDeck().then((data) => createRoom(JSON.parse(localStorage.getItem('userID')), data));
			return;
		}
		let count = 0;
		let keys = Object.keys(rooms);
		for (let room of keys){
			if (rooms[room].length < 2){
				readDeck().then((data) => joinToRoom(room, data));
				console.log('join');
				break;
			} else {
				count++;
				if(count < keys.length){
					continue
				} else {
				readDeck().then((data) => createRoom(JSON.parse(localStorage.getItem('userID')), data));
				console.log('create');
				}
			}
		}
	});
	firebase.database().ref('rooms').on('child_removed', function(data) {
		if (data.key === localStorage.getItem('roomID')) {
			console.log('Disconected');
		}
	});
}

export function createRoom(id, deck) {
	let randomTurn = Math.round(Math.random()) === 0;
	firebase
		.database()
		.ref(`rooms/${id}`)
		.set([
			{
				id: JSON.parse(localStorage.getItem('userID')),
				faction: JSON.parse(localStorage.getItem('faction')),
				name: 'Player 1',
				deck: deck,
				cardHand: [],
				graveyard: [],
				topRow: [],
				middleRow: [],
				bottomRow: [],
				endRound: false,
				myTurn: randomTurn,
				victoryCount: 0,
				topRowSum: 0,
				middleRowSum: 0,
				bottomRowSum: 0,
				total: 0
			}
		])
		.then(() => {
			listenRoomAdd();
			listenRoomClose();
		});
	localStorage.setItem('roomID', id);
	localStorage.setItem('index', 0);
}

export function joinToRoom(id, deck) { //Приєднання до існуючої кімнати нового користувача
	firebase
		.database()
		.ref(`rooms/${id}`)
		.once('value')
		.then((snap) => snap.val())
		.then((data) => {
			let turn = !data[0].myTurn;
			data.push({
				id: JSON.parse(localStorage.getItem('userID')),
				faction: JSON.parse(localStorage.getItem('faction')),
				name: 'Player 2',
				deck: deck,
				cardHand: [],
				graveyard: [],
				topRow: [],
				middleRow: [],
				bottomRow: [],
				endRound: false,
				myTurn: turn,
				victoryCount: 0,
				topRowSum: 0,
				middleRowSum: 0,
				bottomRowSum: 0,
				total: 0
			});
			return data;
		})
		.then((data) => firebase.database().ref(`rooms/${id}`).set(data))
		.then(() => {
			listenRoomAdd();
			listenRoomClose();
			});
	localStorage.setItem('roomID', id);
	localStorage.setItem('index', 1);
}

export function removeRoom() { // видалення кімнати
	firebase.database().ref(`rooms/${localStorage.getItem('roomID')}`).remove();
	console.log('remove');
}

export function userExit() { // виход з гри при закритті вкладки
	removeRoom();
	firebase.database().ref(`user/${JSON.parse(localStorage.getItem('userID'))}`).remove();
	alert('Ваш оппонент покинул игру');
}

// export function redirectUser() {
	// console.log('asdfdfsdfsdfsdf');
// }

export function listenRoomAdd() {// слухаємо в кімнаті чи зявився новий користувач
	firebase.database().ref(`rooms/${localStorage.getItem('roomID')}`).on('child_added', function(data) {
		console.log("data",data);
		if(data.key === "1"){
			firebase
			.database()
			.ref(`rooms/${localStorage.getItem('roomID')}`)
			.once('value')
			.then((snap) => snap.val())
			.then((data) => {
				if (data.length === 2) {								// if to room coming second player... 
					renderBattlefield(body);							// ...rewrite body content...
					findUser()
						.then((result) => {
							console.log('listen room add log!!!!');
							dealingCards(result.user, result.opponent);	// ...calling dealingCards function...
							return result;
						})
						.then(users => {
							drawCoin(users);							// ...draw the Coin...
							return users;
						})
						.then(users=> {
							// console.log("User Object with ", users.user)
							let cardMouseOver = new showMoreInfo();
							cardMouseOver.start(users);
							if(users.user.myTurn === false) return;
							let makingMove = new MakingMove();
							setTimeout(()=>{
								makingMove.start(users);
							}, 3000);
						});
					listenRoomChange(); 
				}
			});
		}
	});
}

function listenRoomClose() {
	firebase
		.database().ref('rooms').on('child_removed', (snap) => {
			if(snap.key == localStorage.getItem('roomID')) {
				alert('your opponent left the room');

				//run function to redirect to start page
			}	
		});
}

// firebase.database().ref('decks').once('value')
//         .then(snap => console.log(snap.val()))

function readDeck() {// функція отримує вибрану(записано в локалсторадж) колоду з сервера
	return firebase
		.database()
		.ref(`decks/${JSON.parse(localStorage.getItem('faction'))}`)
		.once('value')
		.then((snap) => snap.val());
}
function findUser() {// знаходимо користувача і запускаемо dealingCards яка роздає карти
	return firebase
		.database()
		.ref(`rooms/${localStorage.getItem('roomID')}`)
		.once('value')
		.then((snap) => snap.val())
		.then((arr) => {
			// console.log("Find User Array")
			// console.log(arr)
			let x = arr.find((el) => el.id === JSON.parse(localStorage.getItem('userID')));
			let y = arr.find((el) => el.id !== JSON.parse(localStorage.getItem('userID')));
			return { user: x, opponent: y };
		})
}


export function updateUserSingleProperty (property, value, index) {// зиписуємо результати роздачі на бекенд
	// console.log("index in update User Object",index);
	firebase
		.database()
		.ref(`rooms/${localStorage.getItem('roomID')}`)
		.once('value')
		.then(snap => snap.val())
		.then(arr => {
			let playerObj = arr.find((el) => el.id === index);
			// console.log('UPDATE!!!!!!!!!!!');
			return {...playerObj, [property]: value};
		})
		.then(playerObj => 
			firebase
				.database()
				.ref(`rooms/${localStorage.getItem('roomID')}/${index}`)
				.update(playerObj));
}

export function updateUserObject(obj, index) {
	return firebase
	.database()
	.ref(`rooms/${localStorage.getItem('roomID')}`)
	.once('value')
	.then(snap => snap.val())
	// .then(arr => {
	// 	let playerObj = arr.find((el) => el.id === index);
	// 	return {...obj};
	// })
	.then(() => 
		firebase
			.database()
			.ref(`rooms/${localStorage.getItem('roomID')}/${index}`)
			.update(obj));
}

function listenRoomChange() {
	firebase
		.database()
		.ref(`rooms/${localStorage.getItem('roomID')}/${JSON.parse(localStorage.getItem('index'))}`)
		.on('child_changed', (data) => {
			// console.log(data);
			if(data.key === 'myTurn') {
				findUser()
				 .then(users => {
					let makingMove = new MakingMove();
					makingMove.start(users);
					// console.log(data.val());
					console.log('!!!!!!!!!!!!  start 2nd round !!!!!!!!!!!!!!!');
					
				 })
			}
		})

}
