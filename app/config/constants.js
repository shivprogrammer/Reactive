import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyCDNydauPikdT336VINKs98yUAEPihuGsA",
  authDomain: "shivmorodo.firebaseapp.com",
  databaseURL: "https://shivmorodo.firebaseio.com",
  projectId: "shivmorodo",
  storageBucket: "shivmorodo.appspot.com",
  messagingSenderId: "429674566085"
})

const ref = firebase.database().ref()
const firebaseAuth = firebase.auth()
const facebookProvider = firebase.auth.FacebookAuthProvider

export {
  ref,
  firebaseAuth,
  facebookProvider
}
