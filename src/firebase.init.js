// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDspoYxaLpZa_hjvJ0enjufowv_pRbnZHk",
    authDomain: "choice-14687.firebaseapp.com",
    projectId: "choice-14687",
    storageBucket: "choice-14687.appspot.com",
    messagingSenderId: "405118392958",
    appId: "1:405118392958:web:df4391028a7d333506562f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;