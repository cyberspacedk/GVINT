import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'
// Initialize Firebase
const config = {
  apiKey: "AIzaSyC4rPHEwcuFq5URs-jKkxGdZpKJULIUZOc",
  authDomain: "gwent-js.firebaseapp.com",
  databaseURL: "https://gwent-js.firebaseio.com",
  projectId: "gwent-js",
  storageBucket: "gwent-js.appspot.com",
  messagingSenderId: "599400950827"
};
firebase.initializeApp(config);

 export default firebase;