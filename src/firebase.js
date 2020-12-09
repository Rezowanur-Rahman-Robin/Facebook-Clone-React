import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiPxwu8OmBAEus9cY6XOYaj2AAJPDuqJ0",
  authDomain: "facebook-clone-64f84.firebaseapp.com",
  databaseURL: "https://facebook-clone-64f84.firebaseio.com",
  projectId: "facebook-clone-64f84",
  storageBucket: "facebook-clone-64f84.appspot.com",
  messagingSenderId: "551391705555",
  appId: "1:551391705555:web:ade7b62564b9f7dfde9726",
  measurementId: "G-5Y7G1SCYEE"
};
const firebaseApp= firebase.initializeApp(firebaseConfig);

const db =firebaseApp.firestore();

const auth= firebase.auth();

const provider= new firebase.auth.GoogleAuthProvider();


export {auth,provider};
export default db;