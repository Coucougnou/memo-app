import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"

  var firebaseConfig = {
    apiKey: "AIzaSyBcKY86M6jE30OgSPic5NC8pGeaaZzamiU",
    authDomain: "johnmemoapp-87312.firebaseapp.com",
    databaseURL: "https://johnmemoapp-87312-default-rtdb.firebaseio.com",
    projectId: "johnmemoapp-87312",
    storageBucket: "johnmemoapp-87312.appspot.com",
    messagingSenderId: "767058529868",
    appId: "1:767058529868:web:346646f4e0e00a6fcf2ee9"
  }
  
let firebaseApp = firebase.initializeApp(firebaseConfig)

let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()


export { firebaseAuth, firebaseDb }