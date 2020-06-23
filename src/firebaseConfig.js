import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: "AIzaSyCjPOtumwpvgHXNv7FQbYgJDGCMNcUVYX0",
  authDomain: "treasurehunt-271619.firebaseapp.com",
  databaseURL: "https://treasurehunt-271619.firebaseio.com",
  projectId: "treasurehunt-271619",
  storageBucket: "treasurehunt-271619.appspot.com",
  messagingSenderId: "830924088809",
  appId: "1:830924088809:web:66d382089f730c479a1778",
  measurementId: "G-8778D8KY66"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore();
const storageRef = firebase.storage().ref();

// firebase collections
const videoCollection = db.collection('videoData');

export {
    db,
    videoCollection,
    storageRef
}