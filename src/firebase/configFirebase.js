import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'



        const firebaseConfig = {
          apiKey: "AIzaSyAnn_0ex5n4JaSJkMiVc1keeIUzReXI7l8",
          authDomain: "instagram-df56c.firebaseapp.com",
          projectId: "instagram-df56c",
          storageBucket: "instagram-df56c.appspot.com",
          messagingSenderId: "729146998904",
          appId: "1:729146998904:web:ff4acd820811dcfe1c6d8d",
          measurementId: "G-D6LDDZKKBT"
        }

        firebase.initializeApp(firebaseConfig)

        const projectFirestore = firebase.firestore()
        const projectStorage = firebase.storage()

        //timestamp
        const timestamp = firebase.firestore.FieldValue.serverTimestamp()

        export {projectFirestore, projectStorage, timestamp}