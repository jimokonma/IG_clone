import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAY7Mfj3SJ-ZEFfirBdVra_-SQ6HlXvIGg",
  authDomain: "rn-instagram-clone-aef5e.firebaseapp.com",
  projectId: "rn-instagram-clone-aef5e",
  storageBucket: "rn-instagram-clone-aef5e.appspot.com",
  messagingSenderId: "764721843646",
  appId: "1:764721843646:web:c84f26e28be0d9106d7def",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
