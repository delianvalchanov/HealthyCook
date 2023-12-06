import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyDGVdLmqaxx9NpS00UnwMLl47_DzgqClHg",
   authDomain: "healthycook-e5e00.firebaseapp.com",
   projectId: "healthycook-e5e00",
   storageBucket: "healthycook-e5e00.appspot.com",
   messagingSenderId: "666471033542",
   appId: "1:666471033542:web:a04b4e9f6a20bf1a3745c7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
