import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/database"
import 'firebase/compat/storage';

var app = firebase.initializeApp({
  apiKey:"AIzaSyCVeHP1nYTxWWEGyN4bLk0IeDogfhdJA9o",
  authDomain: "ipapz-3e385.firebaseapp.com",
  databaseURL: "https://ipapz-3e385-default-rtdb.firebaseio.com/",
  projectId:"ipapz-3e385",
  storageBucket:"ipapz-3e385.appspot.com",
  messagingSenderId: "353668839725",
  appId: "1:353668839725:web:d918977ff65b626c5bbba4"
})
export const storage = app.storage();

export var auth = app.auth();
export default app
