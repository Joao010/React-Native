import firebase from 'firebase/app'
import 'firebase/database'

let firebaseConfig = {
  apiKey: "AIzaSyAylxROyo0I638NVmWcVZyc6IGJGKm1vUM",
  authDomain: "myapp-35e31.firebaseapp.com",
  projectId: "myapp-35e31",
  storageBucket: "myapp-35e31.appspot.com",
  messagingSenderId: "1047497613196",
  appId: "1:1047497613196:web:fad30e1c6f3a2b618e00a9",
  measurementId: "G-N33QYWXCTK"
}

if(!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase