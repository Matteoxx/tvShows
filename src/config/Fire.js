import firebase from "firebase";

const config = {
  apiKey: "AIzaSyC4Re1Q471zbrXPQofkwWUaqvu4CyMT-DI",
  authDomain: "tvshows-aac11.firebaseapp.com",
  databaseURL: "https://tvshows-aac11.firebaseio.com",
  projectId: "tvshows-aac11",
  storageBucket: "tvshows-aac11.appspot.com",
  messagingSenderId: "1020793404708",
  appId: "1:1020793404708:web:59133c155b943c82"
};
const fire = firebase.initializeApp(config);
export default fire;
