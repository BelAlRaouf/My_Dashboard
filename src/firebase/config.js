import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCvOCBzSOHU7aH30f8i_9iQPnkWR3GJ0N0",
    authDomain: "my-dashboard-site.firebaseapp.com",
    projectId: "my-dashboard-site",
    storageBucket: "my-dashboard-site.appspot.com",
    messagingSenderId: "11558574955",
    appId: "1:11558574955:web:9bb956674aed28f83c4a2e"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init service
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStrage = firebase.storage()

  // timestamp
  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore, projectAuth, projectStrage , timestamp }

