import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

    
//método para obtener datos especificos de firestore indicando nombre de la base de datos y el id o token
export const getDetails = async (email) =>{
    const card = document.getElementById('cardInformacion');
    const docRef = doc(db, "DBusers", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      // console.log("Document data:", docSnap.data().nombre);
      card.innerHTML=`
      <div class="card-header">
        <h5 class="card-title">${docSnap.data().nombre} ${docSnap.data().apellido}</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Email: ${docSnap.data().email}</p>
        <p class="card-text">Telefono: ${docSnap.data().telefono}</p>
        <p class="card-text">Genero: ${docSnap.data().genero}</p>
        <p class="card-text">RH: ${docSnap.data().rh}</p>
        <p class="card-text">Departamento: ${docSnap.data().departamento}</p>
        <p class="card-text">ciudad: ${docSnap.data().ciudad}</p>
      </div>
      <div class="card-footer text-bg-secondary">
        Development Cloud
      </div>
      `;
      } else {
      console.log("No such document!");
      }
    


}


const formulario = document.getElementById("BuscarRegistro");

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const email = document.getElementById('email');
    getDetails(email.value);
    
})
