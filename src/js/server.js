import firebase from './firebase';
import { renderBattlefield, body } from './battlefield';
import { dealingCards } from './dealingCards';

export function userEnter() {
	firebase
		.auth()
		.signInAnonymously()
		.then(function(user) {
			console.log('Logged in as Anonymous!');
			localStorage.setItem('userID', JSON.stringify(user.user.uid));
			firebase.database().ref(`user/${JSON.parse(localStorage.getItem('userID'))}`).set({
				id: JSON.parse(localStorage.getItem('userID'))
			});
		})
		.catch(function(error) {
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
		});
}

export function play() {
	firebase.database().ref('rooms').once('value').then((snap) => snap.val()).then((rooms) => {
		if (!rooms) {
			console.log('create first room');
			readDeck().then((data) => createRoom(JSON.parse(localStorage.getItem('userID')), data));
			return;
		}
		let keys = Object.keys(rooms);
		for (let room of keys) {
			if (rooms[room].length < 2) {
				readDeck().then((data) => joinToRoom(room, data));
				console.log('join');
				break;
			} else {
				readDeck().then((data) => createRoom(JSON.parse(localStorage.getItem('userID')), data));
				console.log('create');
			}
		}
	});
	firebase.database().ref('rooms').on('child_removed', function(data) {
		// console.log(localStorage.getItem('roomID'));
		if (data.key === localStorage.getItem('roomID')) {
			console.log('Disconected');
		}
	});
}

export function createRoom(id, deck) {
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
				myTurn: false,
				victoryCount: 0,
				topRowSum: 0,
				middleRowSum: 0,
				bottomRowSum: 0,
				total: 0
			}
		])
		.then(() => listenRoomAdd());
	localStorage.setItem('roomID', id);
	localStorage.setItem('index', 0);
}

export function joinToRoom(id, deck) {
	firebase
		.database()
		.ref(`rooms/${id}`)
		.once('value')
		.then((snap) => snap.val())
		.then((data) => {
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
				myTurn: false,
				victoryCount: 0,
				topRowSum: 0,
				middleRowSum: 0,
				bottomRowSum: 0,
				total: 0
			});
			return data;
		})
		.then((data) => firebase.database().ref(`rooms/${id}`).set(data))
		.then(() => listenRoomAdd());
	localStorage.setItem('roomID', id);
	localStorage.setItem('index', 1);
}

export function removeRoom() {
	firebase.database().ref(`rooms/${localStorage.getItem('roomID')}`).remove();
	console.log('remove');
}

export function userExit() {
	removeRoom();
	alert('Ваш оппонент покинул игру');
}

export function redirectUser() {
	console.log('asdfdfsdfsdfsdf');
}

export function listenRoomAdd() {
	firebase.database().ref(`rooms/${localStorage.getItem('roomID')}`).on('child_added', function(data) {
		firebase
			.database()
			.ref(`rooms/${localStorage.getItem('roomID')}`)
			.once('value')
			.then((snap) => snap.val())
			.then((data) => {
				if (data.length === 2) {
					renderBattlefield(body);
					findUser();
					console.log('start');
				}
			});
	});
}

// firebase.database().ref('decks').once('value')
//         .then(snap => console.log(snap.val()))

function readDeck() {
	return firebase
		.database()
		.ref(`decks/${JSON.parse(localStorage.getItem('faction'))}`)
		.once('value')
		.then((snap) => snap.val());
}
function findUser() {
	return firebase
		.database()
		.ref(`rooms/${localStorage.getItem('roomID')}`)
		.once('value')
		.then((snap) => snap.val())
		.then((arr) => {
			let x = arr.find((el) => el.id === JSON.parse(localStorage.getItem('userID')));
			let y = arr.find((el) => el.id !== JSON.parse(localStorage.getItem('userID')));
			return { user: x, opponent: y };
		})
		.then((result) => {
            // console.log(result);
			dealingCards(result.user, result.opponent);
        })
}


export function updateUserObject (property, value) {
	firebase
		.database()
		.ref(`rooms/${localStorage.getItem('roomID')}`)
		.once('value')
		.then(snap => snap.val())
		.then(arr => {
			let playerObj = arr.find((el) => el.id === JSON.parse(localStorage.getItem('userID')));
			return {...playerObj, [property]: value};
		})
		.then(playerObj => 
			firebase
				.database()
				.ref(`rooms/${localStorage.getItem('roomID')}/${JSON.parse(localStorage.getItem('index'))}`)
				.update(playerObj));
}