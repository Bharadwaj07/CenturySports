// The core Firebase JS SDK is always required and must be listed first
import 'https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js';

/* TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries */
// import 'https://www.gstatic.com/firebasejs/7.13.2/firebase-analytics.js';
import 'https://www.gstatic.com/firebasejs/7.13.2/firebase-firestore.js';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBD90gDFsmE6CO6eIziHpYyyQ289V5bvoo",
    authDomain: "angular-maps-273518.firebaseapp.com",
    databaseURL: "https://angular-maps-273518.firebaseio.com",
    projectId: "angular-maps-273518",
    storageBucket: "angular-maps-273518.appspot.com",
    messagingSenderId: "630382493533",
    appId: "1:630382493533:web:7260fd547202d77a3572b4",
    measurementId: "G-KZGZNMBGWZ"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings( {timestampsInSnapshots: true});