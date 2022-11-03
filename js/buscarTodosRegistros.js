import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";


const querySnapshot = await getDocs(collection(db, "DBusers"));

const tabla = document.getElementById('cuerpoTabla');

querySnapshot.forEach((doc) => {
    const row = tabla.insertRow();
    const registros = doc.data();
    row.innerHTML= `
    <tr>
        <td scope="row">${registros.nombre}</td>
        <td >${registros.apellido}</td>
        <td >${registros.email}</td>
        <td >${registros.genero}</td>
        <td >${registros.telefono}</td>
        <td >${registros.rh}</td>
        <td >${registros.departamento}</td>
        <td >${registros.ciudad}</td    >
    </tr>
    `;
  
});