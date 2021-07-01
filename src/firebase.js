import firebase from "firebase/app";
import "firebase/analytics"
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyB7w3x-Dof4UVUEyb5L7ieSwBV7gTUkoEI",
  authDomain: "skillfill-d3784.firebaseapp.com",
  projectId: "skillfill-d3784",
  storageBucket: "skillfill-d3784.appspot.com",
  messagingSenderId: "391778124503",
  appId: "1:391778124503:web:3fba35b0d1dbbc51ff2692",
  measurementId: "G-8N08FNT5LX"
};

firebase.initializeApp(firebaseConfig);
export default firebase;