import firebase from './firebase';


export function userEnter() {
    firebase.auth().signInAnonymously()
        .then(function (user) {
            console.log('Logged in as Anonymous!')
            localStorage.setItem('userID', JSON.stringify(user.user.uid));
            firebase.database().ref(`user/${JSON.parse(localStorage.getItem('userID'))}`).set({
                id: JSON.parse(localStorage.getItem('userID'))
            })
        }).catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}

export function play() {
    firebase.database().ref('rooms').once('value')
        .then(snap => snap.val())
        .then(rooms => {
            if (!rooms) {
                createRoom(JSON.parse(localStorage.getItem('userID')));
                console.log('create first room');
                listenRoomAdd();
                return;
            }
            let keys = Object.keys(rooms);
            for (let room of keys) {
                if (rooms[room].length < 2) {
                    joinToRoom(room);
                    console.log('join');
                    break;
                } else {
                    createRoom(JSON.parse(localStorage.getItem('userID')));
                    console.log('create');
                }
            }
        })
    firebase.database().ref('rooms').on('child_removed', function (data) {
        // console.log(localStorage.getItem('roomID'));
        if (data.key === localStorage.getItem('roomID')) {
            console.log('Disconected');
        }

    })
}

export function createRoom(id) {
    firebase.database().ref(`rooms/${id}`).set([{
        id: JSON.parse(localStorage.getItem('userID')),
        deck: {
            card1: {
                name: 'Ciri'
            },
            card2: {
                name: 'Geralt'
            }
        }
    }])
    localStorage.setItem('roomID', id);
}

export function joinToRoom(id) {
    firebase.database().ref(`rooms/${id}`).once('value')
        .then(snap => snap.val())
        .then(data => {
            data.push({
                id: JSON.parse(localStorage.getItem('userID')),
                deck: {
                    card1: {
                        name: 'Geralt'
                    },
                    card2: {
                        name: 'Ciri'
                    }
                }
            })
            return data
        })
        .then(data => firebase.database().ref(`rooms/${id}`).set(data))
        .then(() => listenRoomAdd())
    localStorage.setItem('roomID', id);

}

export function removeRoom() {
    firebase.database().ref(`rooms/${localStorage.getItem('roomID')}`).remove();
    console.log('remove');
}

export function userExit () {
    removeRoom();
}

export function redirectUser () {
    console.log('asdfdfsdfsdfsdf');
}

export function listenRoomAdd () {
    firebase.database().ref(`rooms/${localStorage.getItem('roomID')}`).on('child_added', function(data) {
        firebase.database().ref(`rooms/${localStorage.getItem('roomID')}`).once('value')
        .then(snap => snap.val())
        .then(data=> {
            if(data.length === 2) {
                if(window.location.pathname.substr(1) !== 'C:/FE/Compendium/gwentServerTry/game.html') {
                    window.location = 'C:/FE/Compendium/gwentServerTry/game.html';
                    console.log('start');
                }
            }
        })
    })
}