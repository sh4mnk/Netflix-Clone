
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBWWMyHIXtJlxMzAn-w9I8iWPtJfveP8dQ",
    authDomain: "netflix-clone-8ec50.firebaseapp.com",
    projectId: "netflix-clone-8ec50",
    storageBucket: "netflix-clone-8ec50.firebasestorage.app",
    messagingSenderId: "805874596595",
    appId: "1:805874596595:web:168e94574e2c504422d586",
    measurementId: "G-XX2H1B0ZCL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password) => {
    try {
        const res = auth.createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
         await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            email,
            authProvider: "local"
        })
    } catch (error) {
       console.log(error);
       alert(error);
       
    }
}

const login = async (email, password) => {
    try {
       await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
         console.log(error);
         alert(error);
    }
}


const logout = () => {
    auth.signOut(auth);
}

export { auth, db, signup, login, logout };