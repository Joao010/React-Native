import firebase from 'firebase/app'
import 'firebase/database'

let firebaseConfig = {
  //config
}

if(!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase
