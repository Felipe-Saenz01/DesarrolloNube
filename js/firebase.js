// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
//metodo para el ingreso de usuarios
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
//metodo para usar los servicios de Firestore
import { getFirestore, collection, addDoc, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBlv0O-weOtFTyd8vRRUlAaUq5koAAjcd0",
  authDomain: "clouddevelopment-7616e.firebaseapp.com",
  projectId: "clouddevelopment-7616e",
  storageBucket: "clouddevelopment-7616e.appspot.com",
  messagingSenderId: "607861965238",
  appId: "1:607861965238:web:da7d1f729eca98555dc117",
  measurementId: "G-4Q93Y1S7PY"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize Autentication Login
const auth = getAuth();
// Initialize Firestore
export const db = getFirestore(app);

export const loginValidation = (email,password) => signInWithEmailAndPassword(auth, email, password)

export const registerUser = (email,password) => createUserWithEmailAndPassword(auth, email, password)

////método para guardar en firestore designando un token aleatorio
export const registerAddDoc = (email, password, departamento, ciudad, direccion) => {
  addDoc(collection(db, "users"),{
    email,
    password,
    departamento,
    ciudad,
    direccion
  })

}

//método para guardar en firestore designando un parametro como token
export const registerSetDoc = (nombre, apellido, direccion, genero, rh, telefono, departamento, ciudad, email, imagen) => {
  setDoc(doc(db, "DBusers", email),{
    nombre,
    apellido,
    direccion,
    genero,
    rh,
    telefono,
    departamento,
    ciudad,
    email,
    imagen
  })

}
